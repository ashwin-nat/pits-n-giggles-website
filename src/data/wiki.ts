export interface WikiPage {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  lastUpdated: Date;
  featured?: boolean;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  content: string;
}

export interface WikiCategory {
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const wikiCategories: WikiCategory[] = [
  {
    name: "Getting Started",
    description: "Essential guides for new users",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    color: "text-green-400"
  },
  {
    name: "Configuration",
    description: "Setup and configuration guides",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
    color: "text-blue-400"
  },
  {
    name: "Features",
    description: "Detailed feature explanations",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
    color: "text-purple-400"
  },
  {
    name: "Troubleshooting",
    description: "Common issues and solutions",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><circle cx="12" cy="12" r="10"></circle><path d="M12 17h.01"></path></svg>`,
    color: "text-orange-400"
  },
  {
    name: "Advanced",
    description: "Advanced topics and techniques",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    color: "text-red-400"
  }
];

export const wikiPages: WikiPage[] = [
  {
    slug: "getting-started",
    title: "Getting Started with Pits n' Giggles",
    description: "Complete guide to setting up and using Pits n' Giggles for the first time",
    category: "Getting Started",
    tags: ["setup", "beginner", "installation"],
    lastUpdated: new Date("2025-01-15"),
    featured: true,
    difficulty: "beginner",
    content: `
# Getting Started with Pits n' Giggles

Welcome to Pits n' Giggles! This guide will help you get up and running with our F1 telemetry application.

## System Requirements

- **Operating System**: Windows 10/11 (macOS and Linux coming soon)
- **F1 Game**: F1 23, F1 24, or F1 25
- **Network**: Local network access for UDP telemetry
- **Hardware**: Any modern PC capable of running F1 games

## Quick Start

### 1. Download the Application

Visit our [releases page](/releases) and download the latest version for your platform.

### 2. Extract and Run

1. Create a folder for Pits n' Giggles (e.g., \`C:\\PitsNGiggles\`)
2. Extract the downloaded file to this folder
3. Run \`pits_n_giggles.exe\`

### 3. Configure F1 Game

In your F1 game settings:

1. Go to **Game Options > Settings > Telemetry Settings**
2. Set **UDP Telemetry** to \`On\`
3. Set **UDP Port** to \`20777\`
4. Set **UDP Send Rate** to \`60Hz\`
5. Set **UDP Format** to your game version (\`2023\`, \`2024\`, or \`2025\`)
6. Set **Your Telemetry** to \`Public\`

### 4. Start Racing

1. Launch a race or practice session
2. Open the dashboard in Pits n' Giggles
3. Start receiving live telemetry data!

## Next Steps

- Read about [UDP Configuration](udp-configuration) for advanced network setup
- Learn about [Dashboard Features](dashboard-overview) to get the most out of the interface
- Check out [Troubleshooting](common-issues) if you encounter any problems

## Need Help?

- Join our [Discord community](https://discord.gg/pq3R49wR3d)
- Check the [troubleshooting guide](common-issues)
- Report issues on [GitHub](https://github.com/ashwin-nat/pits-n-giggles/issues)
    `
  },
  {
    slug: "udp-configuration",
    title: "UDP Configuration Guide",
    description: "Advanced UDP network configuration for different setups",
    category: "Configuration",
    tags: ["udp", "network", "configuration"],
    lastUpdated: new Date("2025-01-10"),
    difficulty: "intermediate",
    content: `
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
1. Set **UDP Broadcast Mode** to \`On\`
2. Set **UDP Port** to \`20777\` (or your custom port)
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
1. Use \`netstat -an | findstr :20777\` to verify port is listening
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
    `
  },
  {
    slug: "dashboard-overview",
    title: "Dashboard Overview",
    description: "Complete guide to the Pits n' Giggles dashboard interface",
    category: "Features",
    tags: ["dashboard", "interface", "features"],
    lastUpdated: new Date("2025-01-12"),
    featured: true,
    difficulty: "beginner",
    content: `
# Dashboard Overview

The Pits n' Giggles dashboard is your command center for race telemetry and strategy.

## Main Dashboard Layout

### Header Section
- **Session Info**: Current session type, track, and weather
- **Time Display**: Session time remaining and current lap time
- **Connection Status**: UDP connection indicator

### Driver Panel
Each driver gets a dedicated panel showing:
- **Position**: Current race position
- **Name**: Driver name (if available)
- **Lap Time**: Current and best lap times
- **Tire Info**: Compound, age, and wear percentage
- **Fuel**: Current fuel level and consumption rate

### Your Car (Highlighted)
Your car panel includes additional information:
- **Detailed tire wear** for each corner
- **ERS deployment** and harvest data
- **Fuel predictions** and recommendations
- **Setup information** (when available)

## Interactive Elements

### Clickable Panels
Click on any driver panel to:
- View detailed telemetry history
- Compare performance metrics
- Analyze tire and fuel strategies

### Modal Windows
- **Lap Times**: Detailed lap time analysis
- **Tire Management**: Wear patterns and predictions
- **Fuel Analysis**: Consumption trends and optimization
- **ERS Usage**: Deployment and harvest strategies

## Real-time Updates

The dashboard updates in real-time with:
- **Live timing**: Lap times and sector splits
- **Position changes**: Real-time position updates
- **Tire degradation**: Live wear calculations
- **Fuel consumption**: Real-time usage tracking

## Customization Options

### Display Settings
- Toggle between different information views
- Adjust update frequency
- Customize color schemes
- Show/hide specific data points

### Data Filters
- Filter by driver
- Focus on specific metrics
- Historical data ranges
- Performance comparisons

## Engineer Mode

For advanced users, Engineer Mode provides:
- **Extended telemetry data** for all drivers
- **Predictive analytics** for race strategy
- **Comparative analysis** tools
- **Export capabilities** for data analysis

## Stream Overlay

The dashboard can be used as an OBS overlay:
- Transparent background option
- Customizable layout for streaming
- Real-time data for viewers
- Minimal performance impact

## Keyboard Shortcuts

- **Space**: Pause/resume data collection
- **R**: Reset session data
- **F**: Toggle fullscreen mode
- **E**: Switch to Engineer mode
- **S**: Take screenshot
- **H**: Show/hide help overlay

## Tips for Best Experience

1. **Monitor Size**: Use at least 1920x1080 for optimal layout
2. **Network**: Ensure stable UDP connection
3. **Performance**: Close unnecessary applications
4. **Updates**: Keep the application updated for latest features
    `
  },
  {
    slug: "common-issues",
    title: "Common Issues and Solutions",
    description: "Troubleshooting guide for frequently encountered problems",
    category: "Troubleshooting",
    tags: ["troubleshooting", "issues", "solutions"],
    lastUpdated: new Date("2025-01-08"),
    difficulty: "beginner",
    content: `
# Common Issues and Solutions

This guide covers the most frequently encountered issues and their solutions.

## No Data Received

### Symptoms
- Dashboard shows "No connection" or "Waiting for data"
- No driver information appears
- Connection indicator shows red/disconnected

### Solutions

#### Check F1 Game Settings
1. Verify **UDP Telemetry** is set to \`On\`
2. Confirm **UDP Port** matches Pits n' Giggles (default: 20777)
3. Ensure **UDP Send Rate** is set to \`60Hz\`
4. Set **Your Telemetry** to \`Public\`

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
    `
  },
  {
    slug: "advanced-features",
    title: "Advanced Features and Techniques",
    description: "Deep dive into advanced functionality and power-user features",
    category: "Advanced",
    tags: ["advanced", "features", "techniques"],
    lastUpdated: new Date("2025-01-05"),
    difficulty: "advanced",
    content: `
# Advanced Features and Techniques

Unlock the full potential of Pits n' Giggles with these advanced features and techniques.

## Data Export and Analysis

### JSON Data Format
Pits n' Giggles saves session data in JSON format for easy analysis:

\`\`\`json
{
  "session": {
    "type": "race",
    "track": "monaco",
    "weather": "clear"
  },
  "drivers": [
    {
      "name": "Player",
      "laps": [...],
      "telemetry": [...]
    }
  ]
}
\`\`\`

### Custom Analysis Scripts
Create Python scripts to analyze your data:

\`\`\`python
import json
import matplotlib.pyplot as plt

# Load session data
with open('session_data.json', 'r') as f:
    data = json.load(f)

# Analyze lap times
lap_times = [lap['time'] for lap in data['drivers'][0]['laps']]
plt.plot(lap_times)
plt.title('Lap Time Progression')
plt.show()
\`\`\`

## API Integration

### REST API Endpoints
Access live data via REST API:

- \`GET /api/session\` - Current session info
- \`GET /api/drivers\` - All driver data
- \`GET /api/driver/{id}\` - Specific driver data
- \`GET /api/telemetry\` - Live telemetry stream

### WebSocket Connection
Real-time data streaming:

\`\`\`javascript
const ws = new WebSocket('ws://localhost:4768/ws');
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  // Process real-time telemetry
};
\`\`\`

## Custom Overlays

### OBS Browser Source
Create custom overlays for streaming:

1. Add Browser Source in OBS
2. URL: \`http://localhost:4768/custom-overlay\`
3. Customize CSS for your brand
4. Real-time data updates

### HTML/CSS Customization
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <style>
    .telemetry-overlay {
      background: rgba(0,0,0,0.8);
      color: white;
      font-family: monospace;
    }
  </style>
</head>
<body>
  <div class="telemetry-overlay">
    <div id="lap-time"></div>
    <div id="position"></div>
  </div>
</body>
</html>
\`\`\`

## Distributed Setup

### Multi-Device Configuration
Run components on different devices:

#### Main PC (Game + Core)
- F1 game with UDP telemetry
- Pits n' Giggles core application
- Data processing and storage

#### Secondary PC (Dashboard)
- Dashboard-only mode
- Connect to main PC via network
- Dedicated display for engineer

#### Mobile Device (Monitoring)
- Mobile-optimized interface
- Real-time notifications
- Remote monitoring capabilities

### Network Architecture
\`\`\`
F1 Game (UDP) → Core App → WebSocket → Dashboard
                     ↓
                 REST API → Mobile App
                     ↓
                 File Export → Analysis Tools
\`\`\`

## Performance Optimization

### High-Frequency Data Collection
For professional use:

1. Increase UDP send rate to maximum
2. Use dedicated network interface
3. Optimize system for real-time processing
4. Monitor for packet loss

### Memory Management
\`\`\`javascript
// Configure data retention
{
  "maxLaps": 100,
  "maxDrivers": 22,
  "dataRetentionMinutes": 120,
  "compressionEnabled": true
}
\`\`\`

## Custom Algorithms

### Tire Wear Prediction
Implement custom wear algorithms:

\`\`\`python
def predict_tire_wear(current_wear, laps_completed, total_laps):
    wear_rate = current_wear / laps_completed
    predicted_final = wear_rate * total_laps
    return min(predicted_final, 100)
\`\`\`

### Fuel Strategy Optimization
\`\`\`python
def optimize_fuel_strategy(lap_times, fuel_consumption, total_laps):
    # Calculate optimal fuel load
    avg_consumption = sum(fuel_consumption) / len(fuel_consumption)
    required_fuel = avg_consumption * (total_laps - len(fuel_consumption))
    
    # Factor in tire degradation
    degradation_factor = calculate_degradation(lap_times)
    adjusted_fuel = required_fuel * degradation_factor
    
    return adjusted_fuel
\`\`\`

## Integration with External Tools

### Telemetry Analysis Software
Export data for use with:
- MoTeC i2 Pro
- WinDarab
- Custom MATLAB/Python analysis

### Race Engineering Tools
- Strategy simulation software
- Tire model validation
- Performance correlation analysis

### Data Visualization
- Grafana dashboards
- Custom web interfaces
- Real-time monitoring systems

## Automation and Scripting

### Automated Data Collection
\`\`\`bash
#!/bin/bash
# Auto-start data collection
./pits_n_giggles --auto-start --session-type=race
\`\`\`

### Post-Session Processing
\`\`\`python
# Automatic analysis after session
import subprocess
import json

def process_session(session_file):
    # Load and analyze data
    with open(session_file) as f:
        data = json.load(f)
    
    # Generate reports
    generate_lap_analysis(data)
    generate_tire_report(data)
    generate_fuel_analysis(data)
    
    # Send notifications
    send_discord_notification(f"Session analysis complete: {session_file}")
\`\`\`

## Security Considerations

### Network Security
- Use VPN for remote connections
- Implement authentication for API access
- Encrypt sensitive data exports
- Monitor for unauthorized access

### Data Privacy
- Anonymize exported data
- Secure storage of session files
- Regular cleanup of old data
- Compliance with privacy regulations

## Troubleshooting Advanced Issues

### High CPU Usage
1. Profile data processing bottlenecks
2. Optimize update frequencies
3. Use hardware acceleration where available
4. Implement data sampling strategies

### Memory Leaks
1. Monitor memory usage over time
2. Implement proper cleanup routines
3. Use memory profiling tools
4. Regular application restarts for long sessions

### Network Latency
1. Use dedicated network interfaces
2. Optimize UDP buffer sizes
3. Implement adaptive quality settings
4. Monitor network performance metrics

This advanced guide provides the foundation for power users to maximize their use of Pits n' Giggles. For specific implementation details, consult the source code or reach out to the development community.
    `
  }
];