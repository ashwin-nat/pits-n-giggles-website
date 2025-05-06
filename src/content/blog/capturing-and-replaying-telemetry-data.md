---
title: 'Recording and Replaying Telemetry Data'
description: 'Learn how to interpret telemetry data and use it to improve your lap times in any sim racing game.'
pubDate: 2025-05-05
author: 'Ashwin Natarajan'
authorDescription: 'Testing 69420'
image:
  url: '/blog_assets/capturing-replaying-data/thumbnail.png'
  alt: 'Racing sim setup with telemetry on screen'
tags: ['pits-n-giggles', 'telemetry', 'tech', 'udp', 'binary']
---

# Smarter Telemetry Debugging for *Pits n' Giggles*

While developing ***Pits n' Giggles***, my F1 sim racing app, debugging became a serious bottleneck. Every cycle meant:

- Launching the sim
- Triggering a scenario
- Pausing to add logs or breakpoints
- Alt-tabbing back to the IDE
- Restarting the sim

This repeated **context switching** between game and code created high **mental overhead** slowing progress, introducing bugs, and wasting time.

To solve this, I built two developer tools:

- `telemetry_recorder` – Captures live telemetry from the sim via UDP
- `telemetry_replayer` – Replays captured telemetry offline over UDP or TCP

Now, I can **record once**, and **debug forever** without ever restarting a race.

## Custom Binary Format

### File Header (12 bytes)

![File header block diagram](/blog_assets/capturing-replaying-data/file_header.png)
*File Header Structure (12 bytes)*

### Packet Data Block

![Packet data block diagram](/blog_assets/capturing-replaying-data/packet_format.png)

*Packet Data Block Structure*

## Telemetry Recording Workflow

![Telemetry recording workflow](/blog_assets/capturing-replaying-data/recording_workflow.png)

*Telemetry Recording Process*

* Captures all UDP telemetry during a live sim session
* Timestamps and serializes each packet into a structured binary file
* Optional compression enabled via flags
* Can be versioned, archived, and reused

## Telemetry Replay Workflow

![Telemetry replay workflow](/blog_assets/capturing-replaying-data/replay_workflow.png)

*Telemetry Replay Process with UDP and TCP Modes*

* Replays saved sessions as if they were live
* Supports **playback speed multipliers**
* **TCP mode** enables **reliable high-throughput** for stress testing (via congestion control)
* Can be run repeatedly for test automation or regression

## From Mental Overhead to Focused Flow

Before these tools:

![Before workflow](/blog_assets/capturing-replaying-data/before_workflow.png)

* High friction
* Lost focus
* Slower iteration

Now:

![After workflow](/blog_assets/capturing-replaying-data/after_workflow.png)

* No sim restarts
* No context switching
* Full control over playback and timing

## Feature Highlights

* **Record once, debug forever**
* **Replay saved sessions at any speed**
* **TCP mode** for high-fidelity stress tests
* **Optional compression** for large captures
* **Versioned binary format** with endianness and flag support
* **Reduced mental overhead** = faster iteration and fewer bugs

## Wrap-up

By decoupling live simulation from debugging, `telemetry_recorder` and `telemetry_replayer` have dramatically improved how I develop *Pits n' Giggles*. It's one of those internal tools that paid for itself almost instantly and continues to save me hours every week.

If you're building anything real-time or stream-based, building a similar telemetry pipeline will radically simplify your workflow.
Trust me, you'll thank me later

Record once. Replay forever. Focus on what matters.

[Source Code](https://github.com/ashwin-nat/pits-n-giggles/tree/main/apps/dev_tools)
