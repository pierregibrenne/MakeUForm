import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import SignUp from './SignUp'

const mockHandleSubmit = vi.fn()

const setup = () => {
  const utils = render(
    <SignUp
      email=""
      setEmail={vi.fn()}
      password=""
      setPassword={vi.fn()}
      error={null}
      data={null}
      handleSubmit={mockHandleSubmit}
    />
  )
  const emailInput = utils.getByLabelText('Email')
  const passwordInput = utils.getByLabelText('Password')
  const submitButton = utils.getByRole('button', { name: /sign up/i })
  return {
    emailInput,
    passwordInput,
    submitButton,
    ...utils,
  }
}

describe('SignUp Component', () => {
  it('renders sign up form', () => {
    setup()
    expect(screen.getAllByText(/sign up/i)).toHaveLength(2) // Vérifie qu'il y a deux éléments avec le texte "Sign Up"
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
  })

  it('calls handleSubmit on form submission', () => {
    const { emailInput, passwordInput, submitButton } = setup()
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password' } })
    fireEvent.submit(submitButton) // Utilise fireEvent.submit au lieu de fireEvent.click
    expect(mockHandleSubmit).toHaveBeenCalled()
  })

  it('displays error message when error prop is set', () => {
    render(
      <SignUp
        email=""
        setEmail={vi.fn()}
        password=""
        setPassword={vi.fn()}
        error="Invalid credentials"
        data={null}
        handleSubmit={mockHandleSubmit}
      />
    )
    expect(screen.getByText('Invalid credentials')).toBeInTheDocument()
  })

  it('displays success message when data prop is set', () => {
    render(
      <SignUp
        email=""
        setEmail={vi.fn()}
        password=""
        setPassword={vi.fn()}
        error={null}
        data={{ user: 'test' }}
        handleSubmit={mockHandleSubmit}
      />
    )
    expect(screen.getByText('Sign up successful!')).toBeInTheDocument()
  })
})