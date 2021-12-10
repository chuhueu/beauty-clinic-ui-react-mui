import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Grid, Typography, Container } from "@material-ui/core";
import animationService1 from "../../assets/images/services/animationService1.png";
import vector from "../../assets/images/icons/Vector.png";
import animationService2 from "../../assets/images/services/animationService2.png";
import animationService3 from "../../assets/images/services/animationService3.png";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContainer: {
      marginTop: "100px",
      maxWidth: "1110px",
    },
    styleImg: {},
    styleText: {
      "& > *": {
        paddingBottom: theme.spacing(1.5),
      },
    },
  })
);
const BeautyServices = () => {
  const classes = useStyles();
  return (
    <Container fixed className={classes.styleContainer}>
      <Box>
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          spacing={10}
        >
          <Grid item xs={12} sm={6}>
            <img src={animationService1} alt="" />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.styleText}>
            <Typography variant="h2">Beauty Consultation</Typography>
            <Typography variant="h1">
              We services beauty consultation
            </Typography>
            <Typography variant="h3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
              quam suscipit purus donec amet. Egestas volutpat facilisi eu
              libero.
            </Typography>
            <Box display="flex" alignItems="center">
              <Typography
                variant="h4"
                style={{ fontSize: "16px", marginRight: "10px" }}
              >
                Make an Appointment
              </Typography>
              <img src={vector} alt="" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.styleText}>
            <Typography variant="h2">Skin Treatements</Typography>
            <Typography variant="h1">
            Skin care and
treatment by expert
            </Typography>
            <Typography variant="h3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
              quam suscipit purus donec amet. Egestas volutpat facilisi eu
              libero.
            </Typography>
            <Box display="flex" alignItems="center">
              <Typography
                variant="h4"
                style={{ fontSize: "16px", marginRight: "10px" }}
              >
                Make an Appointment
              </Typography>
              <img src={vector} alt="" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={animationService2} alt="" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={animationService3} alt="" />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.styleText}>
            <Typography variant="h2">Beauty Product</Typography>
            <Typography variant="h1">
            We present quality beauty products
            </Typography>
            <Typography variant="h3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
              quam suscipit purus donec amet. Egestas volutpat facilisi eu
              libero.
            </Typography>
            <Box display="flex" alignItems="center">
              <Typography
                variant="h4"
                style={{ fontSize: "16px", marginRight: "10px" }}
              >
                Make an Appointment
              </Typography>
              <img src={vector} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default BeautyServices;
