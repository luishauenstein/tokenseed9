# Boilerplate / Template for Next.js using wagmi and ethers.js

This template lets you start with a clean [Next.js](https://nextjs.org/) project as well as a "Connect Wallet" button that opens a modal for choosing between MetaMask and WalletConnect for connecting to Web3. It uses the [wagmi hook library](https://wagmi-xyz.vercel.app/).

## How to use

1. Clone this repository by navigating to the directory of your choice on your local machine and using
   `git clone https://github.com/luishauenstein/wagmi-next-starter`

2. Run either `npm install` or `yarn install` to download all necessary packages.

3. Open the file `wagmi-provider-config.js`, which can be found at the root of the project, and put in you [Infura ID](https://infura.io/) (optional step, but recommended for serious projects). This file can also be used to add and remove ways to connect to Web3. In this case, please refer to the [wagmi documentation](https://wagmi-xyz.vercel.app/).

4. Run either `npm run dev` or `yarn run dev` to start the development server.
