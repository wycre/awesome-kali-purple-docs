Suricata is a network Intrusion Detection/Prevention System and network security monitoring engine. It is installed in [[Byzantium Install Guide|Byzantium]] by default.

The settings for Suricata can be found in the OPNsense web portal under Services > Intrusion Detection. OPNsense provides additional documentation on the use of Suricata [here](https://docs.opnsense.org/manual/ips.html#)

## Prerequisites
- [[Byzantium Install Guide|Install Byzantium]]
## Setup
1. Navigate to Services > Intrusion Detection > Administration in your OPNsense web portal and ensure the "Enabled" checkbox is checked. ![[Pasted image 20241027172022.png]]
2. Go to the "Download" tab and click "Download & Update Rules" then select all rulesets and click "Enable Selected"![[Pasted image 20241027172436.png]]
3. 