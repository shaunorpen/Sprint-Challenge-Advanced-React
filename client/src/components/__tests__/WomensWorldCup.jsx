import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import WomensWorldCup from '../WomensWorldCup';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<WomensWorldCup 
    playerData={[{name: "Alex Morgan", country: "United States", searches: 100, id: 0}]} 
    setPlayerData={() => null}/>)
});

describe('WomensWorldCup', () => {  
  it('shows the correct title', () => {
    const elementWithNameText = tools.queryByText(/Women's World Cup/i);
    expect(elementWithNameText).toBeInTheDocument();
  });
  
  it('shows the correct country', () => {
      const elementWithNameText = tools.queryByText(/United States/i);
      expect(elementWithNameText).toBeInTheDocument();
  });

  it('shows the correct player', () => {
    const elementWithNameText = tools.queryByText(/Alex Morgan/i);
    expect(elementWithNameText).toBeInTheDocument();
  });
});