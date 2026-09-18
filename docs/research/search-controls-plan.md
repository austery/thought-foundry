# Search controls implementation

Scope: One full-text search interface with an exact-phrase toggle, a speaker filter, and one card per article with collapsible additional passages. Header searches navigate to this interface. Preserve content, URLs, indexed article scope, and the existing speaker directory. No model, second index, production deployment, or ranking change.

Acceptance: Real Pagefind searches demonstrate phrase precision, intersected speaker filtering, readable article metadata, expandable passages, pagination, URL-restored state, keyboard/mobile operation, and recoverable failures. Verify a fixed-content full build, indexed URL coverage, native checks/tests, and a separate review before publishing a task PR.
