import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const DashDesign = () => {
    const {user} = useContext(AuthContext)

    return (
        <div>
            <h2>{user?.displayName}</h2>
        </div>
    );
};

export default DashDesign;