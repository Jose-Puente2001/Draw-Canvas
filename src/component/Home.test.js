import { render, screen } from '@testing-library/react';
import Home from "./Home";


test('should show title', () => {
   render(<Home />);
   expect(screen.getByText(/Draw-Canvas: One design for everything/i)).toBeInTheDocument();
})

test('should load the image without error', () => {
   render(<Home />);
   const image = screen.getByRole('img')
   expect(image).toHaveAttribute('src', './img/moster_artist.svg')

})

