---
tags:
  - installation-directions
  - setup-guide
---

The Byzantium server acts as the barrier between the WAN and LAN in the [Kali Purple Reference Architecture](https://gitlab.com/kalilinux/kali-purple/documentation/-/raw/main/pictures/Kali-Purple-03-Architecture.png).

## Network Interfaces
Because Byzantium acts as a firewall, it is important that it is connected to both the LAN and WAN networks. The reference architecture also recommends making a "Secure Server Net" (SSN) for [[Violet]], [[Purple]], and [[Eminence]], then connecting Byzantium to these SSNs.

These network interfaces can be physical interfaces if you are running Byzantium on bare metal, or virtual networks provided by your hypervisor. Before you install Byzantium, you must have a WAN and LAN interface installed on the machine, virtual or otherwise.

## Prerequisites
- [OPNsense DVD disk image](https://opnsense.org/download/)
- Machine (Virtual or bare metal) with AT LEAST 2 separate network interfaces.
## Installation
The host operating system for Byzantium is OPNsense 
1. [Download the OPNsense DVD disk image](https://opnsense.org/download/)
2. [[Virtualization|Set Up Machine]]
3. Ensure that the virtual machine is connected to both the WAN and LAN networks.
4. When you reach the OPNsense installation prompt, login as `installer` with password `opnsense`
5. Select your desired keyboard layout, "US" is the default![[Pasted image 20241027120207.png]]
6. Choose "Install (UFS)"![[Pasted image 20241027120247.png]]
7. Choose the correct disk, name may differ by hypervisor![[Pasted image 20241027120401.png]]
8. Accept the default swap partition size![[Pasted image 20241027120433.png]]
9. Select "Yes", then wait for the install to complete.![[Pasted image 20241027120509.png]]
10. Select "Change root password"![[Pasted image 20241027120805.png]]
11. Give it a very secure password, then confirm on the next prompt![[Pasted image 20241027120901.png]]
12. Select "Complete Install" ![[Pasted image 20241027121004.png]]
13. Wait for the system to reboot
## Setup
1. Login with `root` and the password you set before
2. Enter `2` to set the IP address for your LAN network![[Pasted image 20241027122344.png]]![[Pasted image 20241027122408.png]]
3. Disable DHCP![[Pasted image 20241027122528.png]]
4. Assign it the IP `192.168.1.1` and subnet bit count `24`![[Pasted image 20241027122627.png]]
5. When prompted for an upstream gateway address, just press \<ENTER\>![[Pasted image 20241027122757.png]]
6. Do not configure an IPv6 address!![[Pasted image 20241027122921.png]]
7. Do not enable the DHCP server on LAN ![[Pasted image 20241027123000.png]]
8. Select `y` for changing the web GUI protocol and restoring web GUI access defaults![[Pasted image 20241027123107.png]]
9. Log into the web interface at [192.168.1.1](http://192.168.1.1) with username `root` and the password you set earlier. ![[Pasted image 20241027123334.png]]You should be redirected to the system setup wizard. If you are not, you can find it in the sidebar under System > Wizard ![[Pasted image 20241027123545.png]]
10. Enter the desired information such as hostname and DNS servers. ![[Pasted image 20241027123727.png]]
11. Set the server time zone ![[Pasted image 20241027123821.png]]
12. Don't make any changes on "Configure WAN Interface" or "Configure LAN Interface"![[Pasted image 20241027123931.png]]![[Pasted image 20241027124008.png]]
13. Skip the root password prompt and click "Reload" to apply the changes ![[Pasted image 20241027124054.png]]
14. Navigate to System > Settings > Administration. Here you can enable HTTPS for the web GUI and make other changes that control access to the OPNsense server. ![[Pasted image 20241027124418.png]]
## More Tools
In order to complete a Byzantium setup as shown in the [Kali Purple Reference Architecture](https://gitlab.com/kalilinux/kali-purple/documentation/-/raw/main/pictures/Kali-Purple-03-Architecture.png), follow these linked guides to install & set up the the other tools included in Byzantium.
- [[Suricata]] - Intrusion Detection/Prevention System
- [[Unbound]] - DNS
- [[Squid]] - Proxy
- [[NGINX]] - Reverse Proxy
- [[NAXSI]] - Web Application Firewall 
## Notes
OPNsense has an online manual you can read [here](https://docs.opnsense.org/index.html)
### Updating
OPNsense will occasionally have updates, when updates are available it is recommended to log into OPNsense by VGA or Serial, simply choose option `12` after logging in as root.

Some plugins may require a system update in order to install, if this is the case the required version will be displayed in the plugin install log output.

### Monitoring & Alerts
#### Monit

