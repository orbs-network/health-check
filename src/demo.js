const { Client, createAccount, argUint64 } = require('orbs-client-sdk');

const INTERVAL = 30 * 1000;
const DEMO_VCHAIN = 1000;
const DEMO_NODE_URL = `http://node1.demonet.orbs.com/vchains/${DEMO_VCHAIN}`;
const CONTRACT_NAME = 'counter';

const { privateKey, publicKey } = createAccount();
const orbClient = new Client(DEMO_NODE_URL, DEMO_VCHAIN, 'TEST_NET');

const ping = () => {
  const [tx] = orbClient.createTransaction(
    publicKey,
    privateKey,
    CONTRACT_NAME,
    'add',
    [argUint64(1)]
  );
  return orbClient.sendTransaction(tx);
};

setInterval(ping, INTERVAL);
