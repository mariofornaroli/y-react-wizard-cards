import React, { useState } from 'react';
import './App.css';
import { Cards } from './card/cards';
import { Badges } from './badges/badges';
import { Controls } from './controls/controls';
import { faList, faInfo, faUserCheck, faBell, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const slides = [{
  iconElement:faList,
  title: 'Available events',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus exercitationem quidem obcaecati id accusamus amet nobis est consequatur fugit id accusamus!'
}, {
  iconElement:faInfo,
  title: 'Event information',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing. amet nobis est consequatur fugit id accusamus!'
}, {
  iconElement:faUserCheck,
  title: 'Book the event',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus exercitationem quidem obcaecati id accusamus amet nobis est consequatur'
}, {
  iconElement:faBell,
  title: 'Get notified',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus exercitationem quidem obcaecati id accusamus amet nobis est consequatur fugit id accusamus!'
}, {
  iconElement:faCreditCard,
  title: 'Buy tickets',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus exercitationem quidem obcaecati id accusamus!'
}]

function App() {

  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <>
    {/* <p>current index: {currentIndex}</p>
    <p>is first card: {(currentIndex == 0) && 'YES'}</p>
    <p>is last card: {(currentIndex === (slides.length-1)) && 'YES'}</p> */}

      <div className="container">

        <Badges
          slides={slides}
          currentIndex={currentIndex} />

        <Cards
          slides={slides}
          currentIndex={currentIndex}
        />

        <Controls
          slides={slides}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex} />

      </div>
    </>
  );
}

export default App;
