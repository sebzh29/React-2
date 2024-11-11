import { Message } from "../../interfaces/Message";

interface MessagePageProps {
    messages: Message[];
}

export default function MessagePage(props: MessagePageProps) {

    // Va chercher en back les msg que j'ai envoyés
    // il y aura de moins en moins de props
    const { messages } = props;

    return (
        <>
            <h1 className="text-3xl text-center">Message Page</h1>

            {
                // afficher les messages
                //map on recrée un tableau a partir d'un autre tableau
                messages.map((message: Message, index: number) => (
                    <div key={index} className="border shadow-ms">
                        <h2>{message.title}</h2>
                        <p>{message.category}</p>
                        <p>{message.content}</p>
                    </div>
                ))                
            }
        </>
    )
}