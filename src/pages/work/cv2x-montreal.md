---
layout: ../../layouts/CaseStudyLayout.astro
slug: cv2x-montreal
title: C-V2X across Montreal road layouts
summary: A descriptive simulation study of how road layout, vehicle count, and fading affect direct vehicle-to-vehicle message reception.
category: Communication systems · Simulation study
year: '2026'
role: Experiment design, simulation configuration, and Python analysis
environment: Two Montreal road layouts · fixed sidelink configuration
tools: OMNeT++, Veins, SUMO, OpenCV2X, OpenStreetMap, and Python
repository: https://github.com/abdelrahman-fawaz18/cv2x-mode4-montreal
report: https://github.com/abdelrahman-fawaz18/cv2x-mode4-montreal/blob/main/docs/methodology/README.md
reportLabel: Read the methodology
figures:
  - file: cv2x-road-layouts.webp
    alt: The downtown grid and lower-density corridor are shown as side-by-side SUMO road networks.
    caption: SUMO networks derived from OpenStreetMap for the two simulation scenarios. © OpenStreetMap contributors.
    source: https://github.com/abdelrahman-fawaz18/cv2x-mode4-montreal/blob/a95e4dc349301b72d2db882c6d11972f95c6c24e/README.md
evidence:
  - label: OpenStreetMap data attribution and license
    url: https://www.openstreetmap.org/copyright
  - label: Experiment configuration
    url: https://github.com/abdelrahman-fawaz18/cv2x-mode4-montreal/blob/main/simulation/omnet-project/omnetpp.ini
  - label: Python metric-analysis workflow
    url: https://github.com/abdelrahman-fawaz18/cv2x-mode4-montreal/tree/main/analysis
  - label: Results and study boundaries
    url: https://github.com/abdelrahman-fawaz18/cv2x-mode4-montreal#results
---

## The same communication model on different roads

How does road layout change direct vehicle-to-vehicle message reception? I compared a dense Montreal city-center grid with a lower-density corridor while holding the C-V2X Mode 4 configuration fixed.

## My workflow

I turned OpenStreetMap road data into SUMO mobility scenarios and coupled vehicle movement to OMNeT++ through Veins. OpenCV2X provided the sidelink behavior. The experiments compared six vehicle counts and two fading models across both environments.

A Python workflow processed the exports, calculated aggregate packet reception rate and channel busy ratio, and examined receiver-level variation. That last view helped show differences hidden by the aggregate reception rate.

## What the runs showed

Road layout produced a larger reception difference than the choice between the two fading models in the observed runs. Reception increased through the 25-vehicle case, then declined slightly at 30 vehicles. Channel occupancy and variation between receivers added context to the trend.

## Study context

Each tested combination used one run, so the findings describe those scenarios rather than a statistically established optimum. The repository includes configuration, analysis, figures, and two representative compressed exports; the complete input-export matrix is not included. OpenStreetMap attribution and license information are retained with the project.
