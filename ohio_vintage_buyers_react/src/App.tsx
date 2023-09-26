import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import FooterPage from './components/FooterPage';
import PageInfo from './components/PageInfo';
import ImageCarousel from './components/ImageCarousel'


function App() {
  return (
    <div className="App">
      <header>
        <h1 className='font-black p-4 text-7xl bg-red-500'>Ohio Vintage Buyers</h1>
      </header>
      <div className='bg-amber-50 min-h-screen min-w-full'>
        <PageInfo />
        <ContactForm />
        <div className='mt-10  pb-30'>
          <h1>THE ITEMS WE ARE LOOKING FOR DO NOT HAVE TO BE IN PERFECT CONDITION. </h1>
          <h1>STAINS, HOLES, DIRT, AND GENERAL WEAR & TEAR ARE OKAY. </h1>
          <h1>WE BUY YOUR ITEMS AS IS, IN A WIDE RANGE OF CONDTIONS.</h1>
        </div>
        <ImageCarousel slideInterval={3000} />
      </div>
      <footer className='mt-16'>
        <FooterPage />
      </footer>
    </div>
  );
}

export default App;
