const { Client, createAccount, argUint64 } = require('orbs-client-sdk');

const INTERVAL = 60 * 1000;
const VCHAIN = 1000;
const NODE_URL = `https://node1.demonet.orbs.com/vchains/${VCHAIN}`;

const { privateKey, publicKey } = createAccount();
const orbClient = new Client(NODE_URL, VCHAIN, 'TEST_NET');

const ping = () => {
  const [tx] = orbClient.createTransaction(
    publicKey,
    privateKey,
    'counter',
    'add',
    [argUint64(1)]
  );
  return orbClient.sendTransaction(tx);
};

setInterval(ping, INTERVAL);