import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.css';

const Category = ({ name, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/ingredients?category=${name.toLowerCase()}`);
  };

  return (
    <div className="category-card" onClick={handleClick}>
      <img src={image} alt={name} className="category-image" />
      <div className="overlay">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Category;
