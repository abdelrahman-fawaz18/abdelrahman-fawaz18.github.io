---
layout: ../../layouts/CaseStudyLayout.astro
slug: wearable-health-monitoring
title: Wearable sensing & health monitoring
summary: A team project connecting embedded sensor acquisition, remote monitoring, and fall- and sleep-related classification.
category: Embedded systems · Team research
year: '2021–2023'
role: Contributor to a collaborative wearable-sensing project
environment: Research prototype and classification workflows
tools: Raspberry Pi Zero W, I2C sensors, Python, Node-RED, SVM, and Random Forest
evidence:
  - label: IoT-based wearable system — 2021 publication
    url: https://doi.org/10.1109/JAC-ECC54461.2021.9691431
  - label: Fall detection — 2023 publication
    url: https://doi.org/10.11159/icbb23.111
  - label: Sleep tracking — 2023 publication
    url: https://pdfs.semanticscholar.org/7de7/55246563b6590fd476cb21b46a5c75af6a00.pdf
---

## From sensor readings to a wearable system

This collaborative research project brought together embedded sensing, remote monitoring, and classification of movement and sleep-related signals. I contributed to a system that connected physical sensor acquisition to data preparation and analysis.

## The system

A Raspberry Pi Zero W collected readings from inertial, PPG/SpO₂, and infrared temperature sensors over I2C. The processing workflow prepared sensor samples in windows for analysis, while Node-RED supported remote monitoring.

SVM and Random Forest models were used across the fall- and sleep-related classification work. The project connected three layers:

- **Acquisition:** obtaining motion and vital-sign readings from embedded sensors.
- **Preparation:** preprocessing samples and assembling labeled windows.
- **Analysis:** applying classification methods and interpreting the resulting outputs.

## My contribution and the outcome

I contributed as part of the wearable-sensing research team. The work led to three conference publications covering the monitoring system, fall detection, and sleep tracking.

The project is a practical example of my interest in electronics and software together: a useful analysis depends on the sensor interface, acquisition workflow, and preparation of the data reaching the model. The linked papers describe the team’s methods and experimental results.

## Research context

This was an experimental research prototype. Its published evaluations concern the stated sensing and classification tasks; clinical validation is outside that scope. Earlier papers list my name as Abdelrahman Fawaz.
