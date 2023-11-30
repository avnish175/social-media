//npm i react-hook-form yup @hookform/resolvers
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { addDoc,collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../../config/firebase";
import { useNavigate } from "react-router-dom";

interface CreateFormData{
    title:string;
    description:string;
}
export const CreateForm=()=>{
    const [user]=useAuthState(auth);
    const navigate=useNavigate();

    const schema=yup.object().shape({
        title:yup.string().required("you mush add tittle."),
        description:yup.string().required("you must add desc."),
    });
    const {register,handleSubmit,formState:{errors}}=useForm<CreateFormData>({
        resolver:yupResolver(schema),
    });
    const postsRef=collection(db,"posts");

    const onCreatePost=async(data:CreateFormData)=>{
        await addDoc(postsRef,{
            // title:data.title,
            // description:data.description,
            ...data,
            username:user?.displayName,
            userID:user?.uid,
        });
        navigate("/");
    };
    return(
       <form onSubmit={handleSubmit(onCreatePost)}>
        <input placeholder="Tittle...." {...register("title")} />
        <p style={{color:"red"}}>{errors.title?.message}</p>
        <textarea placeholder="Description..." {...register("description")}/>
        <p  style={{color:"red"}}>{errors.description?.message}</p>
        <input type="submit" className="submitForm" />
       </form>
    );
};