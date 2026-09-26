# Reading experience baseline evidence

Date: 2026-09-26

## Current state

The site remains on `codex/simplify-navigation`, HEAD
`c8a66ae1ff117f59a1687e7d3bf67621d56e4f4d`. No implementation edits or task
commits have been made. The proposed ticket breakdown is awaiting approval.
Existing content-submodule changes and untracked research/review work remain.

## Executed checks

- `pnpm check`: passed with Node 22.19.0 and pnpm 10.14.0.
- `node --import tsx --test test/x-discovery.test.ts`: passed, 5 tests.
- `node --import tsx --test test/x-reader-render.test.ts`: passed, 1 test,
  with Hugo extended 0.165.0.

These checks establish a limited existing-code baseline, not acceptance of the
reading redesign. No full suite, full-corpus comparison, or browser acceptance
has been performed in this task.

## Available pinned toolchain

Node: `/Users/leipeng/.nvm/versions/node/v22.19.0/bin`.

Hugo: `.native-build/tools/hugo-0.165.0/expanded/Payload/hugo`.

The executable reports:
`hugo v0.165.0-76a5e1880ab46688155b02e99bab9be2a6134492+extended darwin/arm64`.
No system installation or global configuration was changed.

## Evidence affecting implementation

- The existing discovery test verifies a 280-code-point preview and the existing
  greater-than-280 long threshold. That test passes. A blanket diagnosis that
  the producer does not populate preview is unsupported.
- The render test covers literal text, saved-post anchors, exclusion and search
  metadata, but its short fixture does not exercise collapsed long previews.
  It cannot disprove the reported long-preview rendering bug.
- The supplied Theme System prototype, as well as its matrix, uses 700-weight
  Paper bold. The README's prose prescribes 600. This is a real source conflict,
  not a reason to silently claim exact fidelity to both.
- The supplied desktop width arithmetic still cannot satisfy all listed widths
  and margins at the 993px breakpoint. The draft records alternative resolutions.

## Remaining gate

Approve or revise the ticket breakdown and proposed conflict resolutions in
`proposal.md`. The explicitly invoked to-tickets skill requires approval before
publishing tickets. Automatic goal continuations are not approval.
