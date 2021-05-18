import React from 'react';
import './App.css';
import NavButton from "./NavButton";

function App() {
  return (
      <>
          <header>
          <h1>Handbags & Purses</h1>
          </header>
              <nav>
                  <NavButton
                  description={"to the collection"}/>
                  <NavButton
                  description={"shop all bags"}/>
                  <NavButton
                  description={"pre-orders"}
                  isDisabled={true}/>
        </nav>
      </>
  );
}

export default App;



