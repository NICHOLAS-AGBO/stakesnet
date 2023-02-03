import {AppBar, IconButton, PaletteMode, Stack, Toolbar} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "@static/img/logo.png";
import {DarkMode, LightMode} from "@mui/icons-material";
import {useWeb3Modal, useWeb3ModalTheme, Web3Button} from "@web3modal/react";
import {mainnet} from "wagmi/chains";

type Action={
    action: {changeTheme: ()=>void, mode: PaletteMode}
}


const Header:React.FC<Action> = ({action}) => {
    const {setDefaultChain,isOpen} = useWeb3Modal();
    const {setTheme} = useWeb3ModalTheme();

    setTheme({
        themeMode: action.mode==="dark"?"dark":"light",
    });

    setDefaultChain(mainnet);

  return (<AppBar elevation={0}
                  variant={"outlined"}
                  position={isOpen?"static":"sticky"}
                  sx={{
                      backgroundColor: (theme)=>theme.palette.mode==="dark"?"rgba(0,0,0,.15)":"rgba(255,255,255,.15)",
                      backdropFilter: "blur(4px)",
  }}>
        <Toolbar sx={{justifyContent: "space-between"}}>
            <Link href={"/"}>
                <Image src={logo} alt={"stakesnet logo"} priority width={40} height={40}/>
            </Link>
            <Stack gap={2} alignItems={"center"} flexDirection={"row"}>
                <Web3Button balance={"show"} icon={"hide"} />
                <IconButton onClick={action.changeTheme} color={"primary"}>
                    {action.mode==="light"?<DarkMode/>:<LightMode/>}
                </IconButton>
            </Stack>
        </Toolbar>
    </AppBar>);
}

export default Header;