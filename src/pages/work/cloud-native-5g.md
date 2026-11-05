---
layout: ../../layouts/CaseStudyLayout.astro
slug: cloud-native-5g
title: Cloud-native 5G platform
summary: A reproducible local platform for multi-UE service, isolated data networks, observability, and recovery checks that follow the actual 5G service.
category: Cloud platforms
year: '2026'
role: Platform integration, automation, probes, and observability
environment: Single-node kind cluster · five synthetic UEs · two DNNs
tools: Kubernetes, Helm, Open5GS, UERANSIM, Prometheus, Grafana, and Python
repository: https://github.com/abdelrahman-fawaz18/cloud-native-5g-core-platform
report: https://github.com/abdelrahman-fawaz18/cloud-native-5g-core-platform/blob/main/reports/resilience-results.md
reportLabel: Read the recovery results
finding: Restoring 5G service required operator assistance in all nine accepted recovery trials in my local Kubernetes lab.
contribution: I built the Helm deployment, service probes, and observability setup. I used them to track Pod readiness and the return of user traffic as separate events.
leadFigure:
  file: cloud-recovery.webp
  alt: Saved Grafana dashboard showing nine accepted component trials, zero automatic recoveries, and nine assisted recoveries.
  caption: Saved lab capture. Kubernetes Pod readiness and restored 5G service were measured separately.
  dark: true
  source: https://github.com/abdelrahman-fawaz18/cloud-native-5g-core-platform/blob/fd7b03444dd2285ee72f38aac4716a7fd3741889/reports/resilience-results.md
figures:
  - file: cloud-sessions.webp
    alt: Saved Grafana view correlating five synthetic UE sessions, their DNNs, and successful source-bound user-plane probes.
    caption: Saved, sanitized lab capture showing three UEs on the internet DNN and two on enterprise, alongside source-bound connectivity checks.
    dark: true
    source: https://github.com/abdelrahman-fawaz18/cloud-native-5g-core-platform/blob/fd7b03444dd2285ee72f38aac4716a7fd3741889/docs/dashboard-gallery.md
evidence:
  - label: Complete system architecture
    url: https://github.com/abdelrahman-fawaz18/cloud-native-5g-core-platform/blob/main/docs/architecture/complete-system-architecture.md
  - label: Platform validation
    url: https://github.com/abdelrahman-fawaz18/cloud-native-5g-core-platform/blob/main/reports/platform-validation.md
  - label: Dashboard gallery and evidence boundaries
    url: https://github.com/abdelrahman-fawaz18/cloud-native-5g-core-platform/blob/main/docs/dashboard-gallery.md
  - label: Performance experiment and limits
    url: https://github.com/abdelrahman-fawaz18/cloud-native-5g-core-platform/blob/main/reports/performance-results.md
  - label: Recovery experiment and assisted restoration
    url: https://github.com/abdelrahman-fawaz18/cloud-native-5g-core-platform/blob/main/reports/resilience-results.md
---

## A platform that can be rebuilt and checked

A useful 5G platform needs consistent subscriber state, working UE traffic, and a clear way to diagnose service failures. I built a local Kubernetes environment that brings those pieces together through repeatable deployment, protocol checks, and service monitoring.

## What I built

I wrote the project-specific Helm charts, deployment profiles, lifecycle commands, validation tooling, telecom probes, and observability provisioning. The platform integrates Open5GS, UERANSIM, MongoDB, Kubernetes, Prometheus, Grafana, Loki, and Alloy.

The default deployment connects five synthetic UEs through one gNB and one UPF in a single-node kind cluster. Three UEs use the `internet` DNN and two use `enterprise`, each with a unique session address and controlled endpoint.

## Checking the service end to end

Validation follows N2 signaling, N4 PFCP, N3 GTP-U, and N6 traffic. Source-bound probes check that traffic follows the intended UE tunnel. Negative-access tests examine cross-DNN isolation, while persistence checks test subscriber state across controlled lifecycle changes.

Prometheus and Grafana expose service and infrastructure behavior. Alloy and Loki provide centralized logs. Together, those views help relate a protocol problem to the workloads and network paths involved.

## The recovery finding

The recovery campaign separated fault detection, Kubernetes Pod readiness, and restored 5G service. Across three repetitions for each of the AMF, SMF, and UPF, every accepted trial required operator-assisted restoration.

That gap was a useful result: replacing a container did not automatically restore all of the state needed for mobile service. The report preserves the assisted recovery path and the measurements for each stage.

## The outcome

The project provides a reproducible local deployment with multi-UE connectivity, DNN isolation checks, persistent subscriber provisioning, centralized observability, and documented performance and recovery experiments. Saved reports and dashboard captures make the conditions behind each result available for inspection.

## Platform scope

This is a single-node integration environment with single replicas and synthetic subscribers. Recovery results describe the assisted local workflow. The linked reports distinguish local runtime validation from hosted CI and document the limits of the performance experiments.
