import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Button, Grid, Typography, Container } from "@material-ui/core";
import sliderBackground2 from "../../assets/images/background/slider-background2.png";
import playButton from "../../assets/images/icons/playButton.png";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleMain: {
      backgroundImage: `url(${sliderBackground2})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      zIndex: -2,
      position: "relative",
      minHeight: "918px",
      marginTop: "-100px"
    },
    styleContainer: {
      padding: "219px 15px",
      maxWidth: "1140px",
      margin: "0px auto",
      [theme.breakpoints.down("sm")]: {
        paddingTop: "150px",
      },
    },
    styleGrid: {
      marginTop: "80px"
    },
    styleTitle: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "48px",
      lineHeight: "125%",
      color: "#FFFFFF",
    },
    styleText: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      color: "#D8DCFF",
      letterSpacing: "0.1em",
      marginTop: "15px"
    },
    moreButton: {
      marginTop: "48px",
      borderRadius: "15px",
      color: "#FFFFFF",
      textTransform: "capitalize",
      width: "179px",
      height: "52px",
      border: "1px solid",
      fontSize: "16px",
      fontFamily: "Poppins",
      fontStyle: "normal",
    },
    styleGridRight: {
      padding: "100px",
      [theme.breakpoints.down("sm")]:{
        padding: "20px"
      },
      "& p": {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        color: "#FFFFFF",
        margin: "auto 50px",
      },
    },
    circle: {
      width: "127px",
      height: "127px",
      border: "3px solid white",
      borderRadius: "50%",
      "& img": {
        margin: "auto",
      },
    },
  })
);
const MainSlider = () => {
  const classes = useStyles();
  return (
    <Box className={classes.styleMain}>
      <Container className={classes.styleContainer}>
        <Grid container spacing={7} className={classes.styleGrid}>
          <Grid item md={6}>
            <Typography className={classes.styleTitle}>
              Your beauty center place
            </Typography>
            <Typography className={classes.styleText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo,
              massa pellentesque arcu fusce et magna consequat neque vitae
              lobortis.
            </Typography>
            <Button variant="outlined" className={classes.moreButton}>
              More Details
            </Button>
          </Grid>
          <Grid item md={6}>
            <Box display="flex" className={classes.styleGridRight}>
              <Button>
                <Box component="span" display="flex" className={classes.circle}>
                  <img src={playButton} alt="" />
                </Box>
              </Button>
              <Typography>Tour Video</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainSlider;
