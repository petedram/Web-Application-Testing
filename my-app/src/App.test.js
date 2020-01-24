import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { addBall } from './components/Dashboard';



test("ball 4 reset", () => {
 const ball = addBall(3);
 expect(ball).toBe(0) 


});

test("ball count increments", () => {
  const ball = addBall(1)
  expect(ball).toBe(2)
})