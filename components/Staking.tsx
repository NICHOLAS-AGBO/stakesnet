import React, {FC, useState} from "react";
import {
    Box,
    Container,
    IconButton, List, ListItem, ListItemText,
    Paper,
    Stack,
    Drawer,
    Typography,
    Unstable_Grid2 as Grid, Divider, ListItemIcon, ListItemButton, ListSubheader, Tooltip
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import logo from "@static/img/logo.png";
import {Close, CurrencyExchange, Menu, StackedBarChart, Token} from "@mui/icons-material";

const Staking:FC = () => {
    const [state, setState] = useState(false);
    return(
      <>
      <Container maxWidth={false} sx={{py: 5}}>
        <Grid container gap={3} minHeight={"90vh"}>
          <Grid xs={12} md={3.5} lg={2.5} sx={{overflow: "hidden", mb: {xs: 2, md: 0}}}>
              <Stack flexDirection={"row"} alignItems={"center"} gap={2} sx={{display: {xs: "flex", md: "none"}}}>
                  <Box sx={{width: "max-content", p: .25, backgroundColor: "rgb(51,150,255)", color: "common.white", borderRadius: 2.5}}>
                      <IconButton color={"inherit"} onClick={()=>setState(prevState => !prevState)}><Menu color={"inherit"}/></IconButton>
                  </Box>
                  <Typography variant={"h5"} color={"primary"}>
                      <Link href={"/staking"}>
                          <Image style={{verticalAlign: "middle"}} src={logo} alt={"stakersnet logo"} priority width={30} height={30}/>&nbsp;
                          Stakersnet
                      </Link>
                  </Typography>
              </Stack>
              <List subheader={
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
              </List>

          </Grid>

          <Grid flexGrow={1} sx={{mt: {xs: 0, md: 3}}}>
            <Grid container gap={3} rowGap={5}>
              {/*  WALLET   */}
              <Grid xs={12}>
                  <Typography fontWeight={700} variant={"h5"} color={"primary"} mb={2}>Wallet</Typography>
                 <Paper elevation={0} sx={{borderColor: "gray", borderWidth: 1, borderStyle: "solid", height: 100}}>

                 </Paper>
              </Grid>
              {/*  MAIN CONTAINER   */}
              <Grid xs={12} lg={7.5} flexGrow={1}>
                  <Grid container direction={"column"} rowGap={5}>
                      <Grid>
                          <Typography fontWeight={700} variant={"h5"} color={"primary"} mb={2}>Assets</Typography>
                          <Paper elevation={0} sx={{borderColor: "gray", borderWidth: 1, borderStyle: "solid", height: 100}}>

                          </Paper>
                      </Grid>

                      <Grid>
                          <Typography fontWeight={700} variant={"h5"} color={"primary"} mb={2}>Governance</Typography>
                          <Paper elevation={0} sx={{borderColor: "gray", borderWidth: 1, borderStyle: "solid", height: 100}}>

                          </Paper>
                      </Grid>

                      <Grid>
                          <Typography fontWeight={700} variant={"h5"} color={"primary"} mb={2}>Staking</Typography>
                          <Paper elevation={0} sx={{borderColor: "gray", borderWidth: 1, borderStyle: "solid", height: 100}}>

                          </Paper>
                      </Grid>

                  </Grid>
              </Grid>

              {/*  ADVERTS  */}
              <Grid xs={12} lg={4}>
                  <Typography fontWeight={700} variant={"h5"} color={"primary"} mb={2}>News and Feeds</Typography>
                  <Paper elevation={0} sx={{borderColor: "gray", borderWidth: 1, borderStyle: "solid", height: 100}}>

                      </Paper>
              </Grid>


            </Grid>



          </Grid>

        </Grid>

      </Container>
          <Drawer open={state} anchor={"right"} onClose={()=>setState(false)} variant={"persistent"}>
            <List subheader={
                <ListSubheader sx={{backgroundColor: "inherit", lineHeight: 0}}>
                    <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
                        <Box sx={{width: "max-content", backgroundColor: ({palette})=>palette.background.paper, color: "common.white", borderRadius: 2.5, border: "1px solid gray"}}>
                            <Tooltip title={"Close menu"}>
                                <IconButton color={"inherit"} onClick={()=>setState(prevState => !prevState)}><Close color={"error"}/></IconButton>
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
            } sx={{minWidth: "250px", height: "inherit", backgroundColor: "secondary.main", p: 3, rowGap: 5}}>
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
            </List>

          </Drawer>

      </>
  );
}

export default Staking;