import { render, screen, cleanup } from '@testing-library/react'
import Home from '../Home'

test('should render home component', () => {
    render(<Home/>)
    const homeElement = screen.getByTestId('home-1');
    expect(homeElement).toBeInTheDocument();
    expect(homeElement).toHave
})
