import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Grid, Typography, Container } from "@material-ui/core";
import background from "../../assets/images/background/background-h2.png";
import handShake from "../../assets/images/icons/handShake.png";
import customerLove from "../../assets/images/icons/customerLove.png";
import earth from "../../assets/images/icons/earth.png";
import doctor from "../../assets/images/icons/doctor.png";
import waveLine2 from "../../assets/images/background/waveLine2.png";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleImg: {
      position: "absolute",
      width: "100%",
      left: "0",
      zIndex: -10,
      [theme.breakpoints.down("sm")]: {
          display: "none"
      }
    },
    styleBox: {
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: "700px",
      [theme.breakpoints.down("sm")]: {
        minHeight: "900px"
      }
    },
    styleContainer: {
        padding: "290px 100px",
        margin: "0px auto",
      },
      styleWave: {
        position: "absolute",
        right: "0",
        zIndex: -10
      }
  })
);
const ChoosingUs = () => {
  const classes = useStyles();
  return (
    <Box mt={16} className={classes.styleBox}>
      {/* <img src={background} alt="" className={classes.styleImg} /> */}
      <Container className={classes.styleContainer}>
        <Grid container justifyContent="center" alignItems="center" spacing={5}>
          <Grid item sm={12} md={6}>
            <Typography variant="h6" style={{fontSize: "36px"}}>Why choosing us?</Typography>
            <Typography variant="subtitle1">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</Typography>
          </Grid>
          <Grid item sm={12} md={6}>
                <Grid container justifyContent="center" spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <img src={handShake} alt="" />
                    </Grid>
                    <Grid item  xs={12} sm={6}>
                        <img src={customerLove} alt="" />
                    </Grid>
                    <Grid item  xs={12} sm={6}>
                        <img src={earth} alt="" />
                    </Grid>
                    <Grid item  xs={12} sm={6}>
                        <img src={doctor} alt="" />
                    </Grid>
                </Grid>
          </Grid>
        </Grid>
      </Container>
      <img src={waveLine2} alt="" className={classes.styleWave} />
    </Box>
  );
};

export default ChoosingUs;
