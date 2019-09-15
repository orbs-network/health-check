# Health Check
> Orbs network node heart beat

## Overview
Health-check is a set of checks performed against various vchains. Each check sends a transaction at a given period of time. <br />
Metrics are read from nodes. If the node is healthy, we should see the transactions in [graphana dashboard](https://orbsnetwork.grafana.net/d/a-3pW-3mk/orbs-production).

## Adding health check
### 1. Add check file
Folder `/src` contains files with checks. Create a new file with relevant call. <br />
**Important!** It's your responsibility to invoke the function periodically. You can do it either by `setInterval` or using any other library for cron jobs.

### 2. Invoke your check
Edit `index.js` file to add another fork process. Your check will run as a separate process independently from others, meaning, if other checks throw exception, your process will keep running.

## Deployment
1. Open a terminal
1. `ssh -o StrictHostKeyChecking=no ubuntu@13.57.221.146` [assuming you have a valid certificate to enter]
1. `cd /opt/health-check/`
1. `git pull`
1. [stop previous processes]
1. `npm start`

## Licence
MIT.