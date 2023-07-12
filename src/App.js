import { useState } from 'react';
import './App.css';
import './logo.css';
import emailjs from '@emailjs/browser'

function App() {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')

function sendEmail(e){
  e.preventDefault();

  if(email === '' || message === '' || name === ''){
    alert("Esqueceu de preencher :(")
    return;
  }

  const templateParams = {
    email: email,
    from_name:  name,
    message: message,
   
    to_email: email // Adiciona o e-mail como destinatário
  }

  emailjs.send("service_jgv8usa","template_2kvg7bg",templateParams,"kFM9hfmEyBzSur9ZU")
  .then((response) => {
      alert("E-MAIL ENVIADO COM SUCESSO!")
      setEmail('')
      setName('')
      setMessage('')
    })
}


  return (
    <div className="App">
    <form class="form" onSubmit={sendEmail}>
    <div class="title">Escreva sua história</div>
    <input type="text" placeholder="Seu Nome" class="input" onChange={(e) => setName(e.target.value)}
          value={name}/>
              <input type="text" placeholder="Seu e-mail" class="input" onChange={(e) => setEmail(e.target.value)}
          value={email}/>
    <textarea placeholder="Sua história" onChange={(e) => setMessage(e.target.value)}
          value={message}></textarea>
     
    <button>Enviar</button>
</form>
    </div>
  );
}

export default App;
