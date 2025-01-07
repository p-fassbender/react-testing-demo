import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";
import "@testing-library/jest-dom";

/*
* Greet should render the text hello and if a name is passed in to the component it should render hello followed by the name
*/
describe('Greet', () => {
    test('renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText(/Hello/)
        expect(textElement).toBeInTheDocument()
    })

    test('renders with a name', () => {
        render(<Greet name='Preston' />)
        const textElement = screen.getByText('Hello Preston')
        expect(textElement).toBeInTheDocument()
    })
})