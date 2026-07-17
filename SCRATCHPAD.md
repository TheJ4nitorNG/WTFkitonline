# Project Scratchpad
- Project initialized via Guided Setup Protocol.
- Extracted context from WTFKit README.
- Scaffolded Next.js/TypeScript structure configuration.

## Track: track_001
- [x] Task 1: Initialize Next.js project. Set up Jest.
- [x] Task 2: Configure basic routing and components (Home, Privacy, Terms).
- [x] Task 3: Implement the Home page content detailing the WTFKit debugger value proposition, usage, and installation.
- [x] Task 4: Implement the Privacy Policy and Terms of Service pages.
- [x] Task 5: Review the codebase to ensure zero placeholders, mocks, or TODOs exist.
- [x] Task 6: Prepare the application for deployment.

## Track: track_002
- [x] Task 1: Update `src/__tests__/pages.test.tsx` to expect new links (TDD Red Phase).
- [x] Task 2: Enhance visual design of Home page.
- [x] Task 3: Add GitHub repository links (WTFKit and website source).
- [x] Task 4: Add Orphic Node link.
- [x] Task 5: Verify tests pass and review placeholders.
  - **Debug:** Test failed with "Element type is invalid... got: undefined". Hypothesis: Jest fails to mock or import `lucide-react` icons correctly in this environment, causing the component to render undefined. Will update Jest config to mock lucide-react or fix imports. (Fixed with React.createElement)
  - **Debug:** Build failed because `Export Github doesn't exist in target module lucide-react`. The correct export name in lucide-react is `GithubIcon` or similar, I will verify the exact name (usually it's `GithubIcon` or `GitHub`? Let me try `Github` -> `GitHub` or look it up). Ah wait, in `lucide-react`, the Github icon is usually called `GithubIcon` or just `Github` depending on version, let me use `GithubIcon` if `Github` failed. Actually wait, it suggested "Gift". The exact name is probably `GithubIcon` or something. Let me run a script to check exports of lucide-react.
