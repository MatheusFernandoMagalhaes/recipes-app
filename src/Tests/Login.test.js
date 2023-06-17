import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from "../App";
import renderWithRouter from "./helpers/renderWithRouter";

const email = 'email@email.com'
const password = '1234567'

describe('Teste para página de Login', () => {
  test('Se os inputs são renderizados na tela e se é possível digitar no input de email', () => {
    renderWithRouter(<App />)
    const emailInput = screen.getByPlaceholderText(/email/i);
    expect(emailInput).toBeInTheDocument();
    userEvent.type(emailInput, email);
    expect(emailInput).toHaveValue(email)
  })
  test('Se os inputs são renderizados na tela e se é possível digitar no input de senha', () => {
    renderWithRouter(<App />)
    const passwordInput = screen.getByPlaceholderText(/password/i)
    expect(passwordInput).toBeInTheDocument();
    userEvent.type(passwordInput, password);
    expect(passwordInput).toHaveValue(password)
  })
  test('Se o botão inicia desabilitado', () => {
    renderWithRouter(<App />)
    const button = screen.getByRole('button', { name: /enter/i })
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  })
  test('Se o botão é habilitado após as validações', () => {
    renderWithRouter(<App />)
    const button = screen.getByRole('button', { name: /enter/i })
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i)
    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    expect(button).not.toBeDisabled();
  })
  test('Se o botão redireciona após clicado', () => {
    const { history } = renderWithRouter(<App />)
    const button = screen.getByRole('button', { name: /enter/i })
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i)
    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    userEvent.click(button);
    expect(history.location.pathname).toBe('/foods')
  })
});