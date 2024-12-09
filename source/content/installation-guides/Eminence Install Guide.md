---
tags:
  - installation-directions
  - setup-guide
  - dev/incomplete
---
The `kali-purple` server serves the Detect function of the NIST CSF.

## Network Interfaces
Purple is recommended to be connected to its own LAN only connected to itself and [[Byzantium Install Guide|Byzantium]].

## Prerequisites
- [Kali Purple Installation Medium](https://www.kali.org/get-kali/#kali-installer-images)
- Machine (Virtual or bare metal) with at least 1 network interface.

## Installation
1. [Download the OPNsense DVD disk image](https://opnsense.org/download/)
2. [[Virtualization|Set Up Machine]]
	1. When setting up the virtual machine, choose manual disk partitioning and make a large swap area partition. (24 GB recommended)
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
7. [[Malcolm|Setup Malcom]]
8. [[Elastic Agent|Install Elastic Agent]]