import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";//  npm i react-firebase-hooks
import { signOut } from "firebase/auth";
export const Navbar = () => {
    const [user] = useAuthState(auth);
    const signUserOut = async () => {
        await signOut(auth);
    }

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                { !user ? (<Link to="/login">Login</Link>): (
                    <Link to="/createpost">Create Post</Link>
                )}
                
            </div>
            <div>
                <div className="user">
                    {user && (
                        <>
                            <p>{user?.displayName}</p>
                            <img src={user?.photoURL || ""} width="100" height="100" />
                            <button onClick={signUserOut}>log Out</button>
                        </>
                    )}

                </div>
            </div>
        </div>
    );

};