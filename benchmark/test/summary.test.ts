import {test} from 'node:test';import assert from 'node:assert/strict';
import {statistics,summarize,readCompletedPair,type CompletedPair} from '../src/summary.js';
test('final gate requires all repetitions and compatibility even when speed improves',()=>{
 const pairs:CompletedPair[]=['cold','warm','added'].flatMap(mode=>(mode==='added'?[1]:[1,2,3]).map(repetition=>({mode:mode as CompletedPair['mode'],repetition,totals:{eleventy:600,hugo:200},strictParity:false})));
 assert.equal(summarize(pairs).performanceThreshold,true);assert.equal(summarize(pairs).recommendMigration,false);
 assert.throws(()=>summarize(pairs.slice(1)),/Missing or duplicate/);assert.throws(()=>summarize([...pairs,pairs[0]!]),/Missing or duplicate/);
 assert.deepEqual(statistics([5,1,3]),{median:3,min:1,max:5});
 assert.throws(()=>readCompletedPair({status:'failed'}),/Unsuccessful/);
 assert.throws(()=>readCompletedPair({status:'completed',mode:'warm',repetition:1,strictParity:true,sourceUnchanged:true,results:{eleventy:[],hugo:[]},totals:{eleventy:0,hugo:0}}),/Incomplete/);
});

test('mixed identities and overlapping performance ranges cannot recommend migration',async()=>{
 const {experimentIdentity,requireSameExperiment}=await import('../src/summary.js');
 const m={baselineSha:'b',contentSha:'c',candidateSha:'h',siteLockHash:'s',toolsLockHash:'t',pnpm:'10',environment:{node:'22',runId:'1',attempt:'1'}};
 const identity=experimentIdentity(m,{unchanged:true,before:'f',after:'f'},{'@11ty/eleventy':'3',pagefind:'1'},{hugo:'0.165'});
 const mixed=experimentIdentity({...m,candidateSha:'other'},{unchanged:true,before:'f',after:'f'},{'@11ty/eleventy':'3',pagefind:'1'},{hugo:'0.165'});
 assert.throws(()=>requireSameExperiment([...Array<string>(6).fill(identity),mixed]),/Mixed/);
 const pairs:CompletedPair[]=['cold','warm','added'].flatMap(mode=>(mode==='added'?[1]:[1,2,3]).map(repetition=>({mode:mode as CompletedPair['mode'],repetition,totals:{eleventy:600,hugo:repetition===3?700:200},strictParity:true})));
 assert.equal(summarize(pairs).performanceThreshold,true);assert.equal(summarize(pairs).recommendMigration,false);
 assert.equal(summarize(pairs).consistent,false);assert.equal(summarize(pairs).overlappingRanges,true);
});
