import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background-color: rgba(7, 71, 166, 0.9);
  border-radius: 20px;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const LeftCircle = styled.div`
  position: absolute;
  bottom: -25%;
  left: 85px;
  width: 200px;
  height: 200px;
  background-color: rgba(196, 196, 196, 0.3);
  border-radius: 50%;
`;

const RightCircle = styled.div`
  position: absolute;
  top: -22px;
  right: -25px;
  width: 200px;
  height: 200px;
  background-color: rgba(196, 196, 196, 0.3);
  border-radius: 50%;
`;

const Welcome = () => {
  return (
    <div>
      <Box className="mt-4 d-flex justify-content-center align-items-center">
        <LeftCircle />
        <RightCircle />
        <h3 className="text-white">
          Welcome{' '}
          <p className="font-weight-bolder h1" style={{color: '#f4b04e'}}>
            John Walker
          </p>
        </h3>
      </Box>
    </div>
  );
};

export default Welcome;
