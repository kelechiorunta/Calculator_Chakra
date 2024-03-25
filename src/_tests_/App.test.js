import React from 'react';
import App from '../App';
import { create } from 'react-test-renderer'
import { getByTestId, render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Calculator from '../Components/Calculator';



describe("Test 3", ()=>{
    test("Confirm Calculator Btns", () =>{
        const { getByText, getByTestId, asFragment } = render(<Calculator/>)
        expect(getByText("1")).toBeInTheDocument()
        expect(getByText("2")).toBeInTheDocument()
        expect(getByText("3")).toBeInTheDocument()
        expect(getByText("4")).toBeInTheDocument()
        expect(getByTestId('display')).toBeInTheDocument()
        expect(getByTestId('display')).toHaveTextContent(0)
        // fireEvent.click(getByText("1"))
        // expect(getByTestId('display')).toHaveTextContent(1)
        expect(asFragment()).toMatchSnapshot()
    })
})