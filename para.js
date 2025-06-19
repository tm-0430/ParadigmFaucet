#!/usr/bin/env node
const { program } = require('commander');
const axios = require('axios');

program
  .version('0.1.0')
  .requiredOption('-a, --address <address>', 'Wallet address to receive tokens')
  .option('-n, --network <network>', 'Testnet network (default: goerli)', 'goerli')
  .action(async (options) => {
    try {
      console.log(`Requesting tokens for address ${options.address} on ${options.network}...`);
      // Example API call placeholder - replace with actual Paradigm Faucet API endpoint and parameters
      const response = await axios.post('https://faucet.paradigm.xyz/api/request', {
        address: options.address,
        network: options.network
      });
      console.log('Faucet response:', response.data);
    } catch (error) {
      console.error('Error requesting tokens:', error.message);
    }
  });

program.parse(process.argv);
