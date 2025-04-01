import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@arunkumar799/blog-common";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInput] = useState<SignupInput>({
        name: "",
        username: "",
        password: "",
    });


    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");

        } catch (e) {
            alert("Invalid username or password")
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center ">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        Create an account
                    </div>
                    <div className="text-slate-500">
                        {type === "signin" ? " Dont have an account" : "Already have an account"}
                        <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>{type === "signin" ? "sign up" : "sign in"} </Link>
                    </div>
                </div>
                <div className="pt-8">
                    {type === "signup" ? <LabelledInput label="Name" placeholder="Enter your name" onChange={(e) => {
                        setPostInput({ ...postInputs, name: e.target.value })
                    }} /> : null}

                    <LabelledInput label="Username" placeholder="Enter your username" onChange={(e) => {
                        setPostInput({ ...postInputs, username: e.target.value })
                    }} />

                    <LabelledInput label="Password" type={"password"} placeholder="Enter your password" onChange={(e) => {
                        setPostInput({ ...postInputs, password: e.target.value })
                    }} />

                    <button onClick={sendRequest} type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 
                    focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800
                     dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ">
                        {type === "signup" ? "sign up" : "sign in"}</button>


                </div>
            </div>
        </div>
    </div>

}


interface LabbelledInputProps {
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type?: string;
}


function LabelledInput({ label, onChange, placeholder, type }: LabbelledInputProps) {
    return <div>
        <label className="block mb-2 text-sm font-semibold text-black pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 
        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={placeholder} required />
    </div>
}