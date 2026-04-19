@AGENTS.md

## Frontend Standards

For all frontend component changes in this project:

- **Always invoke the `/frontend-design` and `/vercel-react-best-practices` skills** before writing or refactoring any UI component.
- Keep all interactive logic in **custom hooks** under `src/hooks/` — never inline complex `useState`/`useEffect` logic directly in JSX files. This allows hooks to be extracted to a `shared/logic/` package if a React Native mobile app is built in the future.
- Follow the **web-first / shared-logic** pattern:
  - Next.js handles all UI and routing
  - Hooks own state, side effects, and business logic
  - Types are defined in `src/types/` so they can be shared later
- Do **not** use React Native primitives (`View`, `Text`, `StyleSheet`) in this app — keep standard HTML/CSS/Tailwind.
