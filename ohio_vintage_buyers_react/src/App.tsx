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
        <h1 className='font-black text-5xl bg-red-500'>Ohio Vintage Buyers</h1>
      </header>
      <div className='bg-amber-100 min-h-screen min-w-full'>
        <PageInfo />
        <ContactForm />
        <div className='mt-10'>
          <h1>THE ITEMS WE ARE LOOKING FOR DO NOT HAVE TO BE IN PERFECT CONDITION. </h1>
          <h1>STAINS, HOLES, DIRT, WEAR, AND GENERAL TEAR ARE OK. </h1>
          <h1>WE BUY YOUR ITEMS AS IS, IN A WIDE RANGE OF CONDTIONS.</h1>
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
