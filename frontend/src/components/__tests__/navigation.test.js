import { render, screen, cleanup } from '@testing-library/react'
import Navigation from '../Navigation'

test('should render home component', () => {
    render(<Navigation/>)
    const navElement = screen.getByTestId('nav-1');
    expect(navElement).toBeInTheDocument();
})
