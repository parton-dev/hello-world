import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';
import AddProperty from './components/AddProperty';
import './App.css';

function App() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: 'Cozy Apartment in the City Center',
      imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      location: 'New York, NY',
      price: 150,
      description: 'A beautiful and cozy apartment located in the heart of the city. Perfect for a weekend getaway.',
    },
    {
      id: 2,
      title: 'Modern Loft with a View',
      imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80',
      location: 'Los Angeles, CA',
      price: 200,
      description: 'A stunning modern loft with breathtaking views of the city skyline. Comes with all the amenities you need for a comfortable stay.',
    },
    {
      id: 3,
      title: 'Charming Cottage by the Sea',
      imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      location: 'Miami, FL',
      price: 250,
      description: 'A charming and peaceful cottage located just steps away from the beach. The perfect place to relax and unwind.',
    },
  ]);

  const addProperty = (property) => {
    setProperties([...properties, property]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={<PropertyList properties={properties} />}
            />
            <Route
              path="/property/:id"
              element={<PropertyDetail properties={properties} />}
            />
            <Route
              path="/add"
              element={<AddProperty addProperty={addProperty} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
