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
repository: https://github.com/abdelrahman-fawaz18/iot-smart-wearable-health-monitor
findingLabel: What the team built
finding: The wrist-worn prototype combined motion and vital-sign sensing with remote monitoring. The team published three papers on the system, fall detection, and sleep tracking.
contribution: I contributed to the collaborative sensing and analysis work, connecting embedded acquisition to the preparation of sensor data for classification.
leadFigure:
  file: wearable-prototype.webp
  alt: The green wearable prototype enclosure and black strap on a wrist, with the Raspberry Pi ports visible along one side.
  caption: The team's wrist-mounted research prototype.
  source: https://github.com/abdelrahman-fawaz18/wearable-fall-detection/blob/29dbf97b7e3f6952a3c3550a5f293b04ead65794/docs/assets/device-on-wrist.jpg
figures:
  - file: wearable-pcb.webp
    alt: Routing diagrams for the two layers of the wearable prototype's interconnect board.
    caption: The prototype's interconnect board routed the shared I2C bus between the Raspberry Pi and the sensors.
    source: https://github.com/abdelrahman-fawaz18/iot-smart-wearable-health-monitor/blob/c905e9ce8b380464792ce07c48cf8d7fd6ea029e/docs/hardware.md
  - file: wearable-monitoring.webp
    alt: Node-RED temperature flow with sensor input, visualization, and CSV logging branches.
    caption: The project's Node-RED temperature flow for processing, display, and logging.
    source: https://github.com/abdelrahman-fawaz18/iot-smart-wearable-health-monitor/blob/c905e9ce8b380464792ce07c48cf8d7fd6ea029e/docs/assets/node-red-temperature-flow.png
evidence:
  - label: Fall-detection code and experiment notes
    url: https://github.com/abdelrahman-fawaz18/wearable-fall-detection
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
