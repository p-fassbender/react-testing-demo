import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { CounterTwo } from "./CounterTwo";
import userEvent from "@testing-library/user-event";

describe('CounterTwo', () => {
    test('should render correctly', () => {
        render(<CounterTwo count={0} />)
        const textElement = screen.getByText("Counter Two")
        expect(textElement).toBeInTheDocument()
    })

    test('should call the handlers', async () => {
        const user = userEvent.setup()
        const incrementHandler = jest.fn()
        const decrementHandler = jest.fn()
        render(<CounterTwo count={0} handleIncrement={incrementHandler} handleDecrement={decrementHandler} />)
        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        const decrementButton = screen.getByRole('button', { name: 'Decrement' })
        await user.click(incrementButton)
        await user.click(decrementButton)
        expect(incrementHandler).toHaveBeenCalledTimes(1)
        expect(decrementHandler).toHaveBeenCalledTimes(1)
    })
})