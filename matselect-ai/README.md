# MatSelect AI — Explainable Engineering Material Selection

**AI-assisted material shortlisting across performance, manufacturing, cost, and sustainability.**

MatSelect AI is a web-app prototype that turns a design brief and engineering constraints into ranked candidate materials, then exposes the trade-offs behind those recommendations. Rather than present one material as universally “best,” it is designed to support an engineer's decision with comparable criteria, explanations, and limitations.

> **Portfolio demonstration, not a verified materials database or production design tool.** The uploaded video shows the application UI and an example selection. Original source code, the underlying property datasets, scoring implementation, and verification tests are not included in this portfolio repository.

## The problem

Material choice is a multi-constraint engineering decision. A candidate that excels in strength can still be unsuitable because of corrosion, forming process, temperature, price, or supply. MatSelect explores how a guided interface could make those compromises easier to review.

## Demonstrated workflow

1. **Define the part.** Provide a natural-language application brief, such as a lightweight structural component with environmental exposure.
2. **Specify requirements.** Enter minimum tensile/yield strength, hardness, fatigue considerations, temperature, corrosion and manufacturing constraints.
3. **Set practical limits.** Include cost, market availability, sustainability, and recyclability preferences.
4. **Analyze candidates.** Compare a ranked shortlist with scores, a multi-axis radar plot, and criterion-level trade-offs.
5. **Review engineering rationale.** Inspect reasons a material was selected, use-case fit, competing alternatives, and stated limitations.

## What the recorded demo actually shows

| Stage | Visible capability |
| --- | --- |
| Input | Engineering requirements, operating conditions, cost, supply, environmental preferences |
| Ranking | Top candidates and a radar-chart comparison across multiple criteria |
| Review | Material-by-material scorecards, explanatory rationale, strengths and limitations |
| Example options | DP600 dual-phase steel, AA6016-T4 aluminum, and stainless steel 301 appear in the sample output |

The sample rankings are **illustrative outputs from the application**, not independently validated material recommendations. Properties must be checked against the actual alloy specification, temper, product form, manufacturer data, and relevant design standard.

## Engineering perspective

The useful feature is not a single generated ranking; it is making **competing requirements visible and reviewable**. In a professional workflow, selection logic needs traceable property sources, hard constraints separated from weighted preferences, and an explicit escalation to tests and engineering sign-off.

## Current status

- **Demonstrated:** Interactive criteria input, material ranking, comparative visuals, explanation of alternatives.
- **Not established:** Numerical accuracy of material properties, completeness of candidates, transparency of scoring weights, manufacturing feasibility, production suitability, or measured research-time savings.
- **Not published here:** Executable app source, dataset, tests, or the original MP4 demonstration.

## Suggested next steps

Publish a documented material dataset and provenance; separate rejection criteria from scoring; expose configurable weights and sensitivity analysis; test against hand-selected engineering cases; publish reproducible runs and confidence/uncertainty information.

**Project area:** Mechanical Engineering · Materials Selection · Decision Support · AI-Assisted Workflows
