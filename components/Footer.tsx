import {FC, useEffect, useState} from "react";
import {AppBar, Fab, Toolbar, Tooltip, Typography, Zoom} from "@mui/material";
import {ExpandLessTwoTone} from "@mui/icons-material";

const Footer:FC = () => {
    const [appear, setAppear] = useState(false);

    //SCROLL TO TOP FUNCTION
    const moveToTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
    useEffect(() => {
        const moveUp = ()=>{
            if (window.scrollY>1200){
                setAppear(true)
            }else {
                setAppear(false);
            }
        }
        window.addEventListener("scroll",moveUp);
        return ()=> window.removeEventListener("scroll",moveUp);

    });

  return(
      <>
      <AppBar variant={"outlined"} position={"static"} component={"footer"}
              sx={{backgroundColor: "transparent"}}>
          <Toolbar sx={{justifyContent: "center", color: "primary.main"}}>
              <Typography variant={"caption"} color={"GrayText"}>
                  STAKERSNET.COM &copy; {(new Date()).getFullYear()}. All rights reserved.
              </Typography>
          </Toolbar>
      </AppBar>
          {/*SCROLL TO TOP BUTTON*/}
          <Zoom in={appear} mountOnEnter unmountOnExit>
              <Tooltip title={"Move up"} placement={"top"}>
                  <Fab size={"small"} sx={[{
                      "&:hover":{
                          backgroundColor: "secondary.main",
                          color: "primary.main"
                      },
                      backgroundColor: "primary.main",
                      color: "secondary.main",
                      position: "fixed",
                      zIndex: 1000,
                      bottom: {xs: 105, sm: 86},
                      right: 20,
                      p: 0.1,
                  }]} onClick={moveToTop} aria-label="top">
                      <ExpandLessTwoTone color="inherit"/>
                  </Fab>
              </Tooltip>
          </Zoom>
      </>
  );
}

export default Footer;