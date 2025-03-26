import React from "react";
import TeamMemberCard from "./components/TeamMemberCard";

function App() {
    return (
        <div>
            <h1>Our Team</h1>
            <TeamMemberCard name="Jhon Doe" jobTitle="Software Engineering" />
            <TeamMemberCard name="Smith" jobTitle="Product Manager" />
        </div>
    );
}

export default App;