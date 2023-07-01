import React from 'react';
import { About, Contact, Medium, Footer, Header, Nav, Portfolio, Services, Blog } from './components';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <About />
      <Services />
      <Portfolio />
      <Medium />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;