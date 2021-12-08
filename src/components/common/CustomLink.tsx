import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

const CustomLink = ({ label, to, activeOnlyWhenExact }: any) => {
    let match = useRouteMatch({ path: to, exact: activeOnlyWhenExact });

    return (
        <div className={`menu-link ${match ? "active" : ""}`}>
            <Link to={to}>{label}</Link>
        </div>
    );
};

export default CustomLink;
