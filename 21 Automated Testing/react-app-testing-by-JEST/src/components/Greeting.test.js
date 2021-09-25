// Custom testing

import {render, screen} from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';


describe('Greeting component', () => {
    test('renders "Hello World" as a text', () => {
        // 1. Arrange
        render(<Greeting />);
    
        // 2. Act
        // ... nothing
    
        // 3. Assert
        const helloWorldElement = screen.getByText('Hello World', {exact: true });
        expect(helloWorldElement).toBeInTheDocument();
    });


    test('renders "good to see you" if the button was NOT clicked', () => {
        // 1. Arrange
        render(<Greeting />);
    
        // 2. Act
        // ... nothing
    
        // 3. Assert
        const outputElement = screen.getByText('good to see you', {exact: false });
        expect(outputElement).toBeInTheDocument();
    });


    test('renders "Changed!" if the button was clicked', () => {
        // 1. Arrange
        render(<Greeting />);
    
        // 2. Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
    
        // 3. Assert
        const outputElement = screen.getByText('Changed!');     // by default exact is TRUE
        expect(outputElement).toBeInTheDocument();
    });

    test('does not render "good to see you" if the button was NOT clicked', () => {
        // 1. Arrange
        render(<Greeting />);
    
        // 2. Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
    
        // 3. Assert
        const outputElement = screen.queryByText('good to see you', {exact: false});  
        expect(outputElement).toBeNull();
    });

});

