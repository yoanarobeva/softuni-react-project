import { render, screen } from '@testing-library/react';
import About from "./About";

it('Should show about information', () => {
    const text = 'About Us';
    render(<About />);

    expect(screen.getByText(text)).toBeInTheDocument();
});