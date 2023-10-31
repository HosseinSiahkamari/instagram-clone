import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {isOpen && (
        <ul className="menu-list">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <li>Option 4</li>
          <li>Option 5</li>
          <li>Option 6</li>
          <li>Option 7</li>
          <li>Option 8</li>
          <li>Option 9</li>
          <li>Option 10</li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
