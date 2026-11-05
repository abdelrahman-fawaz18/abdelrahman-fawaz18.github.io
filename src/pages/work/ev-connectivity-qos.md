---
layout: ../../layouts/CaseStudyLayout.astro
slug: ev-connectivity-qos
title: EV connectivity & QoS
summary: Connecting EV maintenance telemetry and evaluating how differentiated 5G treatment affects urgent messages during congestion.
category: Industry + research
year: 2024–2026
role: Wireless Systems Specialist — EV Connectivity, Solutions Serafin
environment: Testbed-to-lab telemetry integration and a separate simulation study
tools: MQTT-based telemetry, ns-3 / 5G-LENA, Python, and C++
report: https://doi.org/10.1108/JQME-06-2026-0131
reportLabel: Read the published article
finding: In the simulated scenarios, giving maintenance alerts and fault reports priority improved their delivery during congestion.
contribution: I connected the EV motor testbed to the ICPS Lab using MQTT and built a separate ns-3/5G-LENA experiment to compare network treatment for different message types.
leadFigure:
  file: ev-telemetry-overview.svg
  alt: A schematic separates MQTT telemetry integration between the motor testbed and lab from the simulation of three maintenance traffic classes.
  caption: Project schematic showing the implemented telemetry path and the separate QoS experiment.
  dark: true
  source: https://doi.org/10.1108/JQME-06-2026-0131
figures:
  - file: ev-traffic-classes.svg
    alt: Three maintenance traffic classes, routine diagnostics, maintenance alerts, and fault reports, mapped to differentiated QoS treatment in a simulation.
    caption: Explanatory schematic of the simulation’s routine diagnostics, maintenance alerts, and fault reporting classes and their differentiated QoS treatment.
    source: https://doi.org/10.1108/JQME-06-2026-0131
evidence:
  - label: Journal article and DOI record
    url: https://doi.org/10.1108/JQME-06-2026-0131
  - label: Publisher abstract and article information
    url: https://www.emerald.com/jqme/article-abstract/doi/10.1108/JQME-06-2026-0131/1394107/A-reliability-enhancing-framework-for-remote
---

## Keeping urgent maintenance messages useful

An EV motor testbed produces routine diagnostics alongside maintenance alerts and fault reports. Those messages have different urgency, yet they compete for communication resources. My work connected the testbed to the ICPS Lab and examined how differentiated 5G treatment could protect the messages that matter most during congestion.

## My contribution

At Solutions Serafin, I designed and implemented connectivity for MQTT-based telemetry exchange and analysis between the motor testbed and the lab. I collaborated with R&D, IT, maintenance engineers, and technicians on experiments and communication requirements. The telemetry supported analysis of signals including current, voltage, torque, RPM, vibration, and temperature.

I also developed a QoS-aware framework in ns-3/5G-LENA and compared best-effort and slice-aware configurations under controlled background load. This research formed part of my M.A.Sc. thesis and the journal article coauthored with Soumaya Yacout.

## Connecting application needs to network behavior

The simulation mapped three maintenance traffic classes—routine diagnostics, maintenance alerts, and fault reporting—to differentiated QoS treatment. Message urgency gave the prioritization a concrete purpose.

I evaluated delivery reliability alongside the latency of delivered packets. Reading those measures together matters: low latency among the packets that survive can conceal a high loss rate.

The testbed integration and the simulation answer different questions. The first establishes a telemetry path; the second tests communication policies under repeatable modeled conditions.

## What the work showed

Prioritizing maintenance alerts and fault reports improved their delivery reliability during congestion in the evaluated model. Routine diagnostics could receive less favorable service as resources became scarce, making the tradeoff between traffic classes visible.

The resulting framework connects maintenance requirements to network treatment and provides a controlled way to examine that tradeoff. The research was published in the *Journal of Quality in Maintenance Engineering* on September 1, 2026.

## Study conditions

The simulation evaluates uplink communication with one UE, one cell, fixed radio conditions, and abstracted core behavior. Its results describe communication performance within that setup. The published article documents the research; employer telemetry and internal testbed details remain private.
