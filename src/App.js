import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState("");
  const [message,setmessage] = useState("");

  const emailValidation=()=>{
    const regEx = /^[\w._+-]+@+(mercadolibre|mercadolivre)+\.com/gm
    if(regEx.test(email)){
      setmessage("mail valido")
    }else if(!regEx.test(email) && email !== ""){
      setmessage("mail no valido")
    }else{
      setmessage("campo vacio")
    }
  };

  const handleOnChange =(e) => {
    setEmail(e.target.value);
  };

  return (
    <div className='app'>
      <div>  
        <h2>
          Practicas validacion Email
        </h2>
      </div>
      <div>
        <label htmlFor=''>Email:</label>
        <input 
        type="email" 
        placeholder="email" 
        value={email} 
        onChange={handleOnChange}
        />
        <button onClick={emailValidation}>Check</button>
        {message}
      </div>
    </div>
  );
}

export default App;
