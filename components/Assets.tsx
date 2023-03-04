import React, {FC, Fragment} from "react";
import {
    Avatar,
    Button,
    Container,
    Divider,
    Paper,
    Skeleton,
    Stack,
    Typography,
    Unstable_Grid2 as Grid
} from "@mui/material";
import {Web3NetworkSwitch} from "@web3modal/react";
import {useRouter} from "next/router";
import {ArrowBack} from "@mui/icons-material";
import {useAssets} from "@hooks/useAssets";


const Assets:FC = () => {
    const {push} = useRouter();
    const {data, loading, error} = useAssets();
    console.log(data)
    return(<>
        <Container maxWidth={"lg"} sx={{py: 3}}>
            <Button onClick={()=>history.back()} startIcon={<ArrowBack/>} disableRipple
                    sx={{"&:hover":{backgroundColor: "transparent", px: 0}}}>
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
                                <Typography variant={"subtitle2"} fontWeight={300} mb={1}>Total assets</Typography>
                                <Typography variant={"h6"} fontWeight={700}>$0</Typography>
                            </Grid>
                            <Grid sx={{display: {xs: "none", sm: "block"}}}>
                                <Typography variant={"subtitle2"} fontWeight={300} mb={1}>Total BNB</Typography>
                                <Typography variant={"h6"} fontWeight={700}>0.00 BNB</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant={"subtitle2"} fontWeight={300} mb={1}>Total staked</Typography>
                                <Typography variant={"h6"} fontWeight={700}>0.00 BNB</Typography>
                            </Grid>
                            <Grid sx={{display: {xs: "none", md: "block"}}}>
                                <Typography variant={"subtitle2"} fontWeight={300} mb={1}>Total rewards received</Typography>
                                <Typography variant={"h6"} fontWeight={700}>0.00 BNB</Typography>
                            </Grid>
                            <Grid sx={{display: {xs: "none", md: "block"}}}>
                                <Typography variant={"subtitle2"} fontWeight={300} mb={1}>BNB price</Typography>
                                <Typography variant={"h6"} fontWeight={700}>$0</Typography>
                            </Grid>
                        </Grid>

                    </Paper>
                </Grid>
                {/*  Section Main container   */}
                <Grid xs={12}>
                    <Grid container direction={"column"} rowGap={5}>
                        <Grid>
                            <Stack flexDirection={"row"} flexWrap={"wrap"} gap={4} rowGap={3}>
                            <Typography variant={"subtitle1"} fontWeight={300} color={"primary"} mb={2} ml={2}>Asset</Typography>
                            <Typography variant={"subtitle1"} fontWeight={300} color={"primary"} mb={2} width={{md: "25%"}}
                                        sx={{display: {xs: "none", sm: "block"}}}>Name</Typography>
                            <Typography variant={"subtitle1"} fontWeight={300} color={"primary"} mb={2} width={{md: "25%"}}
                                        sx={{display: {xs: "none", sm: "block"}}}>Price</Typography>
                            <Typography variant={"subtitle1"} fontWeight={300} color={"primary"} mb={2}>Balance</Typography>
                        </Stack>
                            <Paper elevation={0} sx={{
                                "&::-webkit-scrollbar":{
                                    display: "none"
                                },
                                maxHeight: {xs: 300, md: 500},
                                p: 2,
                                overflowY: "auto",
                                msOverflowStyle: "none",
                                scrollbarWidth: "none",
                                scrollBehavior: "smooth",
                                borderColor: "gray",
                                borderWidth: 1,
                                borderStyle: "solid"}}>

                                {
                                    loading?
                                        <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} gap={2} flexWrap={"wrap"}>
                                            <Skeleton variant={"circular"} sx={{width: 30, height: 30}}></Skeleton>
                                            <Skeleton variant={"rectangular"} sx={{flexGrow: 1}} width={"70%"}></Skeleton>
                                            <Skeleton variant={"circular"} sx={{width: 30, height: 30}}></Skeleton>
                                            <Skeleton variant={"rectangular"} sx={{flexGrow: 1}} width={"70%"}></Skeleton>
                                        </Stack>:
                                        error?
                                            <Typography color={"error"} variant={"h5"}
                                                        fontWeight={350} align={"center"}>
                                                Failed to load assets</Typography>
                                            :<Stack rowGap={4} py={3}>
                                                {
                                                    data.map((asset,id)=>(
                                                        <Fragment key={id}>
                                                            <Stack flexDirection={"row"} alignItems={"center"} gap={5} width={"100%"}>
                                                                <Avatar src={asset.image} alt={asset.name+" logo"}
                                                                        sx={{width: 30, height: 30, backgroundColor: "common.white"}}/>
                                                                <Typography sx={{display: {xs: "none", sm: "block"}}} width={{md: "25%"}}
                                                                            variant={"subtitle1"}>{asset.name+`(${asset.symbol})`}</Typography>
                                                                <Typography sx={{display: {xs: "none", sm: "block"}}}
                                                                            variant={"subtitle1"} width={{md: "25%"}}>{"$ "+asset.current_price}
                                                                </Typography>
                                                                <Typography variant={"subtitle1"} flexGrow={1}>$ 0.00</Typography>
                                                                <Button disableElevation variant={"contained"}
                                                                        disableFocusRipple>Buy token</Button>
                                                            </Stack>
                                                            <Divider sx={{width: "100%"}}/>
                                                        </Fragment>

                                                    ))
                                                }
                                            </Stack>

                                }

                            </Paper>
                        </Grid>



                    </Grid>
                </Grid>



            </Grid>


        </Container>
    </>);
}

export default Assets;