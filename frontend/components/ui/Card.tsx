import React from 'react';
import { cn } from '@/lib/utils';

export const Card = ({ className, children }) => {
    return (
        <div className={cn("bg-white rounded-2xl shadow p-4 border", className)}>
            {children}
        </div>
    );
};

export const CardHeader = ({ children, className }) => {
    return (
        <div className={cn("mb-3", className)}>
            {children}
        </div>
    );
};

export const CardTitle = ({ children, className }) => {
    return (
        <h3 className={cn("text-lg font-semibold", className)}>
            {children}
        </h3>
    );
};

export const CardDescription = ({ children, className }) => {
    return (
        <p className={cn("text-sm text-gray-500", className)}>
            {children}
        </p>
    );
};

export const CardContent = ({ children, className }) => {
    return (
        <div className={cn("text-sm", className)}>
            {children}
        </div>
    );
};


