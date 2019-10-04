import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import PlayerCard from '../PlayerCard';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<PlayerCard player={{name: 'Shaun Orpen'}} />);
});

describe('PlayerCard', () => {  
    it('shows the correct player', () => {
      const elementWithNameText = tools.queryByText(/Shaun Orpen/i);
      expect(elementWithNameText).toBeInTheDocument();
    });
});