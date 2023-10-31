import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

const Sidebar = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #333;
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-250px')};
  transition: right 0.3s ease-in-out;
`;

const Content = styled.div`
  margin-left: 250px;
  transition: margin-left 0.3s ease-in-out;
`;

const ToggleButton = styled.div`
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  padding: 20px;
  background-color: #333;
`;

const DarkBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const ColumnMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ToggleButton onClick={toggleMenu}>
        <FaBars />
      </ToggleButton>
      <DarkBackground isOpen={isOpen} onClick={toggleMenu} />
      <Sidebar isOpen={isOpen}>
        {/* محتوای منو */}
      </Sidebar>
      <Content>
        {/* محتوای اصلی */}
      </Content>
    </>
  );
};

export default ColumnMenu;
