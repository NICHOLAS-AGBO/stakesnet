import React, {useState} from "react";
import {
    Avatar,
    Button,
    Collapse,
    Container,
    Divider,
    Paper,
    Stack,
    Typography,
    Unstable_Grid2 as Grid
} from "@mui/material";
import {blue, red} from "@mui/material/colors";
import {Roboto} from "@next/font/google";
import {ExpandMore} from "@mui/icons-material";
import NFT_1 from "@static/img/22739716_NFT_4.png";
import Image from "next/image";
import {useSpring, animated, easings} from "@react-spring/web";
// @ts-ignore
import Fade from "react-reveal/Fade";
// @ts-ignore
import Flip from "react-reveal/Flip";

const Rb = Roboto({weight: "300", subsets: ["latin"], preload: true, fallback: ["Helvetica","Arial",'sans-serif']});

const Home:React.FC = () => {
    const [state, setState] = useState<string|null>(null);
    const props = useSpring({from:{x: 10, y: -10, z: -10}, to:{x: 10, y: 10, z: 10}, loop: true, config:{easing: easings.easeInBounce, duration: 5000}});
    return(
      <>
<Container maxWidth={"md"}>

    <Stack rowGap={20} justifyContent={"center"} pb={10} pt={{xs: 5, sm: 2}}>

        {/*    Section Main*/}
        <Stack component={"main"}
               justifyContent={"center"}
               alignItems={"center"}
               sx={{minHeight: "90vh"}}>

            <Grid container rowGap={5} justifyContent={"space-between"} width={"100%"}>
                <Grid xs={12} md={6.5}>
                    <Stack rowGap={5} justifyContent={{xs: "center", md: "flex-start"}}>
                        <Typography variant={"h1"} fontSize={{xs: "3rem", md: "h3.fontSize"}} fontWeight={900} color={"primary"}>
                            Stake with a low amount and
                            earn more.
                        </Typography>
                        <Fade left>
                            <Typography color={"GrayText"}>
                                All registered members are given equivocal opportunity to stake all
                                cryptocurrencies including Bitcoin, Altcoin, Shitcoin, Pi and Sweatcoin.
                                StakerNet is easy-to-access and a requires to extra task to receive APY.
                            </Typography>
                        </Fade>
                        <Flip bottom>
                            <Button variant={"contained"} fullWidth
                                    disableElevation sx={{
                                outlineColor: blue[500],
                                outlineStyle: "solid",
                                outlineWidth: 2,
                                outlineOffset: 4,
                                py: 2, fontSize: "h6.fontSize",
                                color: "common.white",
                                boxShadow: ({palette})=>palette.mode==="dark"?`0px 0px 15px 10px ${blue[900]}`:0,
                                backgroundImage:`linear-gradient(80deg, black 0%, ${blue[500]} 50%, ${red[500]} 100%)`
                            }}>
                                Stake Now !!
                            </Button>
                        </Flip>
                    </Stack>

                </Grid>
                <Grid xs={12} md={5.5} sx={{
                    background: ({palette})=>palette.mode==="dark"?{
                        xs:`radial-gradient(circle closest-corner at 65% 40%, transparent, transparent, ${red[800]} 35%, transparent, transparent),
                    radial-gradient(circle closest-corner at 48% 60%,transparent, transparent, ${blue[800]} 35%,transparent, transparent)`,
                        sm: `radial-gradient(circle closest-corner at 55% 45%, transparent, transparent, ${red[800]} 20%, transparent, transparent),
                    radial-gradient(circle closest-corner at 48% 50%,transparent, transparent, ${blue[800]} 10%,transparent, transparent)`,
                        md: `radial-gradient(circle closest-corner at 60% 30%, transparent, transparent, ${red[800]} 35%, transparent, transparent),
                    radial-gradient(circle closest-corner at 48% 60%,transparent, transparent, ${blue[800]} 15%,transparent, transparent)`
                        }
                        :
                        "transparent",
                    backgroundPosition: "center",
                }}>
                    <animated.div style={props}>
                    <Image style={{margin: "0 auto", display: "block"}} src={NFT_1} alt={"image from freepik.com"} placeholder={"blur"} priority />
                    </animated.div>
                </Grid>
            </Grid>
        </Stack>

        {/*Section AboutUs*/}
        <Stack component={"section"} rowGap={5} alignItems={"center"}>
            <Divider variant={"middle"}
                     sx={{width: "80%", borderWidth: 3}}>
                <Typography color={"primary"} sx={{fontSize: {xs: "h5.fontSize", sm: "h4.fontSize"}}} fontWeight={"bold"}>About STAKERSNET</Typography>
            </Divider>
                <Grid container justifyContent={"space-between"}>
                    <Grid xs={12} sm={8}>
                        <Typography color={"GrayText"}>
                            StakersNet is a decentralized staking platform that provides earning rewards for holders for holding specific cryptocurrencies and fiat currencies based in UK.
                            We employ the Proof-of-Stake protocols; a class of consensus mechanisms for blockchains that work by selecting validators in proportion to their quantity of holdings in the associated cryptocurrency.
                            In StakersNet, holders are referred to as STAKERS whereas their earnings are referred to as Annual Percentage Yield (APY).
                            Annual Percentage Yield (APY) is a normalized representation of an interest rate, based on a compounding period of one year. Maximum Annual Percentage Yield of all staking is a nominal percentage of 0.05 unit per three (3) days earning with monthly percentage yield of 0.5 unit of the number of tokens staked.
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={4} sx={{overflow: "hidden"}} height={{xs: 400, sm: "auto", position: "relative"}}>
                        <Typography fontWeight={900}
                                    aria-disabled={true}
                                    sx={{
                                        pointerEvents: "none",
                                        userSelect: "none",
                                        fontSize: "15rem",
                                        position: "absolute",
                                        color: "primary",
                                        top: -100, transform: "rotate(-35deg)", left: -10,
                                        textShadow: ({palette})=>palette.mode==="dark"?`0px 0px 15px ${blue[500]}`:"0px 0px 5px rgba(0,0,0,.25)"
                        }}>
                            STA
                        </Typography>
                    </Grid>
                </Grid>

        </Stack>

        {/*Section FAQs*/}
        <Stack component={"section"} rowGap={5} alignItems={"center"}>
            <Divider variant={"middle"}
                     sx={{width: "80%", borderWidth: 3}}>
                <Typography color={"primary"} sx={{fontSize: {xs: "h5.fontSize", sm: "h4.fontSize"}}} fontWeight={"bold"}>
                    FAQs
                </Typography>
            </Divider>
                <Grid container width={"100%"} rowGap={1}>
                    <Grid xs={12}>
                        <Button size={"large"} onClick={()=>{setState(state?null:"_a")}} fullWidth
                                variant={"outlined"}
                                className={Rb.className}
                                endIcon={<ExpandMore fontSize={"large"}/>}
                                sx={{textTransform: "none", justifyContent: "space-between", fontSize: {xs: "body1.fontSize", md: "h5.fontSize"}, textAlign: "left"}}>
                            Who is eligible to stake?
                        </Button>
                        <Collapse in={state==="_a"}>
                            <Paper sx={{p: 2.5, borderRadius: 0}} elevation={0}>
                                <Typography color={"primary"} variant={"body1"}>
                                    All registered members are given equivocal opportunity to stake all cryptocurrencies including Bitcoin,
                                    Altcoin, Shitcoin, Pi and Sweatcoin.
                                    StakerNet is easy-to-access and a requires to extra task to receive APY.
                                </Typography>
                            </Paper>
                        </Collapse>
                    </Grid>
                    <Grid xs={12}>
                        <Button size={"large"} onClick={()=>{setState(state?null:"_b")}} fullWidth
                                variant={"outlined"}
                                className={Rb.className}
                                endIcon={<ExpandMore fontSize={"large"}/>}
                                sx={{textTransform: "none", justifyContent: "space-between", fontSize: {xs: "body1.fontSize", md: "h5.fontSize"}, textAlign: "left"}}>
                            How to Stake?
                        </Button>
                        <Collapse in={state==="_b"}>
                            <Paper sx={{p: 2.5, borderRadius: 0}} elevation={0}>
                                <Typography color={"primary"} variant={"body1"} sx={{"&> b":{fontWeight: 500}}}>
                                    <b>STAKERS</b> are allowed to deposit a minimum of $20 (worth of cryptocurrency). Once registered click the Stake button,
                                    select token or <b>token network (Binance Smart Chain, Ethereum Smart Chain etc.) if cryptocurrency is not specified</b>.
                                    Then check token APY before you click stake;
                                    as APY is the same for all cryptocurrencies/tokens. Once successful you will receive a message validating your transaction.
                                </Typography>
                            </Paper>
                        </Collapse>
                    </Grid>
                    <Grid xs={12}>
                        <Button size={"large"} onClick={()=>{setState(state?null:"_c")}} fullWidth
                                variant={"outlined"}
                                className={Rb.className}
                                endIcon={<ExpandMore fontSize={"large"}/>}
                                sx={{textTransform: "none", justifyContent: "space-between", fontSize: {xs: "body1.fontSize", md: "h5.fontSize"}, textAlign: "left"}}>
                            How Do I Calculate my Annual Percentage Yield?
                        </Button>
                        <Collapse in={state==="_c"}>
                            <Paper sx={{p: 2.5, borderRadius: 0}} elevation={0}>
                                <Stack rowGap={2} sx={{"&>*":{fontSize:"body1.fontSize", color: "primary.main"}, "&>* b":{fontWeight: 500}}}>
                                    <Typography>
                                        Every token has a specific APY as they differ with regards to
                                        valuation and validators. For instance, if I stake a $100 USD BNB then;
                                    </Typography>
                                    <Typography>
                                        $100 USD (BNB) in 72 hours/3 days = $100 USD (BNB) X 0.05 (APY) = $5 USD (BNB)
                                    </Typography>
                                    <Typography>Therefore, $100 USD in 720 hours/30 days = $100 USD (BNB) X 0.5 = $50 USD (BNB)</Typography>
                                    <Typography>PS: This is applicable for ALL other cryptocurrencies; Bitcoin, BNB, Ethereum, Doge, Shiba Inu, Pi Network, Sweat Coin, etc.</Typography>
                                </Stack>
                            </Paper>
                        </Collapse>
                    </Grid>
                    <Grid xs={12}>
                        <Button size={"large"} onClick={()=>{setState(state?null:"_d")}} fullWidth
                                variant={"outlined"}
                                className={Rb.className}
                                endIcon={<ExpandMore fontSize={"large"}/>}
                                sx={{textTransform: "none", justifyContent: "space-between", fontSize: {xs: "body1.fontSize", md: "h5.fontSize"}, textAlign: "left"}}>
                            When Can I withdraw my Earnings?
                        </Button>
                        <Collapse in={state==="_d"}>
                            <Paper sx={{p: 2.5, borderRadius: 0}} elevation={0}>
                                <Stack rowGap={2} sx={{"&>*":{fontSize:"body1.fontSize", color: "primary.main"}, "&>* b":{fontWeight: 500}}}>
                                    <Typography><b>STAKERS</b> earnings will be available for withdrawal exactly 72 hours after staking.
                                        They are allowed to withdraw only earnings for the from 72 hours after staking
                                        but can withdraw both profit and staked amount after 720 hours of staking.
                                    </Typography>
                                    <Typography>
                                        PS: You are eligible to <b>‘cancel staking’</b> all staking during the period of your staking however
                                        you’ll be charged a non-refundable service charge of 20% of your staking applies.
                                    </Typography>
                                </Stack>
                            </Paper>
                        </Collapse>
                    </Grid>
                    <Grid xs={12}>
                        <Button size={"large"} onClick={()=>{setState(state?null:"_e")}} fullWidth
                                variant={"outlined"}
                                className={Rb.className}
                                endIcon={<ExpandMore fontSize={"large"}/>}
                                sx={{textTransform: "none", justifyContent: "space-between", fontSize: {xs: "body1.fontSize", md: "h5.fontSize"}, textAlign: "left"}}>
                            How to withdraw?
                        </Button>
                        <Collapse in={state==="_e"}>
                            <Paper sx={{p: 2.5, borderRadius: 0}} elevation={0}>
                                <Typography color={"primary"} variant={"body1"}>
                                    Click the withdraw button and proceed with the withdrawal action you want to perform.
                                    Your withdrawal is automated but deposit may take a maximum of 24 hours to reflect in your wallet.
                                </Typography>
                            </Paper>
                        </Collapse>
                    </Grid>
                    <Grid xs={12}>
                        <Button size={"large"} onClick={()=>{setState(state?null:"_f")}} fullWidth
                                variant={"outlined"}
                                className={Rb.className}
                                endIcon={<ExpandMore fontSize={"large"}/>}
                                sx={{textTransform: "none", justifyContent: "space-between", fontSize: {xs: "body1.fontSize", md: "h5.fontSize"}, textAlign: "left"}}>
                            Do StakersNet have a wallet for STAKERS in the website?
                        </Button>
                        <Collapse in={state==="_f"}>
                            <Paper sx={{p: 2.5, borderRadius: 0}} elevation={0}>
                                <Typography color={"primary"} variant={"body1"} sx={{"&> b":{fontWeight: 500}}}>
                                    No. <b>STAKERS</b> are to provided their respective wallet address during the withdrawal process.
                                    All staking is made in a deposit to unique wallet address(es) provided by StakerNet.
                                    Please contact any of StakerNet Regional Ambassador for proper confirmation.
                                </Typography>
                            </Paper>
                        </Collapse>
                    </Grid>
                    <Grid xs={12}>
                        <Button size={"large"} onClick={()=>{setState(state?null:"_g")}} fullWidth
                                variant={"outlined"}
                                className={Rb.className}
                                endIcon={<ExpandMore fontSize={"large"}/>}
                                sx={{textTransform: "none", justifyContent: "space-between", fontSize: {xs: "body1.fontSize", md: "h5.fontSize"}, textAlign: "left"}}>
                            Can I stake with fiat or my country currency?
                        </Button>
                        <Collapse in={state==="_g"}>
                            <Paper sx={{p: 2.5, borderRadius: 0}} elevation={0}>
                                <Typography color={"primary"} variant={"body1"} sx={{"&>b":{fontWeight: 500}}}>
                                    Yes. <b>STAKERS</b> can stake with all fiat currencies and we provide all other payment systems.
                                    For any challenge, please contact your regional ambassador or click the contact us button.
                                </Typography>
                            </Paper>
                        </Collapse>
                    </Grid>


                </Grid>

        </Stack>

    </Stack>


</Container>
      </>
  );
}

export default Home;