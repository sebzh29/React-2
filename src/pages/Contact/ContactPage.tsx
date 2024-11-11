import { FormEvent, ChangeEvent, useState } from "react"
import ContactForm from "../../components/ContactForm";
import { Message } from "../../interfaces/Message";



//pour le typage des props nom interface = nom de la fonction + Props
// void = fonction sans return
interface ContactPageProps {
    getContactForm: (message:Message) => void;
}


//etape 3 props dans la fonction etape 2 = etape 3
// je recupère la fonction getMessage dans les props
export default function ContactPage(props: ContactPageProps) { 

    // recup props  **La voila getMessage={getMessage}**
    //Etape 4 Je recupère la fonction getMessage dans les props    
    const { getContactForm } = props;   

    const [form, setForm] = useState<Message>({
        title: '',
        category: '',
        content: ''
    });

    const [firstname, setFirstname] = useState<string>('Thibault');

    // on utilise qd on clique sur le bouton submit
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault() // ne recharge pas toute la page
        console.log("🚀 ~ handleSubmit ~ e:", e) 
        setFirstname("Maud")     
        getContactForm(form) // Récuperer les infos du formulaire
        //envoie les infos dans le back / dans la base de donnée
    }   

  
    function handleChange(e: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement >) {
        console.log("🚀 ~ handleChange ~ e:", e)
        console.log("🚀 ~ handleChange ~ e:", e.target)
        const { name, value } = e.target
        setForm({...form, [name]: value})

    }

// 


    return (
        <>
            <h1 className="text-3xl text-center">Contact Page</h1>

            <h2 className="text-xl text-center">Bonjour {firstname}</h2>

            <form onSubmit={(e) =>handleSubmit(e) } className="flex flex-col w-1/2 m-auto gap-4 mt-5">
                <label htmlFor="title">Titre</label>
                <input 
                    className="border border-black rounded-md" 
                    type="text" 
                    name="title" 
                    onChange={(e) => handleChange(e) } 
                    id="title" 
                />

                <label htmlFor="category">Catégorie : </label>
                <select 
                    className="border-0 py-1.5 pl-2 rounded-md shadow-sm" 
                    name="category" 
                    onChange={(e) => handleChange(e)} 
                    id="category"
                >
                    <option value="feedback">Sélectionner une catégorie</option>
                    <option value="front">front</option>
                    <option value="back">back</option>
                    <option value="fullstack">fullstack</option>
                    <option value="other">autres</option>
                </select>

                <label htmlFor="content">Votre message : </label>
                <textarea 
                    className="border border-black rounded-md" 
                    name="content" 
                    onChange={(e) => handleChange(e)} 
                    id="content"
                >                    
                </textarea>

                <button type="submit" className="btn btn-secondary rounded">
                    Envoyer votre message
                </button>
    
            </form> 
        </>
    )
}