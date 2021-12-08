import React from "react";
import {
    AboutUs,
    CoreServices,
    MainSlider,
    ProfessionalTeams,
} from "../components";
import ContactUs from "../components/home1/ContactUs";

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
