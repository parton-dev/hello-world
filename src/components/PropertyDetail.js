import React from 'react';
import { useParams } from 'react-router-dom';
import './PropertyDetail.css';

const PropertyDetail = ({ properties }) => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <h2>Property not found</h2>;
  }

  return (
    <div className="property-detail">
      <img src={property.imageUrl} alt={property.title} />
      <div className="property-detail-info">
        <h2>{property.title}</h2>
        <p>{property.location}</p>
        <p>${property.price} / night</p>
        <p>{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyDetail;
