import { useState } from "react";
import {link} from "react-router-dom";


const ProfileComponent = () => {
    const [team] = useState ([
        {
            name: " Esha Patel",
            position: " Lead Developer",
            description: "I'm a passionate developer with a keen eye for detail."
        }
    ])

    return (
       <div>
            <h1>Meet The Team</h1>
            <header>
                
            </header>
            </div>
    )
}

export default ProfileComponent;