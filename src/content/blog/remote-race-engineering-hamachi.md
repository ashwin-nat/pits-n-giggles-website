---
title: "Remote Race Engineering - Using Hamachi"
description: "Stream F1 25 telemetry live to a remote race engineer using Pits n' Giggles and Hamachi - no port forwarding required, works even with full 22-player lobbies."
pubDate: 2025-07-25
author: 'Ashwin Natarajan'
authorDescription: 'Sim racer'
category: 'Race Engineering'
image:
  url: '/blog_assets/remote-race-engineer/thumbnail.png'
  alt: 'F1 25 telemetry dashboard exposed via Playit.gg for a remote engineer'
  credits: 'Photo by Simon Galloway / Motorsport Images'
tags: ['features', 'f1-25', 'f1-telemetry', 'sim-racing', 'race-engineer', 'remote-strategy', 'playit-gg', 'telemetry-dashboard', 'lobby-limit-bypass']
---

# How to Use *Pits n' Giggles* for a Remote Race Engineer Setup (No Lobby Slot Needed!)

Want to bring a real-time **race engineer** into your sim racing experience-even if they're in a different city or country? With *Pits n' Giggles* and a virtual LAN tool like **Hamachi**, you can stream **UDP telemetry** from your racing game (like **F1 25 telemetry**) to your engineer over the internet-**without them needing to join your game lobby**.

This is a game-changer: the **F1 series limits online lobbies to 22 slots**, which are usually filled by drivers. With this solution, your race engineer can monitor your performance, make strategic calls, and give live feedback **without occupying a player slot or spectating in-game**.

---

## 🧰 Requirements

- **Driver PC (You):**
  - Sim game like F1 25, F1 24, F1 23, with **UDP telemetry output** enabled.
  - *Pits n' Giggles* installed and running ([get it here](https://github.com/ashwin-nat/pits-n-giggles)).
- **Engineer PC (Them):**
  - Any modern web browser (Chrome, Firefox, Edge, etc.).
- **VPN software:**
  - Recommended: [LogMeIn Hamachi](https://www.vpn.net/)
  - Alternatives: [ZeroTier](https://www.zerotier.com/), [Radmin VPN](https://www.radmin-vpn.com/), [Tailscale](https://tailscale.com/).

---

## 🎯 Why This Setup is Better

- **No need to join the game lobby.**
- **No slot used in the 22-player cap.**
- **No spectating required.**
- **Real-time access to full telemetry data.**
- **Works from anywhere in the world.**

Your engineer stays off the track and out of the game, but still gets **real-time UDP telemetry**, including:

- Lap times
- Sector deltas
- Tyre wear and prediction
- Fuel levels and prediction
- ERS deployment
- And more

All via a web-based dashboard powered by *Pits n' Giggles*.

---

## 1️⃣ Install VPN on Both PCs

To simulate being on the same local network, install **Hamachi** or another VPN tool on both the **driver** and **engineer** machines.

- The **Driver** creates a new network in Hamachi.
- The **Engineer** joins that same network using the same network ID and password.

![Hamachi Main UI](/blog_assets/remote-race-engineer/hamachi-create-network-1.png)
![Hamachi Create Network](/blog_assets/remote-race-engineer/hamachi-create-network-2.png)

[For those who prefer a video tutorial](https://www.youtube.com/watch?v=bWbo0gcFqA8)

---

## 2️⃣ Start *Pits n' Giggles* and Enable Game Telemetry

- Launch your racing game (e.g., F1 25).
  - Enable **UDP telemetry** (port 20777 by default).
- Start *Pits n' Giggles* on your PC ([installation guide](/setting-up-udp-telemetry-f1)).

You’ll see something like:

```

Server running on [http://127.0.0.1:4768](http://127.0.0.1:4768)

```

This is your **localhost IP**-but for remote access, use your Hamachi IP.

---

## 3️⃣ Engineer Connects to Your Hamachi IP

After establishing the network, the engineer can copy the driver's VPN IP address by right clicking their PC name and click "Copy Address"

Have your engineer open this in their browser:

```

http://<your-hamachi-ip>:4768

```

Example:

```

[http://25.124.87.33:4768](http://25.124.87.33:4768)

```

![Connected to Remote Dashboard](/blog_assets/remote-race-engineer/connected-to-remote-dashboard.png)
No need to touch the game lobby. Your engineer sees everything in real-time, without impacting lobby performance.

Alternatively, the driver can share the IP address that will be displayed in the Pits n' Giggles launcher window console log

![Pits n' Giggles Launcher](/blog_assets/remote-race-engineer/png-launcher-ui-ip-addr.png)

```bash
2025-07-26 13:45:23,405 [INFO] - Starting F1 telemetry server. Open one of the below addresses in your browser
    http://127.0.0.1:4768       <----- This is your loopback/self address, not interested
    http://192.168.0.127:4768   <----- This is your LAN address, not interested
    http://25.49.182.29:4768    <----- This is your VPN address, this is what we want
    http://localhost:4768       <----- This is your loopback/self address, not interested
```


---

## 🧪 Troubleshooting Tips

- Engineer can’t connect?
  - Make sure port **4768** is open in your firewall.
  - Test by pinging your Hamachi IP.
  - Try disabling antivirus/firewall temporarily (simplest and brute force solution).

- VPN not working?
  - Try:
    - [ZeroTier](https://www.zerotier.com/)
    - [Tailscale](https://tailscale.com/)
    - [Radmin VPN](https://www.radmin-vpn.com/)
    - [Non VPN solution - using Playit.gg](/blog/remote-race-engineering-playitgg)

> 📸 _Placeholder for screenshot: ZeroTier or Tailscale interface_

---

## 🔁 Related Links and Resources

- 👉 [More Tips n' Tricks](/blog)
- 👉 [Setup Guide](/blog/setting-up-udp-telemetry-f1)
- 👉 [Discord Server](https://discord.gg/RK5Z76h6dX)
- 👉 [Source code](https://github.com/ashwin-nat/pits-n-giggles)

---

With *Pits n' Giggles*, your remote engineer stays informed and connected-without touching the game lobby. No wasted slots, no screen sharing, no lag-just pure telemetry.

🏁 Ready to race smarter? [Get started now](/releases).
💬 Need help or have questions? Feel free to drop by our Discord server - we’re always happy to help!
