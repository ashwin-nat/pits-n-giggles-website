---
title: "Remote Race Engineering - Using Playit.gg"
description: "Stream F1 25 telemetry live to a remote race engineer using Pits n' Giggles and Playit.gg - no port forwarding required, works even with full 22-player lobbies."
pubDate: 2025-07-12
author: 'Ashwin Natarajan'
authorDescription: 'Sim racer'
category: 'Race Engineering'
image:
  url: 'https://cdn-8.motorsport.com/images/mgl/YEQ1qNqY/s1200/team-members-of-the-visa-cash-.webp'
  alt: 'F1 25 telemetry dashboard exposed via Playit.gg for a remote engineer'
  credits: 'Photo by Simon Galloway / Motorsport Images'
tags: ['features', 'f1-25', 'f1-telemetry', 'sim-racing', 'race-engineer', 'remote-strategy', 'playit-gg', 'telemetry-dashboard', 'lobby-limit-bypass']
---

# How to Use Pits n' Giggles for Remote Race Engineering

Want to let a friend act as your **race engineer** while you drive in **F1 25**? With *Pits n' Giggles*, you can stream your telemetry data in real time. And using **Playit.gg**, you can expose your local telemetry dashboard to anyone on the internet - without port forwarding or complex setup.

This guide walks you through how to set up Playit.gg to share your *Pits n' Giggles* telemetry dashboard over HTTP, making it accessible to a **remote race engineer** from anywhere.

---

## 🎯 Why This Matters: Bypass the 22-Player Limit in F1 Lobbies

Most **F1 sim racing games**, including **F1 25**, strictly limit lobbies to **22 players** - this includes drivers and spectators. This makes it impossible to invite a dedicated race engineer into a full-grid online session.

However, by using *Pits n' Giggles* with **Playit.gg**, your race engineer doesn't need to join the game lobby at all. Instead, they connect directly to your **telemetry dashboard**, allowing them to monitor your performance and strategy **without taking a slot in the race**.

- ✅ **No slot wasted in the lobby**
- ✅ **Works with full 22-car grids**
- ✅ **Engineer connects from anywhere using a browser**

---

## 🧰 What You’ll Need

- F1 23/24/25 running on PC or console with UDP telemetry enabled
- [Pits n' Giggles](/releases) installed and running on your PC
- A **Playit.gg** account
- Your friend’s browser - they don’t need to install anything

---

## 🖥 Step 1: Start Pits n' Giggles

1. Launch *Pits n' Giggles* on your PC.
2. Configure *Pits n' Giggles* for your F1 game. [Check here for detailed steps](/blog/setting-up-udp-telemetry-f1).
3. Once telemetry is flowing, your local dashboard will be available at:
   `http://localhost:4768` (or similar if you've changed the *Pits n' Giggles HTTP Server Port* setting).
   Click the Dashboard button for the *server* subsystem to open it locally and test

![Live telemetry](https://github.com/ashwin-nat/pits-n-giggles/blob/main/screenshots/main-ui.png?raw=true)

### Optional, but recommended

Increase the interval between updates from the server to the engineer's browser.
The setting can be found in
```
Display -> Pits n' Giggles client update interval (ms)
```

I'd recommend a value of around 500ms, since the network could be lossy.

---

## 🌐 Step 2: Install and Set Up Playit.gg

### 2.1 Install the Playit App on Your PC

1. Download the Playit app from [https://playit.gg/download](https://playit.gg/download).
2. Download the installer and install it on your PC
3. Run *Playit.gg* from the start menu or dock.
4. A terminal window will open with a login link.
   Follow the link and **log in or create a free account**.
5. Once that's done, the terminal window will appear

### 2.2 Link the Playit.gg on your PC with their server
1. The terminal window will show a link called claim.
2. Copy and paste this in your browser.
3. Wait for the Playit.gg app on your PC to authenticate with their servers
4. Once it's done, you should see the first 3 steps completed on the website like the below screenshot

![Playit.gg setup status](/blog_assets/remote-race-engineer/playit-setup-steps.png)

5. Don't click on step 4 yet. Our use case requires a verified account.
6. Add and verify your email address (at the Playit.gg dashboard)[https://playit.gg/account/settings/account]

---

### 2.2 Create the Tunnel in the Web Dashboard

1. Click **Create Tunnel** after the previous step.
2. Click **"Add Tunnel"**.
3. Choose the following options:
   - **Region**: Global Anycast (free)
   - **Type**: TCP (protocol)
   - **Port Count** - 1
   - **Local Port**: `4768` (or the custom HTTP server, if specified)
4. Click **"Add Tunnel"**.

![Playit.gg tunnel setup](/blog_assets/remote-race-engineer/playit-setup-tunnel.png)

### Optional:

1. Name your tunnel so that it's easier to manage in the future. Scroll down to the table with the tunnel's attributes
2. Click the rename button next to the Tunnel Name and give it a custom name (Pits n' Giggles)

![Playit.gg tunnel renaming](/blog_assets/remote-race-engineer/playit-tunnel-rename.png)

### 2.3 Copy Your Public Link

Once the tunnel is created, Playit will display a **public URL**, such as:

```
some-random-long-name.at.ply.gg:12345
```
NOTE: This port will NOT be the same as what is configured in Pits n' Giggles and that's fine

It will be to the right of the tunnel name (my details are redacted in the screenshot)
This is the URL that will let others connect to Pits n' Giggles remotely

![Playit.gg tunnel status](/blog_assets/remote-race-engineer/playit-tunnel-status.png)

---

## 👨‍💻 Step 3: Share the Link with Your Remote Engineer

Send the generated link to your friend. They can now:
- Open it in any modern web browser
- View your telemetry in real time
- Guide your strategy while you focus on the driving

No extra setup is needed on their end. Just click and go.

---

## 🔁 Recap

| Component         | Setup Location  | Purpose                         |
|------------------|------------------|----------------------------------|
| Pits n' Giggles  | Your PC          | Hosts telemetry dashboard        |
| Playit App       | Your PC          | Creates tunnel to share dashboard |
| Public URL       | Given by Playit  | Friend uses it to access your data |

---

## 🔗 Related Resources

- [Download Pits n' Giggles](/releases)
- [Playit.gg Download Page](https://playit.gg/download)
- [Tips n' Tricks](/blog)
- [Remote race engineering using Hamachi/VPN](/blog/remote-race-engineering-hamachi)

---

## 🏁 Final Thoughts

Whether you're preparing for a league race or just doing laps with friends, having a **remote race engineer** makes the experience more immersive and strategic. With *Pits n' Giggles* and **Playit.gg**, you can set it all up in minutes - no tech expertise required.

Most importantly, this method works even when your lobby is full. Your race engineer can monitor and advise you from anywhere, without needing to connect to the game session directly.

---
