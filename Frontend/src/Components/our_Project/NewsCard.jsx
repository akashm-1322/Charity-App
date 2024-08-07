import React from 'react';

const NewsCard = ({ img, title, description }) => {
  return (
    <div className='News-Card'>
      <div>
        <img src={img} alt={title} />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
