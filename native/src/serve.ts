import {createServer} from 'node:http';
import {readFile,realpath} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';

if(!process.argv[2])throw new Error('Usage: pnpm preview OUTPUT_DIRECTORY [PORT]');
const root=await realpath(resolve(process.argv[2]));
const port=Number(process.argv[3]??8098);
if(!Number.isInteger(port)||port<1024||port>65535)throw new Error('Invalid preview port');
const mime:Record<string,string>={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.json':'application/json','.wasm':'application/wasm'};
createServer(async(req,res)=>{
  try{
    let path=decodeURIComponent(new URL(req.url??'/','http://localhost').pathname);
    if(path.endsWith('/'))path+='index.html';
    const file=await realpath(resolve(root,'.'+path));
    if(!file.startsWith(root+sep))throw new Error('Outside preview root');
    const bytes=await readFile(file);
    res.setHeader('Content-Type',mime[extname(file)]??'application/octet-stream');
    res.setHeader('Cache-Control','no-store');res.end(bytes);
  }catch{res.statusCode=404;res.end('Not found');}
}).listen(port,'127.0.0.1',()=>console.log(`Local preview: http://127.0.0.1:${port}`));
