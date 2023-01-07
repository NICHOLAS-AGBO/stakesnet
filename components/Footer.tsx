import {FC} from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";

const Footer:FC = () => {
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
      </>
  );
}

export default Footer;