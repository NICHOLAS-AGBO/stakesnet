import {createContext, FC, ReactNode, use} from "react";
import useSWR from "swr";

type Coin = {
    data: any[],
    loading: boolean,
    error?: Error
}
export const CoinContext = createContext<Coin>({data: [], loading: true});


const CoinList:FC<{children: ReactNode}> = ({children}) => {
    const fetcher = (url:string) => fetch(url).then(res => res.json());
    const { data, isLoading, error } = useSWR('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', fetcher);

    return(
  <CoinContext.Provider value={{data: data,loading: isLoading, error: error}}>
      {children}
  </CoinContext.Provider>
    );
}

export default CoinList