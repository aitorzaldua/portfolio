import React from 'react';
import { About, Contact, Experience, Footer, Header, Nav, Portfolio, Services, Blog } from './components';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;