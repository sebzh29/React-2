import { Author } from "../../interfaces/Author";

interface AuthorPageProps {
    authors: Author[];
}

export default function AuthorPage(props: AuthorPageProps) {

    const { authors } = props;

    return (
        <div>
            <h1 className="text-3xl text-center">Author Page</h1>

            {
                authors.map((author: Author, index: number) => (
                    <div key={index} className="border shadow-ms">
                        <h2>{author.firstname} {author.lastname}</h2>
                    </div>
                ))
            }
            
        </div>
    )   
}