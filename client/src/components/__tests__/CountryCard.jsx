import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import CountryCard from '../CountryCard';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<CountryCard 
        country={'Argentina'} 
        players={[{name: 'Shaun Orpen', id: 1}]} 
        key={'Argentina'} />);
});

describe('CountryCard', () => {  
    it('shows the correct country', () => {
        const elementWithNameText = tools.queryByText(/Argentina/i);
        expect(elementWithNameText).toBeInTheDocument();
      });

    it('shows the correct player', () => {
      const elementWithNameText = tools.queryByText(/Shaun Orpen/i);
      expect(elementWithNameText).toBeInTheDocument();
    });
});