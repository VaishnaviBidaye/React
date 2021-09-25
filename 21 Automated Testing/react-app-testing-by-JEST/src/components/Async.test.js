// Custom testing

import {render, screen} from '@testing-library/react';
import Async from './Async';


describe('Async Component', () => {
    test('render posts if request succeeds', async () => {
        // 1. Arrange
        window.fetch = jest.fn();      // creates dummy fetch function
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post'}],
        });
        render(<Async />);
    
        // 2. Act
        // ... nothing
    
        // 3. Assert
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
});