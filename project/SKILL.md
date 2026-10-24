---
name: aluplan-design
description: Use this skill to generate well-branded interfaces and assets for Aluplan, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files (TOKEN-CONTRACT.md, COMPONENT-GUIDELINES.md, ACCESSIBILITY-NOTES.md, DECISIONS-AND-OPEN-QUESTIONS.md).
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key rules: edit tokens only in tokens/tokens.json and run `node scripts/build-tokens.mjs`; components use semantic/component tokens only; the white logo goes only on --surface-brand and is never recolored; never invent slogans, numbers, customers, features, release contents or trial durations; mark demo content; "unknown" scope is not "excluded".
