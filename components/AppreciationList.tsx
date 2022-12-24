import React from 'react';
import styled from 'styled-components';
import Heart from './Heart';

const AppreciationList: React.FC = () => {
  const path = new Date().toISOString().split('T')[0];
  return (
    <AppreciationContainer>
      <List>
        <Item>📕 Patty and Scotty&apos;s mems v2022</Item>
        <Item>🍽 chill dinner w ur fam @ Spago</Item>
        <Item>👫 fun times at Pepperdine and the Grove</Item>
      </List>
      <HeartContainer>
        <Heart path={path} />
      </HeartContainer>
    </AppreciationContainer>
  );
};

const AppreciationContainer = styled.div`
  height: 320px;
  width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 450px) {
    height: 350px;
    width: 100%;
  }
`;

const List = styled.ul`
  font-size: 30px;
  font-family: Mont, Helvetica;
  font-weight: 700;

  @media (max-width: 450px) {
    font-size: 25px;
  }
`;

const Item = styled.li`
  margin: 15px 0px;
`;

const HeartContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export default AppreciationList;
