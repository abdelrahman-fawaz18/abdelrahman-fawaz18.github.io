---
layout: ../../layouts/CaseStudyLayout.astro
slug: production-line-simulation
title: Electronics production-line simulation
summary: A team simulation project exploring how buffers, pallets, and batch sizes affect an electronics production line.
category: Systems simulation · Team course project
year: '2024'
role: Co-development and verification of the production model
environment: Eight-station electronics production-line model
tools: AnyLogic, OptQuest, Excel, and discrete-event simulation
---

## Understanding an electronics production line

In a two-person course project, we co-developed and verified an AnyLogic model of an eight-station electronics production line. Three part streams converged in the process, linking overall throughput to the interaction between stations, buffers, and available pallets.

## What we modeled

The discrete-event model represented setup and processing times, variable manual-station times, stochastic jams, and workstation utilization. Buffers and pallets connected the behavior of individual stations to the flow through the line.

We used OptQuest and Excel to compare pallet configurations and batch sizes under consistent assumptions. This made it possible to examine how a local operating choice affected the rest of the process.

## What the study produced

The study identified a buffer-and-release strategy that improved simulated throughput and reduced modeled production-loss cost. Those outcomes were projections from the model.

The project combined model construction, verification, and comparison of operating alternatives. Its findings concern the simulated line; the original course model and report are not currently linked.
