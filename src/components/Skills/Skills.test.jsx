import { describe, expect, test } from "@jest/globals";
import { render, screen, logRoles } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Skills } from "./Skills";

describe('Skills', () => {
    const skills = ['html', 'css', 'js']

    test('should render correctly', () => {
        render(<Skills skills={skills} />)
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    })

    test('should render a list of skills', () => {
        render(<Skills skills={skills} />)
        const listItemElements = screen.getAllByRole('listitem')
        expect(listItemElements).toHaveLength(skills.length)
    })

    test('should render login button', () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole('button')
        expect(loginButton).toBeInTheDocument()
    })

    test('should NOT render start learning button', () => {
        render(<Skills skills={skills} />)
        const startLearningButton = screen.queryByRole('button', { name: 'Start learning' })
        expect(startLearningButton).not.toBeInTheDocument()
    })

    test('should render start learning button after some time', async () => {
        const view = render(<Skills skills={skills} />)
        logRoles(view.container)
        // screen.debug()
        const startLearningButton = await screen.findByRole('button', { name: 'Start learning' }, { timeout: 2000 })
        expect(startLearningButton).toBeInTheDocument()
        // screen.debug()
    })
})