import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <Link to={`/property/${property.id}`}>
        <img src={property.imageUrl} alt={property.title} />
        <div className="property-card-info">
          <h3>{property.title}</h3>
          <p>{property.location}</p>
          <p>${property.price} / night</p>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
