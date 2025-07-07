---
title: "UDP Configuration Guide"
description: "Advanced UDP network configuration for different setups"
category: "Configuration"
tags: ["udp", "network", "configuration"]
lastUpdated: 2025-01-10
difficulty: "intermediate"
---

# UDP Configuration Guide

This guide covers advanced UDP configuration options for different network setups.

## Default Configuration

By default, Pits n' Giggles listens on:
- **Port**: 20777
- **Interface**: All interfaces (0.0.0.0)
- **Protocol**: UDP

## Console Setup (PlayStation/Xbox)

If you're using a console, you'll need to run Pits n' Giggles on a separate PC:

### Requirements
- Console and PC on the same network
- F1 game configured for UDP broadcast

### Console Configuration
1. Set **UDP Broadcast Mode** to `On`
2. Set **UDP Port** to `20777` (or your custom port)
3. Ensure console and PC are on the same subnet

### PC Configuration
1. Open Pits n' Giggles settings
2. Verify the UDP port matches your console setting
3. Ensure Windows Firewall allows the application

## Custom Port Configuration

To use a different port:

1. In F1 game: Change **UDP Port** to your desired port
2. In Pits n' Giggles: Go to Settings > Network > F1 UDP Telemetry Port
3. Enter the same port number
4. Restart both applications

## Firewall Configuration

### Windows Firewall
1. Open Windows Defender Firewall
2. Click "Allow an app or feature through Windows Defender Firewall"
3. Add Pits n' Giggles executable
4. Ensure both Private and Public networks are checked

### Third-party Firewalls
- Add Pits n' Giggles to allowed applications
- Allow UDP traffic on your configured port
- Ensure inbound connections are permitted

## Network Troubleshooting

### Common Issues
- **No data received**: Check port configuration and firewall
- **Intermittent data**: Network congestion or packet loss
- **Console not connecting**: Verify broadcast mode and subnet

### Testing Connection
1. Use `netstat -an | findstr :20777` to verify port is listening
2. Check Windows Event Viewer for network errors
3. Use Wireshark to monitor UDP traffic (advanced)

## Multiple Instances

To run multiple instances of Pits n' Giggles:

1. Each instance needs a unique port
2. Configure F1 game to send to multiple ports (if supported)
3. Or use UDP packet duplication tools

## Performance Optimization

- Use wired network connection when possible
- Ensure sufficient network bandwidth
- Close unnecessary network applications
- Consider dedicated network interface for telemetry