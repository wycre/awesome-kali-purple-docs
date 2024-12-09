---
tags:
  - installation-directions
  - setup-guide
  - dev/incomplete
---
The `kali-violet` server serves the Identify function of the NIST CSF.

## Network Interfaces
Purple is recommended to be connected to its own LAN only connected to itself and [[Byzantium Install Guide|Byzantium]].

## Prerequisites
- [Kali Purple Installation Medium](https://www.kali.org/get-kali/#kali-installer-images)
- Machine (Virtual or bare metal) with at least 1 network interface.

## Installation
1. [Download the OPNsense DVD disk image](https://opnsense.org/download/)
2. [[Virtualization|Set Up Machine]]
3. Enable SSH 
``` bash
sudo systemctl enable ssh --now
```
5. Download system updates
``` bash
sudo apt update && sudo apt full-upgrade
```
6. Download and enable XRDP
``` bash
sudo apt install xrdp
sudo systemctl enable xrdp --now
```
7. [[GVM|Install Greenbone Vulnerability Manager (GVM)]]
8. [[OpenCTI|Install OpenCTI]]
9. [[Elastic Agent|Install Elastic Agent]]