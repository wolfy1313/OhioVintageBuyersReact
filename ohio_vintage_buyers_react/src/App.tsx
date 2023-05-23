import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className='font-black text-5xl'>Ohio is for Vintage Lovers</h1>
      </header>
      <body className='bg-yellow-300 min-h-screen min-w-full'>
        <ContactForm />
      </body>
    </div>
  );
}

export default App;
