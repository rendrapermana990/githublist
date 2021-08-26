import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';


function App() {
  const url = 'https://api.github.com/users/rendrapermana990/repos'

  const [users, setUsers] = useState([])

  const getDataUsers = async () => {
    const response = await fetch('https://api.github.com/users/rendrapermana990/repos')
    const dataku = await response.json()
    const users = dataku.slice(0, 8)
    setUsers(users)
  }

  useEffect(() => {
    getDataUsers()
  }, [])

  return (
  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<h3>List GitHub Repository</h3>
      {users.map((user) => {
        return (
          <p key={user.id}>
            {user.url}
          </p>
        )
      })}
       
      </header>
	  
    </div>
	
  
  );
}
export default App;









