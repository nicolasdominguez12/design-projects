# Prompt-to-CAD — Natural Language to Interactive Mechanical Concepts

**Describe a mechanism. Generate a 3D concept. Inspect its behavior. Refine the geometry.**

Prompt-to-CAD is an engineering web-app prototype investigating how a natural-language interface can accelerate early-stage mechanical modeling while preserving explicit parameter controls and engineering review.

> **Documented prototype, not an open-source application release.** This folder contains a portfolio case study and illustrative web overview, not the original runnable application. The recorded demo shows interactive features, but underlying source code and CAD export fidelity have not been independently audited.

## Why this matters

A great deal of preliminary engineering time is spent turning rough requirements into a first-pass mechanical representation, adjusting standard geometry, and communicating changes. Prompt-to-CAD explores an interface where the user can start in plain English, then verify and edit the generated geometry instead of relying on an opaque one-shot result.

## Demo walkthrough (1 min 51 sec)

| Approx. timestamp | Demonstrated feature |
| --- | --- |
| 00:04 | Public-facing landing page and animated planetary-gear example |
| 00:18 | Prompt-driven generation interface and selectable mechanism categories |
| 00:34 | Interactive 3D planetary gearset: orbit, zoom, and animation |
| 00:50 | Inspection modes for wireframe, bodies, and dimensions |
| 01:06 | Parametric controls that update the modeled geometry |
| 01:24 | Inspectable JSON specification and suggested design refinements |
| 01:42 | Rack-and-pinion example translating rotation into linear motion |

The video also illustrates an iterative workflow with follow-up adjustments and visible engineering/manufacturability feedback. UI indicators and exported-file options are shown, but actual export integrity and physical correctness have not been independently tested.

## How it works from the user's perspective

1. **Specify intent:** Describe geometry, proportions, and functional requirements in ordinary language.
2. **Generate a concept:** View the resulting mechanism in the browser's 3D canvas.
3. **Inspect:** Rotate, zoom, switch display modes, and examine dimensions.
4. **Refine:** Adjust parameters or request further changes through the prompt interface.
5. **Review and hand off:** Inspect generated parameter/specification data and CAD/mesh output options.

![Conceptual workflow diagram](workflow.svg)

## Example mechanisms

- **Planetary gearset:** Sun, planet, and ring gear geometry with adjustable parameters and animated movement.
- **Rack and pinion:** Demonstrates a rotational-to-linear motion concept.
- **Additional component templates:** The interface lists other mechanism and hardware examples, including a threaded-fastener template.

## Design philosophy

**AI interprets design intent; explicit engineering constraints and human verification should control acceptance.** This is an architectural aspiration illustrated by the product's UI, not a confirmed audit of the underlying code.

## Evidence vs. outstanding work

| Shown in the demonstration | Still requires independent verification |
| --- | --- |
| Natural-language interaction and 3D mechanism visualization | Accuracy of inferred dimensions and real-world fit |
| Parameter sliders and iterative changes | Gear mesh, kinematic consistency, clearances, interference |
| Engineering notes and inspectable JSON representation | Trustworthiness of engineering calculations |
| CAD/mesh export UI | File validity, SolidWorks interoperability, repeatability |

## Portfolio resources

- [One-page HTML overview](index.html)
- [Project summary and résumé bullet](PORTFOLIO_ENTRY.md)
- [Conceptual workflow](workflow.svg)

**Status:** Recorded prototype and case-study documentation. The original MP4 demo, application source, deployment, and test suite are not hosted in this repository.

**Project area:** Mechanical Design · CAD Automation · AI Interfaces · Mechanisms
