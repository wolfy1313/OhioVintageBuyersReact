import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm';
import FooterPage from './components/FooterPage';
import PageInfo from './components/PageInfo';
import ImageCarousel from './components/ImageCarousel'


function App() {
  return (
    <div className="App">
      <header>
        <h1 className='font-black text-5xl bg-slate-500'>Ohio is for Vintage Lovers</h1>
      </header>
      <div className='bg-yellow-300 min-h-screen min-w-full'>
        <PageInfo />
        <ContactForm />
        <div className='mt-10'>
          <h1>Some Images To See</h1>
          <ImageCarousel slideInterval={3000} />
        </div>
      </div>
      <footer>
        <FooterPage />
      </footer>
    </div>
  );
}

export default App;
