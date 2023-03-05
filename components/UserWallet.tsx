import {Paper, Stack, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import {Web3NetworkSwitch} from "@web3modal/react";
import React, {FC} from "react";
import {useAssets} from "@hooks/useAssets";
import {useAccount, useBalance} from "wagmi";

const UserWallet:FC<{title:string}> = ({title})=>{
    const {data, loading} = useAssets();
    const {address,isConnected} = useAccount();
    const bal = useBalance({address: address, formatUnits: 'gwei', watch: true,});
    const tokenPrice = data?.filter((a)=>a.symbol===bal.data?.symbol.toLowerCase());

    return <Grid xs={12}>
        <Stack flexDirection={"row"} alignItems={"baseline"} justifyContent={"space-between"} py={2}>
            <Typography fontWeight={700} variant={"h5"} color={"primary"} mb={2}>{title}</Typography>
            <Web3NetworkSwitch/>
        </Stack>
        <Paper elevation={0} sx={{p: 2, borderColor: "gray", borderWidth: 1, borderStyle: "solid",}}>
            <Grid container justifyContent={"space-between"} alignItems={"center"} wrap={"wrap"}>
                <Grid>
                    <Typography variant={"subtitle2"} fontWeight={300} mb={1}>Total assets</Typography>
                    <Typography variant={"h6"} fontWeight={700}>$0</Typography>
                </Grid>
                <Grid sx={{display: {xs: "none", sm: "block"}}}>
                    <Typography variant={"subtitle2"} fontWeight={300} mb={1}>Total {isConnected?<>{bal.data?.symbol}</>:<>BNB</>}</Typography>
                    <Typography variant={"h6"} fontWeight={700}>{isConnected?<>{bal.data?.value+" "+bal.data?.symbol}</>:<>0 BNB</>}</Typography>
                </Grid>
                <Grid>
                    <Typography variant={"subtitle2"} fontWeight={300} mb={1}>Total staked</Typography>
                    <Typography variant={"h6"} fontWeight={700}>0.00 {isConnected?<>{bal.data?.symbol}</>:<>BNB</>}</Typography>
                </Grid>
                <Grid sx={{display: {xs: "none", md: "block"}}}>
                    <Typography variant={"subtitle2"} fontWeight={300} mb={1}>Total rewards received</Typography>
                    <Typography variant={"h6"} fontWeight={700}>0.00 {isConnected?<>{bal.data?.symbol}</>:<>BNB</>}</Typography>
                </Grid>
                <Grid sx={{display: {xs: "none", md: "block"}}}>
                    <Typography variant={"subtitle2"} fontWeight={300} mb={1}>{isConnected?<>{bal.data?.symbol}</>:<>BNB</>} price</Typography>
                    <Typography variant={"h6"} fontWeight={700}>
                        {
                            (tokenPrice&&(tokenPrice.length>0)&&!loading)?
                                <>${tokenPrice[0].current_price}</>
                                :<>$0</>
                        }
                    </Typography>
                </Grid>
            </Grid>

        </Paper>
    </Grid>
}

export default UserWallet;