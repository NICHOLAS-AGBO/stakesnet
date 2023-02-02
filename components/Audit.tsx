import React, {FC} from "react";
import {Button, Divider, FormControl, Stack, TextField, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import {Send, UploadFile} from "@mui/icons-material";
import Link from "next/link";


const Audit:FC = () => (
    <Stack component={"section"} rowGap={5} alignItems={"center"}>
        <Divider variant={"middle"}
                 sx={{width: "80%", borderWidth: 3}}>
            <Typography color={"primary"} sx={{fontSize: {xs: "h5.fontSize", sm: "h4.fontSize"}}} fontWeight={"bold"}>
                Smart Contract Audit
            </Typography>
        </Divider>
    <Grid container justifyContent={"space-between"} rowGap={5}>
        <Grid xs={12} md={5.5}>
            <Typography color={"primary"} sx={{textAlign: {xs: "center", md: "left"}}}>
                We provide affordable yet intensive smart contract audits.
                Our team of experienced solidity smart contract auditors performs audits for tokens, NFTs,
                crowdsales, marketplaces, gambling games, financial protocols, and more! We leverage a combination of static analysis, automated tools,
                and a robust manual review process to provide industry-leading security recommendations to project teams.
                &nbsp; <Link href={"#"} style={{color: "blue", textDecoration: "underline"}}>
                    View audits
                </Link>
            </Typography>
        </Grid>
        <Grid xs={12} md={6} flexGrow={1}>
<FormControl fullWidth variant={"filled"} sx={{rowGap: 2}}>
    <TextField id={"name"} type={"text"} label={'Full name'}/>
    <TextField id={"email"} type={"email"} label={"Email address"}/>
    <Button variant={"outlined"} htmlFor={"file"} component={"label"} color={"error"} startIcon={<UploadFile/>}>
        Attach document
        <input hidden type={"file"} id={"file"} name={"attachment"}/>
    </Button>
    <Button variant={"contained"} disableElevation sx={{
        backgroundColor: "rgb(71,161,255)",
        color: "common.white",
        "&:focus,&:hover":{
            backgroundColor: "rgb(63,141,223)",
            color: "common.white"
        }
    }} fullWidth size={"large"} startIcon={<Send/>}>
        Submit
    </Button>

</FormControl>
        </Grid>
    </Grid>

    </Stack>
);

export default Audit;