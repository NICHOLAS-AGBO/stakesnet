import {createContext, FC, ReactNode, use} from "react";
import useSWR from "swr";


export const CoinContext = createContext({});


const CoinList:FC<{children: ReactNode}> = ({children}) => {
    const fetcher = (url:string) => fetch(url).then(res => res.json());
    const { data } = useSWR('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', fetcher);

    return(
  <CoinContext.Provider value={data}>
      {children}
  </CoinContext.Provider>
    );
}

export default CoinList