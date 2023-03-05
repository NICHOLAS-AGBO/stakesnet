import React, {FC, useState} from "react";
import {
    Box, Button,
    Container,
    IconButton, Paper,
    Stack, Typography,
    Unstable_Grid2 as Grid,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import logo from "@static/img/logo.png";
import {Menu} from "@mui/icons-material";
import Sidebar, {FixedSidebar} from "@components/Sidebar";
import {useRouter} from "next/router";
import UserWallet from "@components/UserWallet";



const Staking:FC = () => {
    const [state, setState] = useState(false);
    const {push} = useRouter();

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
              <FixedSidebar/>
          </Grid>

          <Grid xs={12} md={8} lg={9} flexGrow={1}>
            <Grid container gap={3} rowGap={5} justifyContent={"space-between"}>
              {/*  Section UserWallet   */}
                <UserWallet title={"Wallet"}/>
              {/*  Section Main container   */}
              <Grid xs={12} lg={7.5} flexGrow={1}>
                  <Grid container direction={"column"} rowGap={5}>
                      <Grid>
                          <Paper elevation={0} sx={{p: 2, borderColor: "gray", borderWidth: 1, borderStyle: "solid"}}>
                              <Stack flexDirection={"row"} justifyContent={"space-between"} flexWrap={"wrap"} rowGap={3}>
                                  <Typography fontWeight={700} variant={"h5"} color={"primary"} mb={2} width={{sm: "60%"}}>Assets</Typography>
                                  <Button onClick={()=>push("/assets")} variant={"outlined"} size={"small"}>View all assets</Button>
                              <Typography maxWidth={{xs: "90%", sm: "70%", md: "55%"}} align={"center"} variant={"caption"} mx={"auto"} px={{sm: 5}}>
                                  We did not detect any existing assets.
                                  Additional information will display once wallet has funds.
                              </Typography>
                              </Stack>

                          </Paper>
                      </Grid>

                      <Grid>
                          <Paper elevation={0} sx={{p: 2, borderColor: "gray", borderWidth: 1, borderStyle: "solid", cursor: "default"}}>
                              <Typography fontWeight={700} variant={"h5"} color={"primary"} mb={2}>Governance</Typography>
                              <Typography variant={"h4"} fontWeight={300} align={"center"} py={2} color={"error"}>Coming soon !!!</Typography>
                          </Paper>
                      </Grid>

                      <Grid>
                          <Paper elevation={0} sx={{p: 2, borderColor: "gray", borderWidth: 1, borderStyle: "solid"}}>
                              <Stack flexDirection={"row"} justifyContent={"space-between"} flexWrap={"wrap"} rowGap={3}>
                              <Typography fontWeight={700} variant={"h5"} color={"primary"} mb={2} width={{sm: "60%"}}>Staking</Typography>
                              <Button onClick={()=>push("/stakes")} variant={"outlined"} size={"small"}>View staking</Button>
                              <Typography maxWidth={{xs: "90%", sm: "70%", md: "55%"}} align={"center"} variant={"caption"} mx={"auto"} px={{sm: 5}}>
                                  You currently do not have any staked BNB.<br/>
                                  You may view validators or see the staking guide.
                              </Typography>
                          </Stack>

                          </Paper>
                      </Grid>

                  </Grid>
              </Grid>

              {/*  ADVERTS  */}
              <Grid xs={12} lg={4}>
                  <Paper elevation={0} sx={{p: 2, borderColor: "gray", borderWidth: 1, borderStyle: "solid", height: 100}}>
                      <Typography fontWeight={700} variant={"h5"} color={"primary"} mb={2}>News and Feeds</Typography>

                      </Paper>
              </Grid>


            </Grid>
          </Grid>

        </Grid>

      </Container>
          <Sidebar open={state} action={setState}/>

      </>
  );
}

export default Staking;