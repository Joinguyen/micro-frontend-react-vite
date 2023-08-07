import React from 'react'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import { AppL }  from 'remoteAppL/AppL';
// import  { AppC }  from 'remoteAppC/AppC';
import   Main  from 'remoteAppC/Main';


// import {Button as Button2} from 'remoteApp2/Button';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
      <Main />
          {/* <Link to="chat" >
          CHAT
          </Link>
          <Link to="board" >
          LOUNGE
          </Link>
          <Routes>
            <Route path='board' element={<Main />} />
            <Route path='chat' element={<Main />} />
          </Routes> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn
      </p>
    </div>
    </BrowserRouter>
    
  )
}

export { App }
