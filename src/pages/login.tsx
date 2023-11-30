import {auth,provider} from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import {useNavigate} from "react-router-dom";
export const Login=()=>{
    const navigate=useNavigate(); 
    const signWithGoogle=async()=>{
        const result=await signInWithPopup(auth,provider);
        console.log(result);
        navigate("/");

    }
    return (
        <div>
          <p>Sign In with Google to Continue</p>
          <button onClick={signWithGoogle}>sign in </button>
        </div>
    );
};