import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm';
import FooterPage from './components/FooterPage';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className='font-black text-5xl bg-slate-500'>Ohio is for Vintage Lovers</h1>
      </header>
      <body className='bg-yellow-300 min-h-screen min-w-full'>
        <ContactForm />
      </body>
      <footer>
        <FooterPage />
      </footer>
    </div>
  );
}

export default App;
