import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

describe('Counter', () => {
    test('should render correctly', () => {
        render(<Counter />)

        const countElement = screen.getByRole('heading')
        expect(countElement).toBeInTheDocument()

        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        expect(incrementButton).toBeInTheDocument()
    })

    test('should render a count of 0', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('0')
    })

    test('should render a count of 1 after clicking the increment button', async () => {
        const user = userEvent.setup()
        render(<Counter />)
        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        await user.click(incrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')
    })

    test('should render a count of 2 after clicking the increment button twice', async () => {
        const user = userEvent.setup()
        render(<Counter />)
        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        await user.click(incrementButton)
        await user.click(incrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('2')
    })

    test('should render a count of 10 after clicking the set button', async () => {
        const user = userEvent.setup()
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton')
        await user.type(amountInput, '10')
        expect(amountInput).toHaveValue(10)
        const setButton = screen.getByRole('button', { name: 'Set' })
        await user.click(setButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('10')
    })

    test('should focus the elements in the right order', async () => {
        const user = userEvent.setup()
        render(<Counter />)
        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        const amountInput = screen.getByRole('spinbutton')
        const setButton = screen.getByRole('button', { name: 'Set' })
        await user.tab()
        expect(incrementButton).toHaveFocus()
        await user.tab()
        expect(amountInput).toHaveFocus()
        await user.tab()
        expect(setButton).toHaveFocus()
    })
})