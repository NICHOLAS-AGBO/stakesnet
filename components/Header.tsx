import {AppBar, IconButton, PaletteMode, Toolbar} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "@static/img/logo.png";
import {DarkMode, LightMode} from "@mui/icons-material";

type Action={
    action: {changeTheme: ()=>void, mode: PaletteMode}
}

const Header:React.FC<Action> = ({action}) => {
  return (<AppBar elevation={0}
                  variant={"outlined"}
                  position={"static"}
                  sx={{background: "transparent"}}>
        <Toolbar sx={{justifyContent: "space-between"}}>
            <Link href={"/"}>
                <Image src={logo} alt={"stakesnet logo"} priority width={40} height={40}/>
            </Link>
            <IconButton onClick={action.changeTheme} color={"primary"}>
                {action.mode==="light"?<DarkMode/>:<LightMode/>}
            </IconButton>
        </Toolbar>
    </AppBar>);
}

export default Header;