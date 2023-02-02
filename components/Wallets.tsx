import {
    EthereumClient,
    modalConnectors,
    walletConnectProvider,
} from "@web3modal/ethereum";


import { configureChains, createClient} from "wagmi";

import { arbitrum, mainnet, polygon, bsc, fantom } from "wagmi/chains";

const chains = [arbitrum, mainnet, polygon, bsc, fantom];

// Wagmi client
const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId: `${process.env.NEXT_PUBLIC_PROJECT_ID}` }),
]);

const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({
        projectId: `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
        version: "1" || "2",
        appName: "Stakersnet",
        chains,
    }),
    provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);
export {wagmiClient, ethereumClient};