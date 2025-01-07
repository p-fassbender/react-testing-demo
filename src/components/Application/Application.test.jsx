import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Application } from "./Application";

describe('Application', () => {
    test('renders correctly', () => {
        render(<Application />)

        // <h1>Job application form</h1>
        const pageHeading = screen.getByRole('heading', {
            level: 1
        })
        expect(pageHeading).toBeInTheDocument()

        // <h2>Section 1</h2>
        const sectionHeading = screen.getByRole('heading', {
            level: 2
        })
        expect(sectionHeading).toBeInTheDocument()

        // <p>All fields are mandatory</p>
        const paragraphElement = screen.getByText('All fields are mandatory')
        expect(paragraphElement).toBeInTheDocument()

        // <span title="close">X</span>
        const closeElement = screen.getByTitle('close')
        expect(closeElement).toBeInTheDocument()

        // <img src="https://placehold.co/400" alt="a placeholder image" />
        const imageElement = screen.getByAltText('a placeholder image')
        expect(imageElement).toBeInTheDocument()

        // <div data-testid="custom-element">Custom HTML element</div>
        const customElement = screen.getByTestId('custom-element')
        expect(customElement).toBeInTheDocument()

        // <label htmlFor="name">Name</label>
        // <input type="text" id="name" placeholder="Fullname" value="Preston" onChange={() => { }}/>
        const nameElement = screen.getByRole('textbox', {
            name: 'Name'
        })
        expect(nameElement).toBeInTheDocument()

        const nameElement2 = screen.getByLabelText('Name', {
            selector: 'input'
        })
        expect(nameElement2).toBeInTheDocument()

        const nameElement3 = screen.getByPlaceholderText('Fullname')
        expect(nameElement3).toBeInTheDocument()

        const nameElement4 = screen.getByDisplayValue('Preston')
        expect(nameElement4).toBeInTheDocument()

        // <label htmlFor="bio">Bio</label>
        // <textarea id="bio" name="bio" />
        const bioElement = screen.getByRole('textbox', {
            name: 'Bio'
        })
        expect(bioElement).toBeInTheDocument()

        // <label htmlFor="job-location">Job location</label>
        // <select id="job-location">
        //     <option value="">Select a country</option>
        //     ...
        // </select>
        const jobLocationElement = screen.getByRole('combobox')
        expect(jobLocationElement).toBeInTheDocument()

        // <label><input type="checkbox" id="terms" /> I agree to the terms and conditions </label>
        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()

        const termsElement2 = screen.getByLabelText('I agree to the terms and conditions')
        expect(termsElement2).toBeInTheDocument()

        // <button disabled>Submit</button>
        const submitButtonElement = screen.getByRole('button')
        expect(submitButtonElement).toBeInTheDocument()
    })
})