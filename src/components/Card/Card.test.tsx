import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
    it('renders the Card component', () => {
        const el = render(<Card />);
        expect(el).toBeTruthy();
    });

    it('renders the Card component with children', () => {
        render(
            <Card>
                <p data-testid="test-text">This is some text</p>
            </Card>
        );
        const el = screen.getByTestId('test-text');
        expect(el).toBeTruthy();
    });
});
