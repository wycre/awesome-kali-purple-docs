---
tags:
  - dev/incomplete
  - setup-guide
  - installation-directions
---
## Installation
### Install Docker
```bash
sudo apt install docker.io
sudo systemctl enable docker --now
```
Then to allow management as a non-root user:
```bash
sudo usermod -aG docker $USER
sudo chmod 660 /var/run/docker.sock
```
After running this command, log out and log back in.

### Install OpenCTI via Portainer (Optional)
The [official documentation](https://gitlab.com/kalilinux/kali-purple/documentation/-/wikis/101_20:-OpenCTI-Installation) prescribes the use of Portainer to manage the OpenCTI docker stack. If you are familiar with Docker and Docker compose you can skip using Portainer and install OpenCTI directly. Please note that Portainer stacks do not function in the same way that Docker compose stacks do.
#### Install Portainer
```bash
docker volume create portainer_data
docker run -d -p 18000:18000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
```
You can access the web interface via HTTPS using the port `9443`.![[Pasted image 20241208175108.png]]

Within Portainer, select "Stacks" on the left side, then click "Add Stack".
Use the web editor to paste the contents of https://github.com/OpenCTI-Platform/docker/blob/master/docker-compose.yml ![[Pasted image 20241208180200.png]]
Several environment variables need be generated on the system before proceeding. To generate these variables run the following:
```bash
sudo mkdir /opt/opencti
cd /opt/opencti

sudo bash -c "(cat << EOF
OPENCTI_ADMIN_EMAIL=admin@opencti.io
OPENCTI_BASE_URL=http://kali-violet.kali.purple:8080
OPENCTI_ADMIN_PASSWORD=CHANGEMEPLEASE
OPENCTI_ADMIN_TOKEN=$(cat /proc/sys/kernel/random/uuid)
MINIO_ROOT_USER=$(cat /proc/sys/kernel/random/uuid)
MINIO_ROOT_PASSWORD=$(cat /proc/sys/kernel/random/uuid)
RABBITMQ_DEFAULT_USER=opencti
RABBITMQ_DEFAULT_PASS=$(cat /proc/sys/kernel/random/uuid)
CONNECTOR_HISTORY_ID=$(cat /proc/sys/kernel/random/uuid)
CONNECTOR_EXPORT_FILE_STIX_ID=$(cat /proc/sys/kernel/random/uuid)
CONNECTOR_EXPORT_FILE_CSV_ID=$(cat /proc/sys/kernel/random/uuid)
CONNECTOR_EXPORT_FILE_TXT_ID=$(cat /proc/sys/kernel/random/uuid)
CONNECTOR_IMPORT_DOCUMENT_ID=$(cat /proc/sys/kernel/random/uuid)
CONNECTOR_IMPORT_FILE_STIX_ID=$(cat /proc/sys/kernel/random/uuid)
CONNECTOR_IMPORT_REPORT_ID=$(cat /proc/sys/kernel/random/uuid)
SMTP_HOSTNAME=localhost
ELASTIC_MEMORY_SIZE=4G
EOF
 ) > .env"

sudo chmod 600 .env
sudo cat .env
```
Copy the output of the command and paste it into the Advanced environment variables editor in Portainer: ![[Pasted image 20241208180900.png]]
![[Pasted image 20241208180955.png]]
Adjust the admin email and password to your needs, then click "Deploy"


### Install OpenCTI via Docker Compose