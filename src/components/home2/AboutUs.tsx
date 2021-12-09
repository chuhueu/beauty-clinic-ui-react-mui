import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Button, Grid, Typography, Container } from "@material-ui/core";
import aboutUs from "../../assets/images/aboutus/aboutus-2.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleButton: {
      background: "#FF64AE",
      borderRadius: "50px",
      width: "200px",
      height: "59px",
      textTransform: "capitalize",
      fontSize: "16px",
      marginTop: "51px",
    },
  })
);
const AboutUs = () => {
  const classes = useStyles();
  return (
    <Container fixed>
      <Box mt={20}>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <img src={aboutUs} alt="" />
          </Grid>
          <Grid item md={6}>
            <Typography variant="h2">About Us</Typography>
            <Typography variant="h1">We are the best beauty clinic</Typography>
            <Typography variant="h3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
              quam suscipit purus donec amet. Egestas volutpat facilisi eu
              libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
              tellus in suspendisse placerat.
            </Typography>
            <Button
              color="primary"
              variant="contained"
              className={classes.styleButton}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutUs;
