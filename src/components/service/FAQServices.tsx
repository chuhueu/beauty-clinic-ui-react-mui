import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Typography, Container } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContainer: {
      marginTop: "116px",
      marginBottom: "105px"
    },
    styleFQA: {
        marginTop: "60px",
        maxWidth: "850px",
        "& div":{
            marginBottom: theme.spacing(2)
        }
    },
    styleFQA1: {
      background: "#F7F7FF",
      borderRadius: "0px 0px 20px 20px",
      borderTop: "1px solid #091156",
      minHeight: "216px",
      padding: "50px",
      [theme.breakpoints.down("xs")]: {
        padding: "10px"
      },
      "& h5":{
          padding: "10px"
      }
    },
    styleIcon: {
      color: "#091156",
      width: "25px",
      height: "25px",
    },
  })
);
const FAQServices = () => {
  const classes = useStyles();
  return (
    <Container fixed className={classes.styleContainer}>
      <Box textAlign="center">
        <Typography variant="h1">Services FAQ’s</Typography>
        <Box
          margin="0 auto"
          width={40}
          border="4px solid #FF64AE"
          borderRadius="3px"
        ></Box>
      </Box>
      <Container className={classes.styleFQA}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h4" style={{ fontSize: "16px" }}>
            Is beauty consultation handled thoroughly?
          </Typography>
          <KeyboardArrowUpIcon className={classes.styleIcon} />
        </Box>
        <Container className={classes.styleFQA1}>
          <Typography variant="h5" style={{ fontStyle: "italic" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna
          </Typography>
          <Typography variant="h5" style={{ fontStyle: "italic" }}>
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla
          </Typography>
        </Container>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h4" style={{ fontSize: "16px" }}>
          Can I be beautiful in an instant time?
          </Typography>
          <KeyboardArrowDownIcon className={classes.styleIcon} />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h4" style={{ fontSize: "16px" }}>
          Are there any side effects to the treatment methods or treatments at this clinic?
          </Typography>
          <KeyboardArrowDownIcon className={classes.styleIcon} />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h4" style={{ fontSize: "16px"}}>
          Do professionals have accreditation in their respective fields?
          </Typography>
          <KeyboardArrowDownIcon className={classes.styleIcon} />
        </Box>
      </Container>
    </Container>
  );
};

export default FAQServices;
