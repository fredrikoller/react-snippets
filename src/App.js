import React from 'react';
import './App.css';
import Layout from "./components/Layout"

function App() {
  return (
    <>
      <Layout>
        <div className="App">

          <header className="App-header">
            <p>
              <code>react-snippets
                </code>
              <span className="blinking-cursor"></span>
            </p>
          </header>
        </div>
      </Layout>
    </>
  );
}

export default App;
