import React from 'react';
import { cn } from '@/lib/utils';

export const Alert = ({ className, children }) => {
    return (
        <div className={cn("flex items-start p-4 border rounded-lg", className)}>
            {children}
        </div>
    );
};

export const AlertDescription = ({ children, className }) => {
    return (
        <p className={cn("text-sm text-gray-700", className)}>
            {children}
        </p>
    );
};