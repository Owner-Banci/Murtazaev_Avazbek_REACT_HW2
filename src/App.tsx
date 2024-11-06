// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';

const App: React.FC = () => (
  <div>
    <Navbar />
    <Sidebar />
    <main style={{ paddingTop: '50px', marginLeft: '220px' }}>
      <ProductList />
    </main>
  </div>
);

export default App;