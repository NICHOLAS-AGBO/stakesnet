import React, {FC} from "react";
import {Box, Container, IconButton, Paper, Stack, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import logo from "@static/img/logo.png";
import {Menu} from "@mui/icons-material";

const Staking:FC = () => {
  return(
      <>
      <Container maxWidth={false} sx={{py: 5}}>
        <Grid container gap={3} minHeight={"90vh"}>
          <Grid xs={12} md={2.5} sx={{overflow: "hidden"}}>
              <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
                  <Box sx={{width: "max-content", p: .25, backgroundColor: "rgb(51,150,255)", color: "common.white", borderRadius: 2.5}}>
                      <IconButton color={"inherit"}><Menu color={"inherit"}/></IconButton>
                  </Box>
                  <Typography variant={"h5"} color={"primary"}>
                      <Link href={"/"}>
                          <Image style={{verticalAlign: "middle"}} src={logo} alt={"stakersnet logo"} priority width={30} height={30}/>&nbsp;
                          Stakersnet
                      </Link>
                  </Typography>
              </Stack>
          </Grid>

          <Grid flexGrow={1}>
            <Grid container gap={3} rowGap={5}>
              {/*  WALLET   */}
              <Grid xs={12}>
                  <Typography fontWeight={700} variant={"h5"} color={"primary"} mb={2}>Wallet</Typography>
                 <Paper elevation={0} sx={{borderColor: "gray", borderWidth: 1, borderStyle: "solid", height: 100}}>

                 </Paper>
              </Grid>
              {/*  MAIN CONTAINER   */}
              <Grid xs={12} md={7.5} flexGrow={1}>
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
              <Grid xs={12} md={4}>
                  <Typography fontWeight={700} variant={"h5"} color={"primary"} mb={2}>News and Feeds</Typography>
                  <Paper elevation={0} sx={{borderColor: "gray", borderWidth: 1, borderStyle: "solid", height: 100}}>

                      </Paper>
              </Grid>


            </Grid>



          </Grid>

        </Grid>

      </Container>


      </>
  );
}

export default Staking;