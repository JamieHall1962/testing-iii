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
            expect (closeButton).toBeDisabled();
        });
        it ('Close button is disabled', () => {
            fireEvent.click (closeButton);
            fireEvent.click (lockButton);
            expect (closeButton).toBeDisabled ();
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
            expect (lockButton).not.toBeDisabled ();
        });
        it('Close Button Reactivates', () => {            
            fireEvent.click(lockButton)
            fireEvent.click (closeButton);
            fireEvent.click (lockButton);
            expect (lockButton).not.toBeDisabled ();
        });

    });
    // describe ('Indicators whould flip between green and red', () => {
    //     // const lock = getByTestId ('lockUnlock');
    //     // const open = getByTestId ('openClose');
    //     const lockButton = getByTestId ('lockUnlockButton');
    //     const closeButton = getByTestId ('openCloseButton');
    //     it.skip ('Lock button is green on render', () => {
    //         expect (lock).toHaveClassName('green-led')
    //     });
    //     it.skip ('gate button is green on render', () => {
    //         expect (open).toHaveClassName ('green-led');
    //     });
    //     it.skip('closed gate is red',()=>{
    //         fireEvent.click(lockButton)
    //         expect(lock).toHaveClassName('red-led')
    //     })
    //     it.skip('locked gate is red', () => {
    //         fireEvent.click (closeButton);
    //         expect (open).toHaveClassName ('red-led');
    //     });

    // });
    

})