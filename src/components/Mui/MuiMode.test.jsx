import { describe, expect, test } from "@jest/globals";
// import { render, screen } from "@testing-library/react";
import { render, screen } from "../../test-utils";
import "@testing-library/jest-dom";

import { MuiMode } from "./MuiMode";

describe('MuiMode', () => {
    test('should render text correctly', () => {
        render(<MuiMode />)
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('dark mode')
    })
})