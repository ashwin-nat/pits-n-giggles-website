---
title: "Smarter Pit Stops with Tyre Delta in Pits n' Giggles"
description: "Use real-time F1 25 telemetry to make better pit decisions with the Tyre Delta feature in Pits n' Giggles. Powered by F1 UDP telemetry."
pubDate: 2025-06-01
author: 'Ashwin Natarajan'
authorDescription: 'Sim racer'
category: 'Feature Guide'
image:
  url: '/blog_assets/tyre-delta-feature/thumbnail.png'
  alt: 'F1 telemetry dashboard showing tyre delta data'
tags: ['features', 'telemetry', 'udp', 'f1-25', 'f1-telemetry', 'tyre-strategy', 'pit-stop', 'sim-racing']
---

# Smart Pit Stops with Tyre Delta in **Pits n' Giggles**

When the weather’s unpredictable, one pit stop can make or break your race. That’s where the **Tyre Delta** feature in **Pits n' Giggles** comes in - your ultimate sidekick for smarter pit strategy in *F1 25*.

Whether you're racing in wet-dry conditions or battling changing grip levels, **Tyre Delta** uses real-time **F1 telemetry**, specifically **F1 25 UDP telemetry**, to help you decide exactly **when to box for the optimal tyre compound**.

> *Yes - you can finally take the guesswork out of tyre strategy!*

---

## Download Pits n' Giggles
Pits n' Giggles is a free and open source F1 sim racing app and can be downloaded from [www.pitsngiggles.com](/releases)
Once downloaded, [configure the app](/blog/setting-up-udp-telemetry-f1) to work with the F1 game (supported games are F1 23 onwards)

## 🛠️ Quick Setup: Enable the Tyre Delta Trigger

To start using Tyre Delta, you only need to set up a quick custom notification in the game and match it in **Pits n' Giggles**.

### In F1 25:

1. Open the in-game settings.
2. Find the **UDP Custom Notification** section.
3. Assign **any UDP action code (1–12)** to a button on your wheel or controller.
4. We recommend **action code 11**, as that's the default used by Pits n' Giggles.

![F1 25 settings](/blog_assets/tyre-delta-feature/game-settings.jpg)

### In *Pits n' Giggles*:

1. Open the settings page in the Pits n' Giggles launcher window.
2. Set the UDP tyre delta action code if you want to use any other custom value (leave it as is on 11 if that's ok)

![Pits n' Giggles settings](/blog_assets/f1-telemetry-setup/png-settings.png)

---

## 🚨 How to Use Tyre Delta Mid-Race

Once it's set up, using Tyre Delta is as easy as pressing a button - literally.

### While Racing:

1. **Hit the trigger button** (the one you bound to the UDP action code).
2. *Pits n' Giggles* reads your current tyre compound and lap data.
3. It calculates the time difference between your tyres and **fresh sets of the other two types**:

   * **Slicks**
   * **Intermediates**
   * **Wets**
4. This delta data is:

   * Sent to your **telemetry dashboard**, and
   * Read out loud using **text-to-speech**, so you don’t have to take your eyes off the track.

---

## 🧪 Real Example: Intermediates on a Drying Track

Let’s say you’re mid-race on **intermediates**, but the rain has stopped and the track is gradually drying. You’re not sure if it's the right time to switch to slicks - going too early could mean losing grip and time, but waiting too long could cost you valuable seconds.

### Here’s how Tyre Delta helps:

* You press your assigned button to trigger the feature.
* Pits n' Giggles analyzes your performance on intermediates versus the best recent lap from cars on slicks and wets.
* You hear:

> "*Slicks are faster than intermediates by 0.5 seconds. Wets are slower than intermediates by 4.9 seconds*"

That’s your cue. The slicks are clearly the better option now. **Box at the next opportunity** and gain the time advantage!

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 2rem 0;">
  <iframe
    src="https://www.youtube.com/embed/PaMSr6SM4OM?si=qvMM_x3_07nGbFsg"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>


---

## 🧠 Why Tyre Delta Matters

This feature is designed for sim racers who want every strategic edge. Whether you're racing online or pushing through a long career mode stint, knowing the **real-time performance difference** between compounds is game-changing.

No more guessing. No more overcut or undercut regret. Just actionable data from **F1 UDP telemetry** at your fingertips - and in your ears.

---

## 🏁 Final Thoughts

The Tyre Delta feature is one of many tools in **Pits n' Giggles** built to give sim racers **real F1 telemetry insights** in a fun, accessible way.

If you're serious about improving your race strategy in **F1 25**, or just want your own mini AI race engineer, this feature is a must-try.

Ready to box smart? 🧠🏎️

## For more advanced tips, check out
1. [The features page](/features)
2. [Blog articles](/blog)
