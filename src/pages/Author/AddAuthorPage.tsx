import { useState } from "react";
import { Author } from "../../interfaces/Author";

interface AddAuthorPageProps {
    getAuthorForm: (author: Author) => void;
}

//3 props
export default function AddAuthorPage(props: AddAuthorPageProps) {

    const { getAuthorForm } = props

    const [authorForm, setAuthorForm] = useState<Author>({
        lastname: '',
        firstname: ''
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("🚀 ~ handleSubmit ~ e:", e)
        getAuthorForm(authorForm)
    }

    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        console.log("🚀 ~ handleChange ~ e:", e)  
        const { name, value } = e.currentTarget
        setAuthorForm({...authorForm, [name]: value})
    }

    return (

        <div>
            <h1 className="text-3xl text-center">Add Author</h1>
            <form  onSubmit={handleSubmit} className="flex flex-col w-1/2 m-auto gap-4 mt-5">
                <label htmlFor="lastname">Lastname</label>
                <input 
                    className="border border-black rounded-md" 
                    type="text" 
                    name="lastname" 
                    id="lastname" 
                    onChange={handleChange}
                />

                <label htmlFor="firstname">Firstname</label>
                <input 
                    className="border border-black rounded-md" 
                    type="text" 
                    name="firstname" 
                    id="firstname" 
                    onChange={handleChange}
                />

                <button className="bg-blue-500 text-white rounded-md py-2">Add Author</button>
            </form>
        </div>
    )
}