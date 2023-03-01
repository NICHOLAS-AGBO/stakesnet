import React, {FC, useState} from "react";
import {
    Box,
    Container,
    IconButton, Paper,
    Stack, styled,
    Typography,
    Unstable_Grid2 as Grid,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import logo from "@static/img/logo.png";
import {Menu} from "@mui/icons-material";
import Sidebar, {FixedSidebar} from "@components/Sidebar";
import {Web3NetworkSwitch} from "@web3modal/react";


const Web3Network = styled(Web3NetworkSwitch)(({theme})=>({
    "&>w3m-button-big::part(button)":{
        backgroundColor: theme.palette.background.paper,
        border: "1px solid gray"
    }
}));

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

              <FixedSidebar/>

          </Grid>

          <Grid flexGrow={1} sx={{mt: {xs: 0, md: 3}}}>
            <Grid container gap={3} rowGap={5}>
              {/*  Section Wallet   */}
              <Grid xs={12}>
                  <Stack flexDirection={"row"} alignItems={"baseline"} justifyContent={"space-between"} py={2}>
                      <Typography fontWeight={700} variant={"h5"} color={"primary"} mb={2}>Wallet</Typography>
                      <Web3Network/>
                  </Stack>
                 <Paper elevation={0} sx={{p: 2, borderColor: "gray", borderWidth: 1, borderStyle: "solid",}}>
                     <Grid container justifyContent={"space-between"} alignItems={"center"} wrap={"wrap"}>
                         <Grid>
                             <Typography variant={"h6"} fontWeight={700}>Total</Typography>
                             <Typography>$0</Typography>
                         </Grid>
                     </Grid>

                 </Paper>
              </Grid>
              {/*  Section Main container   */}
              <Grid xs={12} lg={7.5} flexGrow={1}>
                  <Grid container direction={"column"} rowGap={5}>
                      <Grid>
                          <Typography fontWeight={700} variant={"h5"} color={"primary"} mb={2}>Assets</Typography>
                          <Paper elevation={0} sx={{p: 2, borderColor: "gray", borderWidth: 1, borderStyle: "solid", height: 100}}>

                          </Paper>
                      </Grid>

                      <Grid>
                          <Typography fontWeight={700} variant={"h5"} color={"primary"} mb={2}>Governance</Typography>
                          <Paper elevation={0} sx={{p: 2, borderColor: "gray", borderWidth: 1, borderStyle: "solid", height: 100}}>

                          </Paper>
                      </Grid>

                      <Grid>
                          <Typography fontWeight={700} variant={"h5"} color={"primary"} mb={2}>Staking</Typography>
                          <Paper elevation={0} sx={{p: 2, borderColor: "gray", borderWidth: 1, borderStyle: "solid", height: 100}}>

                          </Paper>
                      </Grid>

                  </Grid>
              </Grid>

              {/*  ADVERTS  */}
              <Grid xs={12} lg={4}>
                  <Typography fontWeight={700} variant={"h5"} color={"primary"} mb={2}>News and Feeds</Typography>
                  <Paper elevation={0} sx={{p: 2, borderColor: "gray", borderWidth: 1, borderStyle: "solid", height: 100}}>

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