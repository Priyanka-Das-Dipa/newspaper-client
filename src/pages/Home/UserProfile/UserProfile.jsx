import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const UserProfile = () => {
    const { user} = useContext(AuthContext)
    console.log(user);
    return (
        <div className="min-h-screen">
            <h1 className="text-2xl font-semibold text-black">
                {user.displayName}
            </h1>
        </div>
    );
};

export default UserProfile;