import { useState } from "react";
import ProfileData from "../Data/Profile.json"



const ProfileComponent = () => {

    const [team,] = useState ([])

    useEffect (() => {
            setTeam(ProfileData)
        }, [])

    return (
       <div>
            <h1>Meet The Team</h1>
            </div>
    )
}

export default ProfileComponent;