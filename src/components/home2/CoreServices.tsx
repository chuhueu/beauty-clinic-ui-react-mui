import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Grid, Typography, Container } from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import icon1 from "../../assets/images/icons/icon-h1.png";
import icon2 from "../../assets/images/icons/icon-h2.png";
import icon3 from "../../assets/images/icons/icon-h3.png";
import waveLine from "../../assets/images/background/waveLine.png";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleService1: {
            borderRadius: "25px",
            boxSizing: "border-box",
            padding: theme.spacing(3),
            width: "100%",
            "& > *": {
                padding: theme.spacing(1),
            },
            "&:hover": {
                transform: "scale(1.1)",
                transition: "all 0.3s linear",
            },
            "&.left:hover": {
                transform: "scale(1.1) translateX(10%)",
                transition: "all 0.3s linear",
            },
            "&.right:hover": {
                transform: "scale(1.1) translateX(-10%)",
                transition: "all 0.3s linear",
            },
        },
        styleWave: {
            position: "absolute",
            zIndex: -10,
            left: "-15%",
            bottom: "-40%",
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
    })
);
const CoreServices = () => {
    const classes = useStyles();
    return (
        <Container fixed style={{ maxWidth: "1160px" }}>
            <img src={waveLine} alt="" className={classes.styleWave} />
            <Box textAlign="center" mt={20}>
                <Typography variant="h2">Main Services</Typography>
                <Typography variant="h1" style={{ padding: "20px" }}>
                    Our focus services
                </Typography>
                <Typography variant="h3">
                    Lorem ipsum dolor sit amet.
                </Typography>
            </Box>
            <Box mt={8}>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item xs={12} sm={6} md={4}>
                        <Container>
                            <Box
                                border="1px solid #E2E2E2"
                                boxSizing="border-box"
                                className={`${classes.styleService1} left`}
                            >
                                <img src={icon1} alt="" />
                                <Typography variant="h4">
                                    Beauty consultation
                                </Typography>
                                <Typography variant="h5">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing.
                                </Typography>
                                <Box
                                    display="flex"
                                    color="#FF64AE"
                                    alignItems="center"
                                >
                                    <Typography variant="h2">
                                        Learn more
                                    </Typography>
                                    <DoubleArrowIcon />
                                </Box>
                            </Box>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Container>
                            <Box
                                border="1px solid #9BA2E0"
                                boxSizing="border-box"
                                className={classes.styleService1}
                            >
                                <img src={icon2} alt="" />
                                <Typography variant="h4">
                                    Skin treatments
                                </Typography>
                                <Typography variant="h5">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing.
                                </Typography>
                                <Box
                                    display="flex"
                                    color="#FF64AE"
                                    alignItems="center"
                                >
                                    <Typography variant="h2">
                                        Learn more
                                    </Typography>
                                    <DoubleArrowIcon />
                                </Box>
                            </Box>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Container>
                            <Box
                                border="1px solid #E2E2E2"
                                boxSizing="border-box"
                                className={`${classes.styleService1} right`}
                            >
                                <img src={icon3} alt="" />
                                <Typography variant="h4">
                                    Beauty product
                                </Typography>
                                <Typography variant="h5">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing.
                                </Typography>
                                <Box
                                    display="flex"
                                    color="#FF64AE"
                                    alignItems="center"
                                >
                                    <Typography variant="h2">
                                        Learn more
                                    </Typography>
                                    <DoubleArrowIcon />
                                </Box>
                            </Box>
                        </Container>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default CoreServices;
