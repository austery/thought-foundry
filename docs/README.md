# Thought Foundry Documentation Index

**Last Updated**: 2025-12-05

---

## 📚 Documentation Structure

### For AI Assistants
- **[AI Instructions](../.github/AI-INSTRUCTIONS.md)** - Comprehensive guide for AI assistants working with this codebase
- **[CLAUDE.md](../CLAUDE.md)** - Legacy Claude-specific instructions (being phased out)
- **[GEMINI.md](../GEMINI.md)** - Legacy Gemini-specific instructions (being phased out)

### Performance & Optimization

#### Strategic Documents
- **[OPTIMIZATION_WHITEBOARD.md](OPTIMIZATION_WHITEBOARD.md)** 🎯 - Strategic thinking and next steps (START HERE for optimization decisions)
- **[eleventy-optimization-plan.md](eleventy-optimization-plan.md)** - Original optimization plan from Claude and Gemini

#### Implementation Logs
- **[optimization-implementation-log.md](optimization-implementation-log.md)** - Detailed Phase 2 & 3 implementation log
- **[OPTIMIZATION_SUMMARY.md](OPTIMIZATION_SUMMARY.md)** - Quick summary of optimization results
- **[PHASE3_COMPLETE.md](PHASE3_COMPLETE.md)** - Phase 3 completion summary

#### Analysis Documents
- **[performance-optimization-analysis.md](performance-optimization-analysis.md)** - Performance analysis and benchmarking
- **[performance-issues.md](performance-issues.md)** - Identified performance bottlenecks
- **[scaling-strategy-analysis.md](scaling-strategy-analysis.md)** - Long-term scaling strategies

### Content & Data Quality

- **[metadata_quality_report.md](metadata_quality_report.md)** - Metadata quality audit results
- **[v3_compliance_audit.md](v3_compliance_audit.md)** - Eleventy v3 compliance check
- **[video_documents_audit.md](video_documents_audit.md)** - Video content audit
- **[non_video_files_audit.md](non_video_files_audit.md)** - Non-video content audit
- **[MIGRATION_SUMMARY.md](MIGRATION_SUMMARY.md)** - Content migration summary

### Session Notes & Scratchpad

The `scratchpad/` directory contains session summaries and working notes:

- **2025-11-24**: Various optimization sessions, Pagefind migration
- **2025-11-27**: Metadata audit and migration

---

## 🚀 Quick Navigation

### I want to...

**Understand the optimization work**  
→ Start with [OPTIMIZATION_WHITEBOARD.md](OPTIMIZATION_WHITEBOARD.md) for strategic overview  
→ Then read [optimization-implementation-log.md](optimization-implementation-log.md) for details

**Make code changes**  
→ Read [AI Instructions](../.github/AI-INSTRUCTIONS.md) first  
→ Check [eleventy-optimization-plan.md](eleventy-optimization-plan.md) to avoid regressions

**Analyze performance**  
→ [performance-optimization-analysis.md](performance-optimization-analysis.md) for benchmarks  
→ [performance-issues.md](performance-issues.md) for known issues

**Audit content quality**  
→ [metadata_quality_report.md](metadata_quality_report.md) for current state  
→ [v3_compliance_audit.md](v3_compliance_audit.md) for compliance issues

**Decide next steps**  
→ [OPTIMIZATION_WHITEBOARD.md](OPTIMIZATION_WHITEBOARD.md) - Contains decision tree and action items

---

## 📊 Current State Snapshot

**Build Performance** (as of 2025-12-05):
```
Build Time: 80 seconds
Slug Calls: 511,244 (91% cache hit rate)
Generated Files: 35,887
Indexed Pages: 3,240
```

**Optimization Status**:
- ✅ Phase 1: Gemini initial optimizations
- ✅ Phase 2: Collection & entity optimizations (74s build)
- ✅ Phase 3: Template-level optimizations (80s build)
- 🤔 Phase 4: TBD (see OPTIMIZATION_WHITEBOARD.md)

**Key Decisions Needed**:
1. Phase 3 performance trade-off (80s vs 74s)
2. Next optimization priority (Pagination? Incremental builds?)
3. Long-term scaling strategy

---

## 🔗 External Resources

- **Live Site**: https://austery.github.io/
- **Repository**: https://github.com/austery/thought-foundry
- **Eleventy Docs**: https://www.11ty.dev/docs/
- **Pagefind Docs**: https://pagefind.app/docs/

---

## 📝 Maintenance Notes

### Document Lifecycle

**Active Documents** (regularly updated):
- OPTIMIZATION_WHITEBOARD.md
- optimization-implementation-log.md
- AI-INSTRUCTIONS.md

**Reference Documents** (stable):
- eleventy-optimization-plan.md
- performance-optimization-analysis.md
- metadata_quality_report.md

**Archive** (historical):
- scratchpad/ session notes
- PHASE3_COMPLETE.md (milestone marker)

### Updating Documentation

When making significant changes:
1. Update [AI Instructions](../.github/AI-INSTRUCTIONS.md)
2. Log changes in [optimization-implementation-log.md](optimization-implementation-log.md)
3. Update strategic thinking in [OPTIMIZATION_WHITEBOARD.md](OPTIMIZATION_WHITEBOARD.md)
4. Consider updating this index

---

**Maintained By**: Lei Peng  
**Contributors**: Claude (Anthropic), Gemini (Google), GitHub Copilot
