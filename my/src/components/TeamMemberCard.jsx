import React from "react";

const TeamMemberCard = ({ name, jobTitle }) => {
    return (
        <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", margin: "10px" }}>
            <h1>{name}</h1>
            <p>{jobTitle}</p>
        </div>
    );
};

export default  TeamMemberCard;