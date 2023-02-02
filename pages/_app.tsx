import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "@components/Header";
import {Box, createTheme, ThemeOptions, ThemeProvider, useMediaQuery} from "@mui/material";
import {useCallback, useEffect, useMemo, useState} from "react";
import BG1 from "@static/img/13182208_5166950.jpg";
import {WagmiConfig} from "wagmi";
import {ethereumClient, wagmiClient} from "@components/Wallets";
import {Web3Modal} from "@web3modal/react";


const LightTheme:ThemeOptions = {
  palette:{
    mode: 'light',
    primary:{
      main: "#000",
    },
    secondary: {
      main: '#fff',
    },
  }
};

const DarkTheme:ThemeOptions = {
  palette:{
    mode: 'dark',
    primary:{
      main: "#fff",
    },
    secondary: {
      main: '#000',
    },
    background:{
      paper: "rgba(81,81,81,0.55)"
    }
  }
};

export default function App({ Component, pageProps }: AppProps) {
  const muiMedia = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState(DarkTheme);


  //Theme value
  const Theme = useMemo(()=>createTheme(theme),[theme]);

  //theme change function
  const changeTheme = useCallback(()=> {
    if (Theme.palette.mode === "dark") {
      setTheme(LightTheme);
      window.localStorage.setItem("mode","light");
    }
    if (Theme.palette.mode === "light") {
      setTheme(DarkTheme);
      window.localStorage.setItem("mode","dark");
    }
  },[Theme]);


  //for controlling active theme on refresh
  useEffect(()=>{
    const systemMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (window.localStorage.mode){
      if (window.localStorage.mode === "dark") {
        setTheme(DarkTheme);
        document.documentElement.style.colorScheme = "dark";
      }
      if (window.localStorage.mode === "light") {
        setTheme(LightTheme);
        document.documentElement.style.colorScheme = "initial";
      }
    }else {
      if (systemMode&&muiMedia) {
        setTheme(DarkTheme);
        document.documentElement.style.colorScheme = "dark";
      }
      else {
        setTheme(LightTheme);
        document.documentElement.style.colorScheme = "initial";
      }
    }
  }, [muiMedia]);


  return <>
    <WagmiConfig client={wagmiClient}>
    <ThemeProvider theme={Theme}>
      <Box  sx={{
        background: ({palette})=>palette.mode==="dark"?`linear-gradient(180deg, #000 15%, rgba(0,0,0,.45)) no-repeat bottom, url(${BG1.src}) #000 no-repeat bottom`:"#fff",
        backgroundClip: "padding-box",
        backgroundSize: "100% 30%",
      }}>
    <Header action={{changeTheme: changeTheme, mode: Theme.palette.mode}}/>
      <Component {...pageProps} />
      </Box>
    </ThemeProvider>
    </WagmiConfig>
    <Web3Modal
        projectId={`${process.env.NEXT_PUBLIC_PROJECT_ID}`}
        ethereumClient={ethereumClient}
    />
  </>
}
