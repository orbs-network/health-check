const { Client, createAccount, argUint64 } = require('orbs-client-sdk');

const INTERVAL = 30 * 1000;

const PROD_VCHAIN = 1100000;
const PROD_NODE_URL = `http://validator.orbs.com/vchains/${PROD_VCHAIN}`;
const CONTRACT_NAME = 'BenchmarkCounter';

const { privateKey, publicKey } = createAccount();
const orbClient = new Client(PROD_NODE_URL, PROD_VCHAIN, 'MAIN_NET');

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