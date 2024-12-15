import { ReactNode } from 'react';

const Card = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full grow rounded-theme bg-neutral-100 p-4 box-border">
            {children}
        </div>
    );
};

export default Card;
