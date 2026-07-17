# Specifications & Requirements

## Application Context (WTFKit)
WTFKit is a CLI tool that helps developers skip the process of Googling terminal errors. It answers three questions when a command fails:
- `wtf`: What broke?
- `why`: Why did it happen?
- `fix`: How do I fix it safely?

## Key Requirements
- **Audience:** Primarily Windows developers (PowerShell, CMD, Windows Terminal), though expanding.
- **Design:** Well-built, tech-focused aesthetics.
- **Required Pages:**
    - Home / Landing Page (Explaining the tool, features, installation instructions, usage examples).
    - Privacy Policy
    - Terms of Service
- **Installation details to include:**
    - Full program: `npm install -g wtf`
    - Just wtfkit command: `npm install -g wtfkit`
- **Current Support:** npm, Node.js, PowerShell, Windows Terminal, CMD, process detection, file lock detection, Go, pnpm, yarn, Bun, Git diagnostics, Docker, Python, Rust, Flutter.
- **Code Quality:** Must be production-ready code with no placeholders.
