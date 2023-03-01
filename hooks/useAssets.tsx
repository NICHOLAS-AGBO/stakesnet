import {CoinContext} from "@components/CoinContext";
import {useContext} from "react";

export const useAssets = ()=> useContext(CoinContext);