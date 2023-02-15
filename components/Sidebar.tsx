import {
    Box,
    Divider, Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton, ListItemIcon, ListItemText,
    ListSubheader,
    Stack,
    Tooltip,
    Typography
} from "@mui/material";
import {Close, CurrencyExchange, StackedBarChart, Token} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import logo from "@static/img/logo.png";
import React, {Dispatch, FC, SetStateAction} from "react";


type OpenDraw ={
    open: boolean,
    action:  Dispatch<SetStateAction<boolean>>
}

const Sidebar:FC<OpenDraw> = ({open,action}) => {
  return(<Drawer open={open} anchor={"right"} onClose={()=>action(false)} variant={"persistent"}>
          <List subheader={
              <ListSubheader disableGutters sx={{backgroundColor: "inherit", lineHeight: 0}}>
                  <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={2}>
                      <Box sx={{width: "max-content", backgroundColor: ({palette})=>palette.background.paper, color: "common.white", borderRadius: 2.5, border: "1px solid gray"}}>
                          <Tooltip title={"Close menu"}>
                              <IconButton color={"inherit"} onClick={()=>action(prevState => !prevState)}><Close color={"error"}/></IconButton>
                          </Tooltip>
                      </Box>
                      <Typography variant={"h5"} color={"primary"}>
                          <Link href={"/"}>
                              <Image style={{verticalAlign: "middle"}} src={logo} alt={"stakersnet logo"} priority width={30} height={30}/>&nbsp;
                              Stakersnet
                          </Link>
                      </Typography>
                  </Stack>
              </ListSubheader>
          } sx={{minWidth: "250px", height: "inherit", backgroundColor: "secondary.main", px: 3, py: 1, rowGap: 5}}>
              <Divider sx={{mt: 1, mb: 10}}/>
              <ListItem>
                  <Link style={{width: "100%"}} href={"/assets"}>
                      <ListItemButton>
                          <ListItemIcon><Token/></ListItemIcon>
                          <ListItemText>Assets</ListItemText>
                      </ListItemButton>
                  </Link>
              </ListItem>
              <ListItem>
                  <Link style={{width: "100%"}} href={"/governance"}>
                      <ListItemButton>
                          <ListItemIcon><StackedBarChart/></ListItemIcon>
                          <ListItemText>Governance</ListItemText>
                      </ListItemButton>
                  </Link>
              </ListItem>
              <ListItem>
                  <Link style={{width: "100%"}} href={"/stakes"}>
                      <ListItemButton>
                          <ListItemIcon><CurrencyExchange/></ListItemIcon>
                          <ListItemText>Staking</ListItemText>
                      </ListItemButton>
                  </Link>
              </ListItem>
          </List>

      </Drawer>
  );
}

export const FixedSidebar = () => (<List subheader={
    <ListSubheader sx={{lineHeight: 0, backgroundColor: "inherit"}}>
        <Typography variant={"h5"} color={"primary"}>
            <Link href={"/staking"}>
                <Image style={{verticalAlign: "middle"}} src={logo} alt={"stakersnet logo"} priority width={30} height={30}/>&nbsp;
                Stakersnet
            </Link>
        </Typography>
    </ListSubheader>
} sx={{display: {xs: "none", md: "block"} ,height: "inherit", backgroundColor: "secondary.main", p: 3, rowGap: 5}}>
    <br/>
    <br/>
    <Divider/>
    <br/>
    <ListItem>
        <Link style={{width: "100%"}} href={"/assets"}>
            <ListItemButton>
                <ListItemIcon><Token/></ListItemIcon>
                <ListItemText>Assets</ListItemText>
            </ListItemButton>
        </Link>
    </ListItem>
    <ListItem>
        <Link style={{width: "100%"}} href={"/governance"}>
            <ListItemButton>
                <ListItemIcon><StackedBarChart/></ListItemIcon>
                <ListItemText>Governance</ListItemText>
            </ListItemButton>
        </Link>
    </ListItem>
    <ListItem>
        <Link style={{width: "100%"}} href={"/stakes"}>
            <ListItemButton>
                <ListItemIcon><CurrencyExchange/></ListItemIcon>
                <ListItemText>Staking</ListItemText>
            </ListItemButton>
        </Link>
    </ListItem>
</List>);

export default Sidebar;