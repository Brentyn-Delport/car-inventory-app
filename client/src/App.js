// App.js

import React from 'react';
import { CarProvider } from './context/CarContext'; 
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <CarProvider>
      <Header />
      <main>
        <Dashboard />
      </main>
      <Footer />
    </CarProvider>
  );
}

export default App;
