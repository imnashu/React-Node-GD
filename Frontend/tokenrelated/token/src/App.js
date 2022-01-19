import './App.css';
import React, {useState} from 'react';

function App() {

  const[email,setEmail] = useState("");
  const[token,setToken] = useState("");

  function handleClick(){
    let token_in_local = window.localStorage.getItem(email);
    
    if (email===""){
      setToken("Token Not Found")
    }
    else if(token_in_local){
      setToken(token_in_local);
    }else{
      let randToken = Math.random(1000000).toString(36).substr(2);
      window.localStorage.setItem(email,randToken);
      setToken(window.localStorage.getItem(email));
    }
  }

  return (
    <div className="App">
      
    <h2>Token</h2>
      <p>Email;
        <input type ="text" onChange={(e)=>setEmail(e.target.value)}></input>
      </p>
      <p>Password; 
        <input type ="password"></input>
      </p>
      <button onClick={()=>handleClick()}>Login</button>
      <p>
        {email && <label>Token :</label>}
        <label>{token}</label>
      </p>
    </div>
  );
}

export default App;