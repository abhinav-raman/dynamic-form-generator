import { ReactNode } from 'react';

const Card = ({ children }: { children?: ReactNode }) => {
    return (
        <div
            data-testid="card-container"
            className="w-full grow rounded-lg sm:rounded-theme bg-neutral-100 p-4 box-border"
        >
            {children}
        </div>
    );
};

export default Card;
