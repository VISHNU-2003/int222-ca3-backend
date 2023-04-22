import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData{
    title: string;
    discription : string;
}


export const CreateForm = () => {
    const[user]=useAuthState(auth);
    const navigate = useNavigate();

    const schma = yup.object().shape({
        title: yup.string().required("tou must add a title"),
        discription: yup.string().required("tou must add a discription "),

    });
    const {register,handleSubmit, formState: {errors}} = useForm <CreateFormData >({
        resolver: yupResolver(schma),   
    });

    const postsRef = collection(db, "posts");


    const onCreatePost = async (data:CreateFormData) => {
        await  addDoc(postsRef,{
            ...data, 
            // tittle: data.title,
            // discription: data.discription,
            username:user?.displayName,
            id: user?.uid, 

        });
        navigate("/");
         
    };

    

    return <form onClick={handleSubmit(onCreatePost)}>
        <input placeholder="TITLE..."{...register("title")}/>
        <h6 style={{color: "red"}} >{errors.title?.message}</h6>
        <textarea placeholder="discription ..."{...register("discription")}/>
        <h6 style={{color: "red"}}>{errors.discription?.message}</h6>
        <input  type ="submit" className="submitForm"/>
    </form>;

}; 