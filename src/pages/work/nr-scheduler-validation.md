---
layout: ../../layouts/CaseStudyLayout.astro
slug: nr-scheduler-validation
title: 5G NR scheduler validation
summary: Comparing throughput, fairness, and packet deadlines through controlled system-level downlink experiments.
category: Research simulation
year: '2026'
role: Simulator implementation, verification, and experiment analysis
environment: Model-specific 5G NR downlink study
tools: Python, NumPy, typed scenarios, paired experiments, and deterministic replay
repository: https://github.com/abdelrahman-fawaz18/5g-nr-ran-simulator
report: https://github.com/abdelrahman-fawaz18/5g-nr-ran-simulator/blob/main/docs/experiments/scheduler-performance-study-report.md
reportLabel: Read the scheduler study
figures:
  - file: nr-topology.svg
    alt: Diagram of the three-cell FR1 scheduler-study scenario with broadband and deadline-bearing low-latency UEs.
    caption: Illustration of the three-cell FR1 study scenario and its broadband and deadline-bearing low-latency users.
    source: https://github.com/abdelrahman-fawaz18/5g-nr-ran-simulator/blob/6d589b2eb83b4c96eff77488c37abbbfeffa5e86/docs/assets/scenario-topology.svg
  - file: nr-load-response.svg
    alt: Saved study plots comparing system goodput and low-latency deadline success as offered load increases for three scheduling policies.
    caption: Model-specific study results, reproduced from the repository. Interpret them with the finite-queue, allocation, and uncertainty assumptions in the linked report.
    source: https://github.com/abdelrahman-fawaz18/5g-nr-ran-simulator/blob/6d589b2eb83b4c96eff77488c37abbbfeffa5e86/docs/assets/load-response.svg
evidence:
  - label: Scheduler study protocol and comparison design
    url: https://github.com/abdelrahman-fawaz18/5g-nr-ran-simulator/blob/main/docs/experiments/scheduler-performance-study-protocol.md
  - label: Results, paired effects, and interpretation
    url: https://github.com/abdelrahman-fawaz18/5g-nr-ran-simulator/blob/main/docs/experiments/scheduler-performance-study-report.md
  - label: Model fidelity contract
    url: https://github.com/abdelrahman-fawaz18/5g-nr-ran-simulator/blob/main/docs/models/model-fidelity-contract.md
  - label: Verification and validation report
    url: https://github.com/abdelrahman-fawaz18/5g-nr-ran-simulator/blob/main/docs/verification/verification-and-validation-report.md
  - label: Saved study evidence
    url: https://github.com/abdelrahman-fawaz18/5g-nr-ran-simulator/tree/main/evidence/scheduler-study-v1
---

## Comparing what schedulers deliver

As load increases, a scheduler must balance aggregate goodput, packet deadlines, fairness, and service to weaker users. I developed a Python 5G NR downlink simulator to compare those outcomes under controlled, reproducible conditions.

## What I built

The simulator connects 3GPP-informed propagation and interference models to NR resource accounting, analytical link adaptation, packet queues, and interchangeable scheduling policies. It implements Round Robin, Max-C/I, and EWMA Proportional Fair.

Typed scenarios, explicit units, saved outputs, and deterministic replay keep each run inspectable. This implementation is distinct from the earlier team course artifact that preceded it.

## Designing a useful comparison

The flagship experiment compares three schedulers across four broadband-load levels in a three-cell, 3.5 GHz FR1 downlink. It includes broadband UEs and low-latency UEs with packet deadlines.

Paired common-random-number replications hold sampled conditions consistent across policies. The analysis reports paired effects and bootstrap confidence intervals alongside the individual outputs.

## Implementation decisions

The scheduler returns a validated allocation without directly mutating simulation state. Radio capacity and delivered traffic remain separate, with finite packet queues determining how much data an allocation actually serves.

Reports read saved results, preserving the relationship between plots and recorded inputs. Verification combines reference vectors, conservation properties, deterministic tests, replay, and an independent analytical cross-check.

## What the study showed

At the evaluated overload point, Round Robin achieved stronger deadline success and fifth-percentile UE goodput than Max-C/I. The preregistered Proportional Fair spectral-efficiency hypothesis was not supported at overload.

The result depends on finite queues, full-slot Max-C/I allocation, and the absence of within-slot redistribution. Those conditions help explain the observed tradeoff and are recorded alongside the numerical comparisons.

## Model scope

Verification checks the implementation against declared equations, tables, and invariants. Calibration to receiver or network measurements remains outside the study. Confidence intervals describe replication uncertainty within this model. The fidelity contract documents the abstractions used for the PHY, mobility, handover, and bounded FR2 behavior.
