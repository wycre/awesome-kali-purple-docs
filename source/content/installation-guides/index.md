---
title: Installation Guides
tags:
  - installation-directions
  - general-information
---
Kali Purple separates its functions into different 'types' of Kali Purple instances. In general, Kali Purple types are determined by the corresponding [NIST CSF](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf) functions. The only differences between these instances is the specific tools installed and how they are configured. 

It's not required to run each of these types on separate machines/virtual machines. In fact, doing so is inadvisable if hardware resources are a restriction as keeping 4+ virtual machines running at the same time could be resource intensive for lower end hardware.

You also don't need to set up all of these types/tools, its best to assess how each tool meets your needs.

## Installation Order
After [[Virtualization|setting up your environment]], you will want to start setting up the different Kali Purple machines. There is no required order, but starting with [[Byzantium Install Guide|Byzantium]] is recommended.

## Types of Kali Purple
### 100 - Identify - Kali [[Violet Install Guide|Violet]]
- [[Greenbone Vulnerability Manager]]
- [[OpenCTI]]
### 200 - Protect - [[Byzantium Install Guide|Byzantium]]
- [[OPNsense]]
- [[Suricata]]
- [[Unbound]]
- [[Squid]]
- [[NGINX]]
	- [[NAXSI]]

### 300 - Detect - Kali [[Purple Install Guide|Purple]]
- [[Elastic Stack]]
### 400 - Respond - Kali [[Eminence Install Guide|Eminence]]
- [[Malcolm]]
	- [[Arkime]]
	- [[Zeek]]
	- [[CyberChef]]
	- [[OpenSearch]]
	- [[Suricata]]

### Kali Pearly

### Kali Heliotrope