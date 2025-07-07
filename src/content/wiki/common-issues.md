---
title: "Common Issues and Solutions"
description: "Troubleshooting guide for frequently encountered problems"
category: "Troubleshooting"
tags: ["troubleshooting", "issues", "solutions"]
lastUpdated: 2025-01-08
difficulty: "beginner"
---

# Common Issues and Solutions

This guide covers the most frequently encountered issues and their solutions.

## No Data Received

### Symptoms
- Dashboard shows "No connection" or "Waiting for data"
- No driver information appears
- Connection indicator shows red/disconnected

### Solutions

#### Check F1 Game Settings
1. Verify **UDP Telemetry** is set to `On`
2. Confirm **UDP Port** matches Pits n' Giggles (default: 20777)
3. Ensure **UDP Send Rate** is set to `60Hz`
4. Set **Your Telemetry** to `Public`

#### Check Pits n' Giggles Settings
1. Open Settings in the launcher
2. Verify UDP port matches F1 game setting
3. Restart the application after changes

#### Firewall Issues
1. Add Pits n' Giggles to Windows Firewall exceptions
2. Temporarily disable firewall to test
3. Check third-party antivirus/firewall software

## Intermittent Data Loss

### Symptoms
- Data appears and disappears randomly
- Some drivers missing from display
- Lag between game and dashboard

### Solutions

#### Network Optimization
1. Use wired connection instead of WiFi
2. Close bandwidth-heavy applications
3. Reduce UDP send rate to 30Hz if needed
4. Check for network congestion

#### System Performance
1. Close unnecessary applications
2. Ensure sufficient RAM available
3. Check CPU usage during racing
4. Update graphics drivers

## Console Connection Issues

### Symptoms
- Console players can't connect to PC running Pits n' Giggles
- Data works locally but not from console

### Solutions

#### Console Configuration
1. Enable **UDP Broadcast Mode** in F1 game
2. Ensure console and PC are on same network
3. Check router settings for UDP broadcast

#### PC Network Setup
1. Verify PC and console IP addresses are in same subnet
2. Disable Windows network isolation
3. Check router firewall settings
4. Try connecting devices directly via ethernet

## Performance Issues

### Symptoms
- Dashboard updates slowly
- High CPU/memory usage
- Application becomes unresponsive

### Solutions

#### Optimize Settings
1. Reduce update frequency in settings
2. Disable unnecessary visual effects
3. Close other applications
4. Restart Pits n' Giggles regularly

#### System Requirements
1. Ensure minimum system requirements are met
2. Update to latest version
3. Check for Windows updates
4. Verify sufficient disk space

## Data Accuracy Issues

### Symptoms
- Incorrect lap times or positions
- Wrong tire compound information
- Fuel data seems inaccurate

### Solutions

#### Game Version Compatibility
1. Verify correct UDP format is selected
2. Update to latest Pits n' Giggles version
3. Check for F1 game updates
4. Reset telemetry settings in game

#### Calibration
1. Start fresh session to recalibrate
2. Ensure clean race start for accurate data
3. Verify game difficulty settings
4. Check for game mods that might affect telemetry

## Application Won't Start

### Symptoms
- Executable doesn't launch
- Crashes immediately on startup
- Error messages on launch

### Solutions

#### System Compatibility
1. Verify Windows version compatibility
2. Install latest Visual C++ Redistributables
3. Run as administrator
4. Check for conflicting software

#### File Integrity
1. Re-download application
2. Extract to new folder
3. Check antivirus quarantine
4. Verify file permissions

## Getting Additional Help

If these solutions don't resolve your issue:

1. **Discord Community**: Join our [Discord](https://discord.gg/pq3R49wR3d) for real-time help
2. **GitHub Issues**: Report bugs on [GitHub](https://github.com/ashwin-nat/pits-n-giggles/issues)
3. **Documentation**: Check other wiki pages for detailed guides
4. **Logs**: Include application logs when reporting issues

### When Reporting Issues

Please include:
- Operating system version
- F1 game version
- Pits n' Giggles version
- Network setup (PC/console)
- Steps to reproduce the issue
- Any error messages