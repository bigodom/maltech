import React from 'react';

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-60 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
