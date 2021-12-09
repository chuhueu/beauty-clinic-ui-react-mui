import React from "react";
import Grid from "@material-ui/core/Grid";

const GetQuota = () => {
    return (
        <div className="getquota">
            <img src="" alt="" className="getquota-bg" />
            <div className="container">
                <Grid container spacing={2}>
                    <Grid item lg={8} sm={12}>
                        <div className="getquota-left">
                            <p className="heading">Get The Quota</p>
                            <p className="title">
                                Want to be handled by our professional team
                                immediately?
                            </p>
                            <p className="desc">
                                Id dui erat sed quam tellus in purus.
                                Pellentesque congue fringilla cras tellus enim.
                            </p>
                        </div>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <div className="getquota-right">
                            <div className="button button--primary button--rounded">
                                Make an Appointment
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default GetQuota;
