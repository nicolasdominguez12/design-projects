# HedgePilotX — Adaptive Options Hedging Research Terminal

**Investigating a practical quant question: can an adaptive hedge controller manage options risk more efficiently under realistic trading frictions?**

HedgePilotX is a simulated research dashboard for evaluating options hedge-control strategies over changing price paths and market conditions. The project connects a mechanical engineer's control-systems mindset—state, feedback, constraints, and robustness—to derivatives and risk management.

> **Research/simulation prototype, not investment advice or a live execution system.** The recorded demo shows simulated analysis. No results in this repository establish real-world outperformance, live profitability, or an independently reproduced backtest. The original source code and data-generation pipeline are not published here.

## Research question

A delta-neutral position today will not stay delta-neutral as the underlying price and volatility evolve. Rebalancing too often creates costs; rebalancing too rarely tolerates more risk. HedgePilotX explores the **cost–risk trade-off** across controllers rather than assuming the most frequently rebalanced hedge is best.

## Demonstrated capabilities

| Module | What appears in the demo |
| --- | --- |
| **Strategy Arena** | Compares candidate hedge controllers on an efficiency frontier and highlights selected budget/risk trade-offs |
| **Hedge Replay** | Replays simulated underlying paths, hedge trades, exposure, and accumulated costs |
| **P&L & X-Ray** | Breaks down simulated performance and risk-related outcomes |
| **Stress Lab** | Compares controllers across scenario shocks including volatility, liquidity, gaps, and market regimes |
| **Research & Validation** | Shows training, validation, and held-out-test separation, with a locked hold-out evaluation |
| **Research Log** | Stores run metadata and compares saved studies; the UI reports SHA-256 manifest verification |

The demonstration includes controller configuration for portfolio options, volatility assumptions, execution costs, risk budgets, scenario selection, and tournament runs.

## Core quantitative idea

For an option portfolio with delta $\Delta$ and gamma $\Gamma$, a small underlying-price move $dS$ changes delta approximately by

$
d\Delta \approx \Gamma\,dS
$

This local relationship motivates dynamic hedging, but it does **not** fully describe realized hedging P&L. Transaction costs, gamma exposure, volatility, discrete rehedging, time decay, jumps, model risk, and liquidity all matter. A useful controller must balance these competing effects.

## What makes the approach interesting

- **Feedback control instead of fixed cadence:** Adjust rebalancing behavior to simulated state and risk constraints.
- **Explicit frictions:** Compare risk reduction against trading costs and execution assumptions.
- **Out-of-sample discipline:** Keep controller selection separate from held-out evaluation to reduce selection bias.
- **Stress sensitivity:** Inspect how a decision changes across adverse and alternative regimes.
- **Experiment traceability:** Save study configurations and provide auditable comparisons.

## Important limitations

The video is **evidence of a working interface and simulated workflows**, not proof of statistically significant alpha, a deployable trading system, or verified predictive quality. The exact equations, scenario generators, datasets, optimization procedures, assumptions, and test infrastructure require source-level inspection before stronger claims can be made.

## Reproducibility priorities

Publish the code, environment and dependencies; document Black–Scholes/Greeks assumptions and hedging conventions; disclose simulation calibration and costs; provide baseline controllers and fixed random seeds; add confidence intervals and sensitivity tests; document how train/validation/hold-out leakage is prevented.

**Project area:** Derivatives · Gamma/Delta Hedging · Quantitative Risk · Control Systems · Simulation
