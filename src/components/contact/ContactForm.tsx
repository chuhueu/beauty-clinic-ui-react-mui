import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Grid, Typography, Container } from "@material-ui/core";
import Image1 from "../../assets/images/contactus/contact-img-1.png";
import BgBubble from "../../assets/images/background/bg-bubble.png";
//import Map from "./Map";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleIframe:{
      width: "100%",
      height: "500px",
      border: "0"
    },
    styleImg: {
      position: "absolute",
      top: "-10%",
      right: "0",
      width: "100%",
      zIndex: -1,
    },
    styleText: {
      maxWidth: "1140px",
      "& h3": {
          paddingLeft: "100px",
          [theme.breakpoints.down("sm")]:{
              paddingLeft: "0px"
          }
      }
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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0485231276557!2d105.78393701476328!3d21.03074438599728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4c767ff79d%3A0xd075094a50afef83!2zOCBQaOG7kSBEdXkgVMOibiwgROG7i2NoIFbhu41uZyBI4bqtdSwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1639381918172!5m2!1svi!2s" className={classes.styleIframe}></iframe>
      </Box>
    </Box>
  );
};

export default ContactForm;

