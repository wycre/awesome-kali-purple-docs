---
title: Homepage
---
Awesome Kali Purple Docs aims to revamp the [existing Kali Purple documentation](https://gitlab.com/kalilinux/kali-purple/documentation/-/wikis/home) to make it easier for those new to the ecosystem.

This documentation is incomplete, many hyperlinks may point towards pages that do not exist yet and some pages are blank. Contributions to this project would be greatly appreciated.
Planned Articles:
- [x] Byzantium Install/Setup Guide
- [ ] Violet Install/Setup Guide
- [ ] Purple Install/Setup Guide
- [ ] Eminence Install/Setup Guide
- [ ] Ecosystem/Virtualization Guides
- [ ] User Guides
	- [ ] Elastic Stack
	- [ ] GVM
	- [ ] OpenCTI


---
## About Kali Purple
Kali Purple is an extension to the normal Kali Linux tool-set and behavior designed to better serve defensive cyber operations. The goal is to make enterprise-grade security accessible to everyone.

Kali Purple can be set up as an '[[SOC In-A-Box]]'.

Join the [discord server](https://discord.com/invite/jwhaVmy74p) to ask questions and get help with Kali Purple.

## Before You Start
### A Comment on Virtualization
The officially recommended way to set up a Kali Purple '[[SOC In-A-Box]]' is via a set of virtual machines running on a ProxMox host. This is not required, before setting up the SOC In-A-Box, you should assess your requirements and resources. Any hypervisor or even bare metal should work. 

The official way to install Kali Purple as an '[[SOC In-A-Box]]'  is as virtual machines on a ProxMox cluster, for an '[[SOC In-A-Box]]' implementation, separating tools into different virtual machines based on scope of work is the recommended practice. The officially recommended hypervisor is ProxMox, but you may use any hypervisor, or run on bare metal based on your needs.

In general, use the hypervisor that you/your organization is most familiar with. This guide will not include any help information on using any hypervisors.
[[Virtualization|Read More...]]

## How to Start
- [[installation-guides/index|Installation Guides]]
- [[Remote Management]]
- [[User Accounts]]
	- [[Domain Joining]] (https://www.redhat.com/en/blog/linux-active-directory)
- [[Kali Purple Types]]

## Included Tools
There are over 100 defensive tools including:
- [[Elastic Stack]]
- [[Greenbone Vulnerability Manager]]
- [[OpenCTI]]
- [[OPNsense]]
- [[Suricata]]
- [[Malcolm]]
- [[Zeek]]
- All the Kali Linux tools
- etc.




