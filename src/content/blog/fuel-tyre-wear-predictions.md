---
title: 'Real-Time Tyre Wear and Fuel Usage Prediction'
description: "How Pits n' Giggles predicts tyre wear and fuel in real-time"
pubDate: 2025-07-03
author: 'Ashwin Natarajan'
authorDescription: 'Developer'
category: 'Feature Guide'
image:
  url: '/blog_assets/fuel-tyre-prediction/thumbnail.png'
  alt: 'Racing sim setup with telemetry on screen'
tags: ['features', 'telemetry', 'udp', 'f1-25', 'f1-telemetry', 'tyre-strategy', 'pit-stop', 'sim-racing']
---


# Smarter Strategy in F1 25: Predicting Tyre Wear and Fuel Use in Real Time

Managing tyres and fuel is the backbone of any race strategy. Whether in real-world motorsport or in **F1 25**. But while the game gives you some tools, they’re often too basic or rigid for competitive sim racing. That’s where **Pits n' Giggles** comes in.

Using live **F1 25 telemetry**, Pits n' Giggles builds evolving models for **every car on track**, not just the player. Whether you're watching your own tyre wear or monitoring your rival’s fuel usage, the app gives you the insight and control to make tactical decisions on the fly, **just like a race engineer would**.

---
## 📥 Download Pits n' Giggles
Pits n' Giggles is a free and open source F1 sim racing app and can be downloaded from [www.pitsngiggles.com](/releases)
Once downloaded, [configure the app](/blog/setting-up-udp-telemetry-f1) to work with the F1 game (supported games are F1 23 onwards)

## 📉 Tyre Wear Predictions That Evolve With Every Lap

Tyre management is critical in **F1 25**. Push too hard and you risk crossing the 80% wear threshold, putting yourself in puncture territory. Pits n' Giggles helps you plan for the entire stint with intelligent, real-time tyre life projections.

By learning from your actual driving over the course of the race, the app gives you:
- Accurate predictions of tyre wear at key points in the stint
- Visual insight into how your current pace will impact tyre life
- Confidence in choosing whether to push, manage, or pit

![Tyre wear trend](/blog_assets/fuel-tyre-prediction/tyre-stint-graph.png)

### Strategy in Action

If your tyre wear rate is better than your rival's, you can choose to hang back and conserve. Then, later in the stint, strike with a clear grip advantage. Or, if your projection shows you'll finish the race with 76% wear, you’ll know you can likely take the tyres to the end, without the risk of a blowout.

---

## ⛽ Fuel Strategy Based on Real Driving, Not Guesswork

F1 25 includes an “excess laps” fuel estimate in-game, but that value is based on an **arbitrary, fixed fuel burn rate** - one that assumes all drivers use fuel the same way. In practice, this can be **wildly inaccurate**, especially with changing conditions, different ERS usage, or varying driving styles.

**Pits n' Giggles takes a smarter approach**: it doesn’t assume anything.

Instead, it uses real telemetry to:
- Track your actual fuel level at the end of each lap
- Fit a custom linear model with your own slope `m` (burn per lap) and intercept `c` (initial fuel load)
- Use that to **accurately project** how much fuel you’ll have left at any lap, including the very last one

You also get lap-by-lap fuel targets, helping you:
- Burn through excess fuel efficiently if you’re too heavy
- Avoid under-fuelling disasters by staying ahead of depletion

![Fuel burn trend](/blog_assets/fuel-tyre-prediction/fuel-graph.png)

### Tactical Advantage

If your rival is projected to run low before the end, you can:
- Apply pressure and force them into fuel-saving mode
- Plan your attack while they’re compromised

Or, if you’re too heavy, you can turn up the pace early, using that extra fuel to your advantage.

---

## 📚 Why Linear Regression?

Under the hood, Pits n' Giggles uses a method called [linear regression](https://en.wikipedia.org/wiki/Linear_regression), a statistical model that learns how tyre wear and fuel usage trend over time, based on your actual lap data.

It works exceptionally well in race settings because:
- It’s fast and ideal for real-time updates
- It adapts quickly to changing conditions
- It becomes **more accurate** as more laps are completed

This means your predictions aren't static. They get sharper and more reliable as the race unfolds.

---

## 🧠 You vs. Your Rivals: Real-Time Tactical Decisions

Pits n' Giggles models **every driver on track**, not just you. That means you’re not racing in the dark anymore. You can make direct, informed comparisons between your strategy and your rivals’.

Examples:
- You're projected to finish with more tyre life? Push them into early degradation.
- Your opponent's fuel usage looks unsustainable? Turn up the heat and force a mistake.
- You’re evenly matched? Use your tyre or fuel delta to build a late-race advantage.

Whether you're attacking, defending, or setting up a long game, you’ve got the tools to outthink the competition.

---

## ✅ Key Features at a Glance

- Live tyre wear and fuel projections using real **F1 25 telemetry**
- Strategy models that evolve with each lap
- Tyre wear forecasting that keeps you below the puncture threshold
- Fuel usage tracking tailored to your driving style
- Lap-by-lap fuel targets to optimize performance
- Real-time comparison potential with rival drivers
- Empowers you to **be your own race engineer**

Head to the [features](/features) page for more info

---

![Driver view](https://github.com/ashwin-nat/pits-n-giggles/blob/main/screenshots/main-ui.png?raw=true)

Whether you’re racing online, in a league, or chasing personal bests, **Pits n' Giggles** gives you the insight to plan smarter, drive better, and win more often.

**Be your own race engineer. Lap after lap.**

## For more advanced tips, check out
1. [The features page](/features)
2. [Blog articles](/blog)

## Source code
1. Tyre wear extrapolator: https://github.com/ashwin-nat/pits-n-giggles/tree/main/lib/tyre_wear_extrapolator
2. Fuel rate recommender: https://github.com/ashwin-nat/pits-n-giggles/blob/main/lib/fuel_rate_recommender.py
