import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/Demo.png';

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  transition: transform 0.5s;
  transform: ${(props) => (props.isMouseInside ? 'perspective(1500px) rotateY(-20deg) rotateX(20deg)' : '')};
`;

const Glow = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    
  }
`;

const Card = () => {
  const [isMouseInside, setIsMouseInside] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseInside(true);
  };

  const handleMouseLeave = () => {
    setIsMouseInside(false);
  };

  return (
    <CardWrapper
      className="transition-transform duration-500"
      isMouseInside={isMouseInside}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={logo} alt="Demo" className="w-full rounded-3xl h-grid" />
      <ul className="flex flex-row text-xl my-8">
        <li className="bg-gold rounded-3xl mx-2 px-2 text-light">2024</li>
        <li className="bg-maron rounded-3xl mx-2 px-2 text-dark">html</li>
        <li className="bg-maron rounded-3xl mx-2 px-2 text-dark">css</li>
        <li className="bg-maron rounded-3xl mx-2 px-2 text-dark">react</li>
      </ul>
      <h2 className="text-4xl font-bold">Image Creation</h2>
      <p className="my-4">
        These changes make the code more concise and easier to maintain while
        maintaining the core functionality of theme handling.
      </p>
      <Glow />
    </CardWrapper>
  );
};

export default Card;
