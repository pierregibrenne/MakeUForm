import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import Login from './Login'

const mockHandleSubmit = vi.fn()

const setup = () => {
  const utils = render(
    <Login
      email=""
      setEmail={vi.fn()}
      password=""
      setPassword={vi.fn()}
      error={null}
      isSubmitting={false}
      handleSubmit={mockHandleSubmit}
    />
  )
  const emailInput = utils.getByLabelText('Email')
  const passwordInput = utils.getByLabelText('Password')
  const submitButton = utils.getByRole('button', { name: /login/i })
  return {
    emailInput,
    passwordInput,
    submitButton,
    ...utils,
  }
}

describe('Login Component', () => {
  it('renders login form', () => {
    setup()
    expect(screen.getAllByText(/login/i)).toHaveLength(2) // Vérifie qu'il y a deux éléments avec le texte "Login"
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
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
      <Login
        email=""
        setEmail={vi.fn()}
        password=""
        setPassword={vi.fn()}
        error="Invalid credentials"
        isSubmitting={false}
        handleSubmit={mockHandleSubmit}
      />
    )
    expect(screen.getByText('Invalid credentials')).toBeInTheDocument()
  })

  it('disables submit button when isSubmitting is true', () => {
    render(
      <Login
        email=""
        setEmail={vi.fn()}
        password=""
        setPassword={vi.fn()}
        error={null}
        isSubmitting={true}
        handleSubmit={mockHandleSubmit}
      />
    )
    expect(screen.getByRole('button', { name: /logging in/i })).toBeDisabled()
  })
})