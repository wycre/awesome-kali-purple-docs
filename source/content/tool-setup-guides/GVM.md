---
tags:
  - dev/incomplete
  - setup-guide
  - installation-directions
---
Greenbone Vulnerability Management is a software framework including several services in tools for vulnerability scanning and vulnerability management.
## Installation
GVM can be installed through the terminal using APT
```bash
sudo apt install gvm
```

## Setup
Open a terminal and run the following:
```bash
sudo gvm-setup
```
The process may take a very long time to complete. **The default administrator password is random and displayed at the end of the setup process.**
![[Pasted image 20241208172022.png]]
You can now run `sudo gvm-check-setup` to confirm that GVM is set up correctly.
![[Pasted image 20241208172244.png]]

### Make GVM available on external interface
To make the GVM web interface available to other machines on the network, open `/lib/systemd/system/gsad.service` and replace the `127.0.0.1` with `0.0.0.0` ![[Pasted image 20241208172615.png]]![[Pasted image 20241208172646.png]]
Then run the following:
```bash
sudo systemctl daemon-reload
sudo gvm-stop; sudo gvm-start
```

The web interface should open automatically. Log in with username `admin` and the password that was generated during setup.


## See Also
- [Official User Guide](https://docs.greenbone.net/GSM-Manual/gos-22.04/en/index.html)