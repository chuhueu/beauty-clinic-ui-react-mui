import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Grid, Button, Typography, Container } from "@material-ui/core";
import background from "../../assets/images/background/bg-service.png";
import playButton from "../../assets/images/icons/playButton.png";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleBox: {
      "&::before": {
        background: "rgba(9, 17, 86, 0.6)",
        content: "close-quote",
        position: "absolute",
        zIndex: 1,
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
      },
      position: "relative",
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: "529px",
      [theme.breakpoints.down("sm")]:{
        height: "auto"
      }
    },
    styleContainer: {
      position: "absolute",
      left: "10%",
      top: "35%",
      zIndex: 2,
      [theme.breakpoints.down("sm")]: {
        top: "10%",
        left: "0",
      },
      [theme.breakpoints.down("xs")]: {
        top: "0",
        left: "0",
      },
    },
    styleGrid: {
      //marginTop: "80px",
    },
    styleGridRight: {
      marginLeft: "100px",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "0px",
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: "-50px",
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
const SloganServices = () => {
  const classes = useStyles();
  return (
    <Box mt={20} className={classes.styleBox}>
      <Container className={classes.styleContainer}>
        <Grid container spacing={10} className={classes.styleGrid}>
          <Grid item md={6} style={{ margin: "auto" }}>
            <Typography variant="h6" style={{ fontSize: "36px" }}>
              Best responsibility and service for our customers
            </Typography>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Box display="flex" className={classes.styleGridRight}>
              <Button>
                <Box component="span" display="flex" className={classes.circle}>
                  <img src={playButton} alt="" />
                </Box>
              </Button>
              <Typography>Treatments Videos</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SloganServices;
