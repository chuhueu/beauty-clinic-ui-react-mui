import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Grid, Typography, Container } from "@material-ui/core";
import phone from "../../assets/images/contactus/phone.png";
import mapMarket from "../../assets/images/contactus/map-market.png";
import mail from "../../assets/images/contactus/mail.png";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContainer: {
      maxWidth: "1140px",
      marginTop: "100px",
      marginBottom: "112px"
    },
    styleGrid: {
        "& div": {
            padding: "20px"
        },
        "& h3": {
            fontSize: "14px"
        }
    },
    styleImg: {
      margin: "40px auto",
    },
    stylePhone: {
      background: "#FFFFFF",
      boxShadow: "0px 25px 50px 25px #F7F7FF",
      borderRadius: "42px",
    },
    styleText: {
      fontSize: "24px",
      padding: "10px 0px",
      fontWeight: 600
    },
  })
);
const ContactInfo = () => {
  const classes = useStyles();
  return (
    <Container className={classes.styleContainer}>
      <Box textAlign="center">
        <Typography variant="h2">Get in Touch</Typography>
        <Typography variant="h1" style={{ padding: "20px" }}>
          Get direct handling by us
        </Typography>
        <Typography variant="h3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </Typography>
      </Box>
      <Box mt={11} textAlign="center" alignItems="center">
        <Grid container justifyContent="center" alignItems="center" spacing={2} className={classes.styleGrid}>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <img src={mapMarket} alt="" className={classes.styleImg} />
              <Typography variant="h2">Address</Typography>
              <Typography variant="h1" className={classes.styleText}>
                101 Baker Street, NY
              </Typography>
              <Typography variant="h3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box className={classes.stylePhone}>
              <img src={phone} alt="" className={classes.styleImg} />
              <Typography variant="h2">Phone</Typography>
              <Typography variant="h1" className={classes.styleText}>
                +896 120 5889
              </Typography>
              <Typography variant="h3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <img src={mail} alt="" className={classes.styleImg} />
              <Typography variant="h2">Mail</Typography>
              <Typography variant="h1" className={classes.styleText}>
                mail@company.com
              </Typography>
              <Typography variant="h3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactInfo;
