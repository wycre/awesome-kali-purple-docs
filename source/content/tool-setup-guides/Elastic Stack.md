---
tags:
  - dev/incomplete
  - setup-guide
  - installation-directions
  - rewrite-planned
---
# This guide no longer works, a rewrite is planned
## Installation
The Elastic stack has several components that each have their own installation guides.

### Install Elasticsearch
This guide is adapted from the [official guide](https://www.elastic.co/guide/en/elastic-stack/current/installing-elastic-stack.html) and the [guide written by Frankline Bett](https://techviewleo.com/install-elastic-stack-elk-on-debian/).
#### Install from APT repository
The elastic APT repository is installed by default on Kali Purple, run the following command to install `elasticsearch`
```bash
sudo apt install elasticsearch
```
#### Configure Elasticsearch
Open the configuration file...
```bash
sudo nano /etc/elasticsearch/elasticsearch.yml
```
And set the following options:
```yaml
cluster.name: kali-puprle
network.host: 0.0.0.0
http.port: 9200
```

Set the default user's password:
```
sudo /usr/share/elasticsearch/bin/elasticsearch-reset-password -u elastic -i
```
![[Pasted image 20241201143000.png]]
#### Start Elasticsearch
```bash
sudo systemctl daemon-reload
sudo systemctl enable elasticsearch.service
sudo systemctl start elasticsearch
```
#### Test that Elasticsearch is running
```bash
sudo curl --cacert /etc/elasticsearch/certs/http_ca.crt -u elastic https://localhost:9200
```
![[Pasted image 20241201143225.png]]
This result means that Elasticsearch is fully functional

### Install Logstash
#### Install from APT repository
```bash
sudo apt install logstash
```
#### Configure Logstash
Create the config file `/etc/logstash/conf.d/beats.conf` with the following content.
```
input {
  beats {
    port => 5044
  }
}
filter {
  if [type] == "syslog" {
     grok {
        match => { "message" => "%{SYSLOGLINE}" }
  }
     date {
        match => [ "timestamp", "MMM  d HH:mm:ss", "MMM dd HH:mm:ss" ]
     }
  }
}
output {
  elasticsearch {
    hosts => ["127.0.0.1:9200"]
    index => "%{[@metadata][beat]}-%{+YYYY.MM.dd}"
  }
}
```
#### Start Logstash service
```bash
sudo systemctl enable logstash.service
sudo systemctl start logstash
```
### Install Beats
To gather data, we will set up Filebeat, Metricbeat, and Packetbeat.
#### Filebeat
##### Install from APT repository
```bash
sudo apt install filebeat
```
##### Configure Filebeat
Open `/etc/filebeat/filebeat.yml` and make the following changes:
1. Comment out all lines in the "Elasticsearch output" section ![[Pasted image 20241201145127.png]]
2. Uncomment the lines for "Logstash output" ![[Pasted image 20241201145220.png]]
3. Set the "Filebeat inputs" section 'enabled' flag to `true`![[Pasted image 20241201145333.png]]
4. Save and close the file
##### Start Filebeat service
```bash
sudo systemctl enable filebeat
sudo systemctl start filebeat
```

#### Metricbeat
##### Install from APT repository
```bash
sudo apt install metricbeat
```
##### Configure Metricbeat
Open `/etc/metricbeat/metricbeat.yml` and make the following changes:
1. Comment out all lines in the "Elasticsearch output" section ![[Pasted image 20241201145127.png]]
2. Uncomment the lines for "Logstash output" ![[Pasted image 20241201145220.png]]
##### Start Metricbeat service
```bash
sudo systemctl enable metricbeat
sudo systemctl start metricbeat
```

#### Packetbeat (TODO: Reassess)
##### Install from APT repository
```bash
sudo apt install packetbeat
```
##### Configure Packetbeat
Open `/etc/packetbeat/packetbeat.yml` and make the following changes:
1. Comment out all lines in the "Elasticsearch output" section ![[Pasted image 20241201145127.png]]
2. Uncomment the lines for "Logstash output" ![[Pasted image 20241201145220.png]]
##### Start Packetbeat Service
```bash
sudo systemctl enable packetbeat
sudo systemctl start packetbeat
```

### Install Kibana
#### Install from APT repository
```bash
sudo apt install kibana
```
#### Configure Kibana
Open the configuration file `/etc/kibana/kibana.yml` and ensure the following configuration values are set:
```yaml
server.port: 5601
server.host: "0.0.0.0"
```

#### Start Kibana Service
```bash
sudo systemctl enable kibana.service
sudo systemctl start kibana
```

#### Access Kibana Web Interface
1. Get the Kibana enrollment token:
```bash
sudo /usr/share/elasticsearch/bin/elasticsearch-create-enrollment-token -s kibana
```
2. Copy the output of the command
3. Open the Kibana web interface at http://localhost:5601
4. Paste the enrollment token and click "Configure Elastic"![[Pasted image 20241201150216.png]]
5. To get the code from the verification code run:
```bash
sudo /usr/share/kibana/bin/kibana-verification-code
```
![[Pasted image 20241201150359.png]]
6. Wait for the configurations to complete
7. Select "Explore on my own"
8. Enable beats modules
```bash
sudo filebeat modules enable system
sudo metricbeat modules enable logstash
```
