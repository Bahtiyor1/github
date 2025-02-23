import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Story from './components/Story';

const App = () => {
  return (
    <div className='bg-[#FCFCFC]'>
      <Header />
      <Hero />
      <Categories />
      <Menu />
      <Testimonials />
      <Story />
      <Footer />
    </div>


  );
};

export default App;