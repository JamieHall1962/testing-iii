// https://github.com/JamieHall1962/testing-iii/pull/1

// Test away
import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Dashboard from './dashboard'

describe('<Dashboard />',()=>{
  
    describe ('Buttons should become disabled', () => {
        const {getByTestId, getByText} = render (<Dashboard />);
        const lock = getByTestId ('lockUnlock');
        const open = getByTestId ('openClose');
        const lockButton = getByTestId ('lockUnlockButton');
        const closeButton = getByTestId ('openCloseButton');
        it ('Lock button is disabled', () => {
            expect (closeButton.disabled).toBe(true);
        });
        it ('Close button is disabled', () => {
            fireEvent.click (closeButton);
            fireEvent.click (lockButton);
            expect (closeButton.disabled).toBe(true);
        });

    });
    describe ('Buttons should become active', () => {
        const {getByTestId, getByText} = render (<Dashboard />);
        const lock = getByTestId ('lockUnlock');
        const open = getByTestId ('openClose');
        const lockButton = getByTestId ('lockUnlockButton');
        const closeButton = getByTestId ('openCloseButton');
        it('Lock button reactivates', () => {
            fireEvent.click(lockButton)
            expect (lockButton.disabled).toBe(false);
        });
        it('Close Button Reactivates', () => {            
            fireEvent.click(lockButton)
            fireEvent.click (closeButton);
            fireEvent.click (lockButton);
            expect (lockButton.disabled).toBe(false);
        });

    });
   
    

})