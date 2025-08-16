---
title: "How to setup Pits n' Giggles stream overlays with OBS"
description: "How to setup Pits n' Giggles stream overlays with OBS"
pubDate: 2025-08-16
author: 'Ashwin Natarajan'
authorDescription: 'Sim racer'
category: 'App Setup'
image:
  url: 'https://github.com/ashwin-nat/pits-n-giggles/blob/main/screenshots/png-stream-overlay.png?raw=true'
  alt: "Pits n' Giggles - OBS setup"
tags: ['setup', 'telemetry', 'udp', 'pits-n-giggles', 'f1-25']
---

# How to setup Pits n' Giggles stream overlays with OBS

*Updated: August 16, 2025 — Stream overlay guide for Pits n' Giggles.*

Make your sim racing streams look pro with live telemetry and race-engineering data from **Pits n' Giggles**. This post shows step-by-step how to get the Pits n' Giggles stream overlay running in OBS, and highlights the supported live overlays you can show on stream: recent lap history, weather forecast, track air temperature, speed trap records, track-limits warnings, pit-lane speed limit indicators, and last-lap pace comparisons (including ERS usage). Ideal if you stream **F1 25 telemetry**, race engineering analysis, or general **sim racing** content.

---

## Why use Pits n' Giggles overlays?

Pits n' Giggles provides low-latency, browser-based overlays that are perfect for streamers who want to show meaningful race engineering data without heavy CPU usage. Whether you’re doing content about **race engineering**, live race commentary, or showcasing **F1 25 telemetry** stats, the overlay gives viewers actionable and visually clean data:

- Recent lap history (live overlay)
- Weather forecast live overlay
- Track air temperature and speed trap record
- Track-limits warnings count and pit-lane speed limit
- Last lap pace comparison vs car in front and back (lap & sector timings, ERS usage and limits)

These features make it easy to provide deeper insight into race strategy, driver performance, and on-the-fly engineering discussions during a stream.

---

## Supported overlay features (quick reference)

- **Recent Lap History Live Overlay** — shows a rolling list of recent laps for the player and nearby cars.
- **Weather Forecast Live Overlay** — live weather widget with short-term forecasting to help explain strategy calls.
- **Track Air Temp** — current air temperature for real-time context.
- **Speed Trap Record** — displays fastest recorded trap to date.
- **Track Limits Warnings** — running count of warnings for the session.
- **Pit Lane Speed Limit** — warns when pit-lane speed limit is active and the current limit value.
- **Last Lap Pace Comparison** — compare last lap and sector times vs the car in front and the car behind, including ERS usage and who’s at ERS limits.

---

## Step-by-step: Setup and OBS configuration

### 1) Download and setup the app

1. Go to the official site: [Pits n' Giggles](https://www.pitsngiggles.com). Download the latest release for your OS.
2. Install and run the app. The launcher provides quick access to all modules including the Stream Overlay.
3. If help is required, follow the [setup guide here](/blog/setting-up-udp-telemetry-f1)

### 2) Open the Stream Overlay from the app launcher

1. In the launcher, click the **Stream Overlay** button. The overlay opens in your default browser as a web page showing the overlay address (e.g. `http://localhost:4768/player-stream-overlay`).

![Launcher](https://github.com/ashwin-nat/pits-n-giggles/blob/main/screenshots/launcher.png?raw=true)

> Tip: If you plan to stream from a different machine, ensure the host machine is accessible from your streaming PC (same LAN) and use the host IP address instead of `localhost` (e.g. `http://192.168.1.12:4768/player-stream-overlay`).

### 3) Add the overlay as a Browser Source in OBS

1. Open OBS Studio.
2. In the *Sources* panel, click **+** and choose **Browser**.
3. Name the source (e.g. `PitsNGiggles Overlay`).
4. In *URL*, paste the overlay address from the app launcher (example: `http://localhost:4768/player-stream-overlay`).
5. Set the resolution to **1920x1080** and the FPS to **30** (or 60 if you prefer).
6. Click **OK** — overlay should appear in the preview.

![OBS Settings](/blog_assets/stream-overlay/browser-source-properties.png)

### 4) Position and layer the overlay

- Use **Transform → Fit to screen** to fill your canvas if you want a full-screen overlay, or resize/position to a corner for a HUD.
- If you use multiple overlay sources (e.g., telemetry + weather), add them as separate Browser sources and order them in the *Sources* stack.

![Sources List](/blog_assets/stream-overlay/sources-list.png)

---

## Best practices for streaming telemetry and race engineering content

- **Keep it readable:** Avoid cramming too many panels. Use the Recent Lap History + Last Lap Pace Comparison for the most value.
- **Explain the data:** Use brief callouts to walk viewers through ERS usage, why a pit-lane speed limit matters, or how weather will affect strategy.

---

## Troubleshooting

- **Overlay not loading in OBS:** Confirm the overlay URL from the launcher is reachable in a browser on the same machine. If using a remote streaming PC, replace `localhost` with the host machine IP and ensure firewall ports are open.
- **Data not updating:** Check that the game or sim is configured to output telemetry and that Pits n' Giggles is connected to the telemetry port.
- **High CPU usage:** Browser sources are lightweight, but multiple animated panels will increase load. Close unnecessary browser sources or decrease the overlay FPS.

---

## Example stream setups (quick ideas)

- **Race analysis overlay**: Recent Lap History (left), Last Lap Pace Comparison (bottom), Weather Forecast (top-right).
- **HUD for competitive sim racing**: Compact Recent Lap History (corner), Track Air Temp and Speed Trap (top bar), Track Limits warnings near lap timer.

---

## Final notes

Pits n' Giggles makes it straightforward to add professional telemetry overlays to any **sim racing** stream. Whether you’re discussing **race engineering** topics, showing **F1 25 telemetry** numbers, or creating esports content, the browser-based approach integrates cleanly into OBS and keeps CPU usage low.

If you need any help, join the [discord server](https://discord.gg/RK5Z76h6dX) and drop a message!

![Final Screenshot](https://github.com/ashwin-nat/pits-n-giggles/blob/main/screenshots/png-stream-overlay.png?raw=true)

---
