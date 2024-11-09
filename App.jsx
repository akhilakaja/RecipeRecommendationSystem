import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './Components/Banner';
import Category from './Components/Category';
import IngredientPage from './Components/IngredientPage.jsx';
import './App.css';

const categories = [
  { name: 'Breakfast', image: 'https://th.bing.com/th/id/OIP.y7ecUv1NETZkzEmGOLlwbwHaKt?w=900&h=1301&rs=1&pid=ImgDetMain' },
  { name: 'Salads', image: 'https://th.bing.com/th/id/OIP.ENbJxPVDSVHpoeLpW5t0aAHaKM?w=720&h=991&rs=1&pid=ImgDetMain' },
  { name: 'Appetizers', image: 'https://th.bing.com/th/id/OIP.GWL7wqPEzjFnClKdqw1fIwHaLG?rs=1&pid=ImgDetMain' },
  { name: 'Soups', image: 'https://th.bing.com/th/id/OIP.Emp6CmS6wjwHpRVqOl-U2AHaJQ?w=1500&h=1875&rs=1&pid=ImgDetMain' },
  { name: 'Desserts', image: 'https://th.bing.com/th/id/OIP.yTInzPP3G3xTf1PFdrayEAHaJx?rs=1&pid=ImgDetMain' },
  { name: 'Main Dishes', image: 'https://th.bing.com/th/id/OIP.8n_3zUq2yAp_io_sxGfsRgHaJ3?w=640&h=853&rs=1&pid=ImgDetMain' },
  { name: 'Beverages', image: 'https://images.squarespace-cdn.com/content/v1/5e90c89d550b83096e2ac92a/ef97b988-1125-4fca-82e6-5247f4c2d99c/Panda-Express_Crafted-Beverages_Mango-Guava_Leslie-Grow_WEB.jpg' },
  { name: 'Snacks', image: 'https://th.bing.com/th/id/OIP.cS1sdpjrmnhcOy35jp7JfgHaLH?rs=1&pid=ImgDetMain' },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="full-width">
            <Banner />
            <section className="categories">
              <div className="container">
                {categories.map((category, index) => (
                  <Category key={index} name={category.name} image={category.image} />
                ))}
              </div>
            </section>
          </div>
        } />
        <Route path="/ingredients" element={<IngredientPage />} />
      </Routes>
    </Router>
  );
}

export default App;
