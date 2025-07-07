---
title: "Setting up Pits n' Giggles"
description: "Learn how to setup Pits n' Giggles with any F1 game."
pubDate: 2025-06-01
author: 'Ashwin Natarajan'
authorDescription: 'Sim racer'
image:
  url: '/blog_assets/f1-telemetry-setup/thumbnail.png'
  alt: 'Racing sim setup with telemetry on screen'
tags: ['setup', 'telemetry', 'udp', 'pits-n-giggles', 'f1-25']
---

# Setting Up *Pits n' Giggles*

Getting started with *Pits n' Giggles* is super simple. Just follow the steps below and you'll be up and running in no time.

This guide covers setup for all modern F1 games including **F1 25**, with built-in support for **F1 telemetry** and **F1 25 UDP telemetry**.

## 📥 1. Download the App

Go to [www.pitsngiggles.com](/releases) and download the latest version of the app.
*Pits n' Giggles* is a lightweight **F1 telemetry dashboard** that requires no installation-just run and drive.

## 📁 2. Create a Folder for the App

Create a new folder anywhere on your system (e.g., Desktop, Documents, etc.), and copy the downloaded executable into that folder.

Example:

```
C:\Users\YourName\Documents\pits_n_giggles\
```

## 🚀 3. Run the App

Double-click the executable to launch it.
By default, *Pits n' Giggles* listens on **UDP port 20777**-this is the default port used by most **F1 telemetry tools**, including the official Codemasters F1 games.

If you don’t have anything else using that port, there’s no need to change it.

If you **do** need to change it, click the **Settings** button on the *Pits n' Giggles* homepage and enter your desired port number:

![Pits n' Giggles settings](/blog_assets/f1-telemetry-setup/png-settings.png)

You should now see the app open in your browser or a message confirming it’s running. It’s now ready to receive live **F1 25 UDP telemetry data**.

## 🎮 4. Launch Your F1 Game

Start your F1 game-*Pits n' Giggles* supports **F1 2021** through **F1 25** (and future releases, as long as they follow the Codemasters UDP spec).

### Enable UDP Telemetry in Game:

1. Go to `Game Options > Settings > Telemetry Settings`
2. Set the following:

   * **UDP Telemetry**: `On`
   * **UDP Port**: `20777` (or the port you set in the app)
   * **UDP Send Rate**: `60Hz`
   * **UDP Format**: Choose your game version: `2023`, `2024` or `2025`
   * **Your Telemetry**: `Public`
   * **Show Names**: `On` (this enables driver names in the dashboard)

These settings ensure your game streams real-time **F1 telemetry data** to *Pits n' Giggles* over your local network.

---

## 📸 F1 Game Settings Page

![Game settings](/blog_assets/f1-telemetry-setup/f1-game-settings.png)


> NOTE: If you're on console (PS/XBox),
```
1. set UDP Broadcast Mode to On
2. Run Pits n' Giggles on a windows computer (PC/laptop)
3. Optional: If you have changed the port number in the F1 game settings
    * Set the same UDP port number in Settings -> Network -> F1 UDP Telemetry Port
```
![Settings page screenshot](/blog_assets/f1-telemetry-setup/png-settings.png)
---

## ✅ That’s it!

With telemetry enabled and the app running, *Pits n' Giggles* will start receiving data as soon as you're on track.

Click the **"Dashboard"** button in the UI to open the live dashboard if it doesn’t open automatically.

You're now ready to analyze your laps, compare race data, and enjoy all the features of this easy-to-use **F1 25 telemetry tool**.

It’s hammer time. 🏁

## For more advanced tips, check out
1. [The features page](/features)
2. [Blog articles](/blog)
