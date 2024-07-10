import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Container from './Components/Container';
import Footer from './Components/Footer';
import SignIn from './Components/SignIn';
import './App.css';

function App() {
  const [showSignIn, setShowSignIn] = useState(false);

  // Função para mostrar o formulário de SignIn
  const handleShowSignIn = () => {
    setShowSignIn(true);
  };

  // Função para ocultar o formulário de SignIn
  const handleHideSignIn = () => {
    setShowSignIn(false);
  };

  return (
    <>
      <div>
        <Navbar />
        
        {/* Componente Header */}
        <Header onShowSignIn={handleShowSignIn} />
        
        {/* Componente Container ou SignIn dependendo do estado */}
        {showSignIn ? <SignIn onHideSignIn={handleHideSignIn} /> : <Container />}
        
        <Footer />
      </div>
    </>
  );
}

export default App;
