import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Button, Grid, Typography, Container } from "@material-ui/core";
import Map from "../../assets/images/contactus/map.png";
import Image1 from "../../assets/images/contactus/contact-img-1.png";
import BgBubble from "../../assets/images/background/bg-bubble.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleImg: {
      position: "absolute",
      top: "-10%",
      right: "0",
      width: "100%",
      zIndex: -1,
    },
    styleText: {
      maxWidth: "1140px",
    },
  })
);
const ContactForm = () => {
  const classes = useStyles();
  return (
    <Box mt={10} className="contactus">
      <img src={BgBubble} alt="" className={classes.styleImg} />
      <Container fixed className={classes.styleText}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2">Contact Us</Typography>
            <Typography variant="h1">
              Contact service for our customers
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} style={{ margin: "auto" }}>
            <Typography variant="h3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <div className="container">
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box className="contactus-left">
              <img src={Image1} alt="" className="contactus-img" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="contactus-right">
              <form className="contactus-form">
                <Grid container spacing={5} style={{ marginBottom: "40px" }}>
                  <Grid item lg={6} sm={6} xs={12}>
                    <input
                      type="text"
                      placeholder="First name"
                      className="input"
                    />
                  </Grid>
                  <Grid item lg={6} sm={6} xs={12}>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="input"
                    />
                  </Grid>
                  <Grid item lg={12} sm={12} xs={12}>
                    <input
                      type="email"
                      placeholder="Email address"
                      className="input"
                    />
                  </Grid>
                  <Grid item lg={12} sm={12} xs={12}>
                    <input
                      type="text"
                      placeholder="Subject message"
                      className="input"
                    />
                  </Grid>
                  <Grid item lg={12} sm={12} xs={12}>
                    <textarea
                      placeholder="Your inquiry here"
                      className="textarea"
                    />
                  </Grid>
                </Grid>
                <div className="button button--primary button--rounded">
                  Send Message
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
      <Box mt={18}>
        <img src={Map} alt="" />
      </Box>
    </Box>
  );
};

export default ContactForm;
