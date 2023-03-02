import React, {FC} from "react";
import {Button, Container, Paper, Stack, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import {Web3NetworkSwitch} from "@web3modal/react";
import {useRouter} from "next/router";
import {ArrowBack} from "@mui/icons-material";
import {useToken} from "wagmi";


const Assets:FC = () => {
    const {push} = useRouter();
    // const {data} = useToken();

    return(<>
        <Container maxWidth={"lg"} sx={{py: 3}}>
            <Button onClick={()=>history.back()} startIcon={<ArrowBack/>} disableRipple sx={{"&:hover":{backgroundColor: "transparent", px: 0}}}>
                Back to dashboard
            </Button>

            <Grid container gap={3} rowGap={5}>
                {/*  Section Wallet   */}
                <Grid xs={12}>
                    <Stack flexDirection={"row"} alignItems={"baseline"} justifyContent={"space-between"} py={2}>
                        <Typography fontWeight={700} variant={"h5"} color={"primary"} mb={2}>Assets</Typography>
                        <Web3NetworkSwitch/>
                    </Stack>
                    <Paper elevation={0} sx={{p: 2, borderColor: "gray", borderWidth: 1, borderStyle: "solid",}}>
                        <Grid container justifyContent={"space-between"} alignItems={"center"} wrap={"wrap"}>
                            <Grid>
                                <Typography variant={"subtitle2"} fontWeight={300}>Total assets</Typography>
                                <Typography variant={"h6"} fontWeight={700}>$0</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant={"subtitle2"} fontWeight={300}>Total BNB</Typography>
                                <Typography variant={"h6"} fontWeight={700}>0.00 BNB</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant={"subtitle2"} fontWeight={300}>Total staked</Typography>
                                <Typography variant={"h6"} fontWeight={700}>0.00 BNB</Typography>
                            </Grid>
                            <Grid sx={{display: {xs: "none", md: "block"}}}>
                                <Typography variant={"subtitle2"} fontWeight={300}>Total rewards received</Typography>
                                <Typography variant={"h6"} fontWeight={700}>0.00 BNB</Typography>
                            </Grid>
                            <Grid sx={{display: {xs: "none", md: "block"}}}>
                                <Typography variant={"subtitle2"} fontWeight={300}>BNB price</Typography>
                                <Typography variant={"h6"} fontWeight={700}>$0</Typography>
                            </Grid>
                        </Grid>

                    </Paper>
                </Grid>
                {/*  Section Main container   */}
                <Grid xs={12}>
                    <Grid container direction={"column"} rowGap={5}>
                        <Grid>
                            <Stack flexDirection={"row"} justifyContent={"space-between"} flexWrap={"wrap"} rowGap={3}>
                                <Typography variant={"h6"} color={"primary"} mb={2} width={"50%"}>Asset</Typography>
                                <Typography variant={"h6"} color={"primary"} mb={2} width={"50%"}>Balance</Typography>
                            </Stack>
                            <Paper elevation={0} sx={{p: 2, borderColor: "gray", borderWidth: 1, borderStyle: "solid"}}>


                            </Paper>
                        </Grid>



                    </Grid>
                </Grid>



            </Grid>


        </Container>
    </>);
}

export default Assets;