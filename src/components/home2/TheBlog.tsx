import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Paper, Grid, Typography, Container } from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import news1 from "../../assets/images/contactus/news1.png";
import news2 from "../../assets/images/contactus/news2.png";
import news3 from "../../assets/images/contactus/news3.png";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleNews: {
            maxWidth: "347px",
            //height: "543px",
            borderRadius: "25px",
            boxShadow: "0px 25px 50px 5px #F6F7FF",
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
        styleText: {
            padding: "56px 38px",
            "& > *": {
                padding: theme.spacing(1),
            },
        },
    })
);
const TheBlog = () => {
    const classes = useStyles();
    return (
        <Container fixed>
            <Box textAlign="center" mt={14}>
                <Typography variant="h2">The Blog</Typography>
                <Typography variant="h1" style={{ padding: "20px" }}>
                    Our latest news
                </Typography>
                <Typography variant="h3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
            </Box>
            <Box mt={8}>
                <Grid container justifyContent="center" spacing={1}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Container>
                            <Paper
                                elevation={3}
                                className={`${classes.styleNews} left`}
                            >
                                <img src={news1} alt="" />
                                <Box className={classes.styleText}>
                                    <Typography variant="h4">
                                        How much does a consult cost at our
                                        clinic?
                                    </Typography>
                                    <Typography variant="h5">
                                        A wonderful serenity has taken
                                        possession of my entire soul, like these
                                        sweet mornings ...
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
                            </Paper>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Container>
                            <Paper elevation={3} className={classes.styleNews}>
                                <img src={news2} alt="" />
                                <Box className={classes.styleText}>
                                    <Typography variant="h4">
                                        Watch out! don't choose the wrong beauty
                                        product
                                    </Typography>
                                    <Typography variant="h5">
                                        A wonderful serenity has taken
                                        possession of my entire soul, like these
                                        sweet mornings ...
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
                            </Paper>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Container>
                            <Paper
                                elevation={3}
                                className={`${classes.styleNews} right`}
                            >
                                <img src={news3} alt="" />
                                <Box className={classes.styleText}>
                                    <Typography variant="h4">
                                        About skin care you need to know
                                    </Typography>
                                    <Typography variant="h5">
                                        A wonderful serenity has taken
                                        possession of my entire soul, like these
                                        sweet mornings ...
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
                            </Paper>
                        </Container>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default TheBlog;
