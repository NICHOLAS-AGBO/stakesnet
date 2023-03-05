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
import {useRouter} from "next/router";
import {ArrowBack} from "@mui/icons-material";
import {useAssets} from "@hooks/useAssets";
import UserWallet from "@components/UserWallet";


const Assets:FC = () => {
    const {back} = useRouter();
    const {data, loading, error} = useAssets();
    console.log(data)
    return(<>
        <Container maxWidth={"lg"} sx={{py: 3}}>
            <Button onClick={()=>back()} startIcon={<ArrowBack/>} disableRipple
                    sx={{"&:hover":{backgroundColor: "transparent", px: 0}}}>
                Back to dashboard
            </Button>

            <Grid container gap={3} rowGap={5}>
                {/*  Section UserWallet   */}
                <UserWallet title={"Assets"}/>
                {/*  Section Main container   */}
                <Grid xs={12}>
                    <Grid container direction={"column"} rowGap={5}>
                        <Grid>
                            <Stack flexDirection={"row"} flexWrap={"wrap"} gap={4} rowGap={3}>
                            <Typography variant={"subtitle1"} fontWeight={300} color={"primary"} mb={2} ml={2}>Asset</Typography>
                            <Typography variant={"subtitle1"} fontWeight={300} color={"primary"} mb={2} width={{sm: "25%"}}
                                        sx={{display: {xs: "none", sm: "block"}}}>Name</Typography>
                            <Typography variant={"subtitle1"} fontWeight={300} color={"primary"} mb={2} width={{md: "25%"}}
                                        sx={{display: {xs: "none", md: "block"}}}>Price</Typography>
                            <Typography variant={"subtitle1"} fontWeight={300} color={"primary"} mb={2}>Balance</Typography>
                        </Stack>
                            <Paper elevation={0} sx={{
                                "&::-webkit-scrollbar":{
                                    display: "none"
                                },
                                maxHeight: 500,
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
                                        <Stack flexDirection={"column"} justifyContent={"center"} alignItems={"center"} rowGap={4} flexWrap={"wrap"}>
                                            <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
                                            <Skeleton variant={"circular"} sx={{width: 30, height: 30}}></Skeleton>
                                            <Skeleton variant={"rectangular"} sx={{flexGrow: 1}} width={"25%"}></Skeleton>
                                            <Skeleton variant={"rectangular"} sx={{flexGrow: 1}} width={"25%"}></Skeleton>
                                            <Skeleton variant={"rectangular"} sx={{flexGrow: 1}} width={"25%"}></Skeleton>
                                            </Stack>
                                            <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
                                            <Skeleton variant={"circular"} sx={{width: 30, height: 30}}></Skeleton>
                                            <Skeleton variant={"rectangular"} sx={{flexGrow: 1}} width={"25%"}></Skeleton>
                                            <Skeleton variant={"rectangular"} sx={{flexGrow: 1}} width={"25%"}></Skeleton>
                                            <Skeleton variant={"rectangular"} sx={{flexGrow: 1}} width={"25%"}></Skeleton>
                                            </Stack>
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
                                                                <Typography sx={{display: {xs: "none", sm: "block"}}} width={{sm: "25%"}}
                                                                            variant={"subtitle1"}>{asset.name+` (${asset.symbol})`}</Typography>
                                                                <Typography sx={{display: {xs: "none", md: "block"}}}
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