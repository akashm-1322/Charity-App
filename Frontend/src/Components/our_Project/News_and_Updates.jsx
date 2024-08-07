import React from 'react';
import NewsCard from './NewsCard'; 

const App = () => {
  const newsItems = [
    {
      img: 'https://example.com/image1.jpg',                                           // imageid //
      title: 'News Title 1',                                                           //Title//
      description: 'News description 1'                                               //Description//
    },
    {
      img: 'https://example.com/image2.jpg',                                          // imageid //
      title: 'News Title 2',                                                          //Title//
      description: 'News description 2'                                               //Description//
    },
    {
      img: 'https://example.com/image3.jpg',                                         // imageid //
      title: 'News Title 3',                                                         //Title//
      description: 'News description 3'                                              //Description//
    }
  ];

  return (
    <div>
      {newsItems.map((item, index) => (
        <NewsCard
          key={index}
          img={item.img}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default App;
