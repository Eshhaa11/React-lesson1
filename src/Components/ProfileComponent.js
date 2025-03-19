import { useState, useEffect } from "react";
import ProfileData from "../Data/Profile.json"




const ProfileComponent = () => {

    const [team, setTeam] = useState ([])

    useEffect (() => {
            setTeam(ProfileData)
        }, [])

    return (
            <div>
            <h1>Meet The Team</h1>
            {team?.team_members?.map((val, key) => {
                return (
                    <div key={key}>
                        <h1>{val.name}</h1>
                    </div>
                )
            })}
            </div>
    )
}

export default ProfileComponent;








//useEffect is a hook that allows you to perform side effects in function components. It is a close replacement for componentDidMount, componentDidUpdate, and componentWillUnmount in class components. It is called after the component has been rendered to the DOM. It is used to fetch data, add event listeners, and perform other side effects. It is a function that takes two arguments, a function that contains the side effect and an array of dependencies. The function is called after the component has been rendered to the DOM. The array of dependencies is used to specify when the side effect should be executed. If the array is empty, the side effect is executed only once after the component has been rendered to the DOM. If the array contains one or more dependencies, the side effect is executed whenever one of the dependencies changes. The function can return a cleanup function that is called before the component is unmounted. The cleanup function is used to clean up any resources used by the side effect