---
layout: ../../layouts/CaseStudyLayout.astro
slug: ble-indoor-localization
title: BLE indoor localization
summary: An ESP32 and Bluetooth Low Energy system for real-time indoor localization of medical equipment.
category: Embedded systems
year: '2021'
role: Localization-system development
environment: Indoor medical-equipment tracking prototype
tools: ESP32, Bluetooth Low Energy, and trilateration
---

## Finding equipment inside a building

I developed an ESP32 and Bluetooth Low Energy prototype for real-time indoor localization of medical equipment. The aim was to turn observations from wireless devices into a position estimate that could support equipment tracking.

## From embedded observations to a location

The system combined ESP32-based communication with trilateration. The embedded devices supplied the observations used by the positioning workflow, connecting a hardware interface to a geometric estimation problem.

My work brought those elements together as an indoor localization system: acquiring information from communicating devices and using it to estimate where the equipment was located.

## Project context

This was a prototype for indoor tracking. The site summarizes its implementation; accuracy, coverage, and battery-life evaluation records are not available here.
