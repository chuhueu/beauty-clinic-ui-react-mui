import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Grid, Typography, Container } from "@material-ui/core";
import backgroundService from "../../assets/images/background/backgroundService.png";
import service1 from "../../assets/images/services/service1.png";
import service2 from "../../assets/images/services/service2.png";
import service3 from "../../assets/images/services/service3.png";
import service4 from "../../assets/images/services/service4.png";
const useStyles = makeStyles((theme: Theme) => createStyles({
    styleBox: {
        maxWidth: "1110px",
        marginTop: "125px",
        position: "relative"
    },
    styleImg: {
        position: "absolute",
        maxWidth: "1440px",
        zIndex: -1,
        left: "-15%",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            left: "0"
        }
    }
}));
const OurServices = () => {
  const classes = useStyles();
  return (
    <Container className={classes.styleBox}>
        <img src={backgroundService} alt="" className={classes.styleImg}/>
      <Box textAlign="center">
        <Typography variant="h2">Our Services</Typography>
        <Typography variant="h1" style={{ padding: "20px" }}>
          We focus on your beauty
        </Typography>
        <Typography variant="h3">Lorem ipsum dolor sit amet.</Typography>
      </Box>
      <Box mt={10}>
          <Grid container justify="center" alignItems="center" spacing={7}>
            <Grid item xs={12} sm={5} md={4}>
                <img src={service1} alt="" />
            </Grid>
            <Grid item xs={12} sm={7} md={8}>
                <img src={service2} alt="" />
            </Grid>
            <Grid item xs={12} sm={7} md={8}>
                <img src={service3} alt="" />
            </Grid>
            <Grid item xs={12} sm={5} md={4}>
                <img src={service4} alt="" />
            </Grid>
          </Grid>
      </Box>
    </Container>
  );
};

export default OurServices;
