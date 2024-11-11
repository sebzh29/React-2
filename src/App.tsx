
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home/HomePage'
import ContactPage from './pages/Contact/ContactPage'
import MessagePage from './pages/Message/MessagePage'
import Navbar from './components/Navbar'
import AuthorPage from './pages/Author/AuthorPage'
import { useState } from 'react'
import { Message } from './interfaces/Message'
import AddAuthorPage from './pages/Author/AddAuthorPage'
import { Author } from './interfaces/Author'

function App() {  

  // On le sort en interface car il est reutilisable et on importe l'interface
//   interface Message {
//     title: string;
//     category: string;
//     message: string;
// }

  //etape 1 création de la fonction msg = objet (titre, categ, content)
  //c est un talbeau d objet de message, une liste 
  // Elle me permet de récupérer des infos dans le composant enfant
  // direction etape 2 ou l'on passe la fonction en props
  const [messages, setMessages] = useState<Message[]>([]);
  
  // canne a pêche
  // fonction qui permet d'aller chercher mes infos dans le composant enfant
  // Je la prends et la balances dans ContactPage**La voila getMessage={getMessage}**
  // Je la recupere dans les props de ContactPage
  //getMessage = l ensemble des infos de la page des contacts message: = parametre
  function getContactForm(message: Message): void {
    // setMessages sert a modifier mon message
    setMessages([...messages, message]);

    //setMessages([...messages, message]); de manietre detaillée
    // const messageCopy = [...messages];
    //     messageCopy.push(message);
    //     setMessages(messageCopy);
  }

  //le typage est important le nom on s'en fout, on peut le changer
  // function getName(name: string) {
  //   console.log("🚀 ~ getName ~ name:", name)    
  // }

  // getName("Thibault");

  // const name = "Sebastien";
  // getName(name);

  // const classs = "Salah";// <-- String donc ok
  // getName(classs);

  //AUTHOR


  const [authors, setAuthors] = useState<Author[]>([]);

  // Canne a peche Author 
  function getAuthorForm(author: Author): void {
    // setAuthors sert a modifier mon message
    setAuthors([...authors, author]);
  }


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/message" element={<MessagePage messages={messages} />} />
        {/* etape 2 -> etp3 envoi prop contactForm **La voila getMessage={getMessage}** */}
        <Route path="contact" element={
          <ContactPage getContactForm={ getContactForm } />
        } />
        <Route path="author" element={<AuthorPage authors={authors} />} />
        <Route path="addAuthor" element={ //2 j'envoie a 3
          <AddAuthorPage getAuthorForm={ getAuthorForm }/>} 
        />       
      </Routes>
    </>
  )
}

export default App
