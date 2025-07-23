# Development Workflow

## Branching Strategy
- Use `main` for production-ready code.
- Create feature branches from `main` for new features (`feature/xyz`).
- Use `bugfix/xyz` for bug fixes.
- Merge via pull requests with code review.

## CI/CD Pipelines
- Automated builds and tests via GitHub Actions.
- Build pipeline: checks code style, runs linter, builds project.
- Test pipeline: runs unit and integration tests.
- Deploy pipeline: deploys to production/staging on successful build/test.

## Code Review Process
- All changes require pull requests.
- At least one approval required before merging.
- Use issue and PR templates for consistency.
- Automated checks must pass before merge.
