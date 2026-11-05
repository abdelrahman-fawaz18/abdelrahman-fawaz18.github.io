---
layout: ../../layouts/CaseStudyLayout.astro
slug: 5g-sa-validation
title: 5G core, from setup to fault diagnosis
summary: Following a 5G Standalone service from registration to user traffic, then using controlled faults to find the exact boundary that breaks.
category: Protocol validation
year: '2026'
role: Lab integration, validation tooling, and protocol analysis
environment: Single-host Open5GS / UERANSIM lab
tools: Linux, Python, Bash, Wireshark, and tshark
repository: https://github.com/abdelrahman-fawaz18/5g-sa-core-protocol-lab
report: https://github.com/abdelrahman-fawaz18/5g-sa-core-protocol-lab/blob/main/docs/fault-injection-analysis.md
reportLabel: Read the fault analysis
figures:
  - file: core-architecture.svg
    alt: Single-host lab architecture showing the UE, gNB, 5G core functions, and Linux user-plane path.
    caption: Single-host lab architecture showing the protocol interfaces and Linux user-plane path used in the validation workflow.
    source: https://github.com/abdelrahman-fawaz18/5g-sa-core-protocol-lab/blob/82934c2cc231540fa425e48177d4bed33210bfc1/docs/assets/system-architecture.svg
  - file: core-fault-localization.svg
    alt: Five controlled faults arranged by the last successful and first failed stage of the service chain.
    caption: A summary of the fault campaign. The packet maps and recovery captures linked below provide the underlying observations.
    source: https://github.com/abdelrahman-fawaz18/5g-sa-core-protocol-lab/blob/82934c2cc231540fa425e48177d4bed33210bfc1/docs/assets/fault-localization.svg
  - file: core-packet-trace.webp
    alt: Saved Wireshark capture showing PFCP session setup and tunneled GTP-U echo traffic in the 5G lab.
    caption: Saved packet capture of the working baseline, showing control-plane session signaling and user-plane traffic.
    dark: true
    source: https://github.com/abdelrahman-fawaz18/5g-sa-core-protocol-lab/blob/82934c2cc231540fa425e48177d4bed33210bfc1/docs/assets/evidence/wireshark-pfcp-gtpu.png
evidence:
  - label: Protocol analysis and packet frame maps
    url: https://github.com/abdelrahman-fawaz18/5g-sa-core-protocol-lab/blob/main/docs/protocol-analysis.md
  - label: Controlled faults and recovery evidence
    url: https://github.com/abdelrahman-fawaz18/5g-sa-core-protocol-lab/blob/main/docs/fault-injection-analysis.md
  - label: Python validator design
    url: https://github.com/abdelrahman-fawaz18/5g-sa-core-protocol-lab/blob/main/docs/validator-design.md
  - label: Dated baseline validation record
    url: https://github.com/abdelrahman-fawaz18/5g-sa-core-protocol-lab/blob/main/evidence/baseline-validation.md
---

## Finding where a 5G service breaks

When a UE cannot reach an endpoint, the failure could sit in admission, authentication, session setup, routing, or the return path. I built a local 5G Standalone lab to follow that service chain and identify the boundary responsible for a failure.

## My implementation

I integrated Open5GS and UERANSIM, configured subscribers and network settings, and established the Linux routing, namespaces, tunnels, and NAT needed for UE-originated traffic. I wrote the Python validator, Bash workflows, packet analysis, and fault documentation around those upstream implementations.

The baseline checks SCTP association and NG Setup, 5G-AKA authentication, NAS security, UE registration, IPv4 PDU-session establishment, and bidirectional user-plane traffic. Packet captures, component logs, and host networking state provide complementary views of the same exchange.

## A fault worth following

In the missing-N6-NAT experiment, the UE remained registered and its PDU session stayed established. Uplink GTP-U packets reached the UPF, but traffic left the host with the private UE source address and no external reply returned.

Restoring the scoped masquerade rule brought replies back without restarting the 5G components or rebuilding the session. That isolated the failure to the external return path.

The remaining cases cover PLMN, TAC, authentication-key, and DNN mismatches. Each records the last successful stage, the first failed or absent procedure, and recovery after restoring the baseline.

## Engineering choices

- **Keep the stages separate.** Registration, session establishment, and working user traffic each have their own validation outcome.
- **Change one condition at a time.** Dedicated fault configurations preserve a known working baseline.
- **Explain the diagnosis.** Packet frame maps, implementation logs, and Linux state connect the observed symptom to its cause.

## The outcome

The repository contains a reproducible service chain, a read-only validation workflow, and five fault investigations with recovery evidence. It gives a reviewer a concrete path from configuration to protocol exchange to diagnosis.

## Lab scope

The baseline uses one synthetic UE, one gNB, one DNN, and one IPv4 session on a single host. UERANSIM abstracts the over-the-air NR PHY. The observations establish protocol and host-network behavior within those conditions.
