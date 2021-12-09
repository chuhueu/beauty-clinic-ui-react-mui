import React from "react";
import {
    ProfessionalTeams,
    SectionAbout,
    SectionClients,
    SectionSlogan,
    SectionVision,
} from "../components";

const About = () => {
    return (
        <>
            <SectionAbout />
            <ProfessionalTeams />
            <SectionSlogan />
            <SectionVision />
            <SectionClients />
        </>
    );
};

export default About;
