import React from "react";
import {
    AboutUs,
    CoreServices,
    MainSlider,
    ProfessionalTeams,
    ContactUs
} from "../components/index";

const Home1 = () => {
    return (
        <>
            <MainSlider />
            <CoreServices />
            <AboutUs />
            <ProfessionalTeams />
            <ContactUs />
        </>
    );
};

export default Home1;
