"use client"

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { FiCheck, FiX, FiInfo, FiAlertTriangle } from 'react-icons/fi';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
    id: string;
    type: ToastType;
    message: string;
    duration?: number;
}

interface ToastContextType {
    showToast: (type: ToastType, message: string, duration?: number) => void;
    success: (message: string, duration?: number) => void;
    error: (message: string, duration?: number) => void;
    info: (message: string, duration?: number) => void;
    warning: (message: string, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

interface ToastProviderProps {
    children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const removeToast = useCallback((id: string) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    const showToast = useCallback((type: ToastType, message: string, duration = 3000) => {
        const id = Math.random().toString(36).substr(2, 9);
        const toast: Toast = { id, type, message, duration };

        setToasts(prev => [...prev, toast]);

        if (duration > 0) {
            setTimeout(() => removeToast(id), duration);
        }
    }, [removeToast]);

    const success = useCallback((message: string, duration?: number) => {
        showToast('success', message, duration);
    }, [showToast]);

    const error = useCallback((message: string, duration?: number) => {
        showToast('error', message, duration);
    }, [showToast]);

    const info = useCallback((message: string, duration?: number) => {
        showToast('info', message, duration);
    }, [showToast]);

    const warning = useCallback((message: string, duration?: number) => {
        showToast('warning', message, duration);
    }, [showToast]);

    const getToastIcon = (type: ToastType) => {
        switch (type) {
            case 'success':
                return <FiCheck className="size-5" />;
            case 'error':
                return <FiX className="size-5" />;
            case 'warning':
                return <FiAlertTriangle className="size-5" />;
            case 'info':
            default:
                return <FiInfo className="size-5" />;
        }
    };

    const getToastStyles = (type: ToastType) => {
        switch (type) {
            case 'success':
                return 'bg-success text-success-content border-success/20';
            case 'error':
                return 'bg-error text-error-content border-error/20';
            case 'warning':
                return 'bg-warning text-warning-content border-warning/20';
            case 'info':
            default:
                return 'bg-info text-info-content border-info/20';
        }
    };

    return (
        <ToastContext.Provider value={{ showToast, success, error, info, warning }}>
            {children}

            {/* Toast Container */}
            <div className="fixed top-4 right-4 z-50 space-y-2">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`
              flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border
              transform transition-all duration-300 ease-out
              animate-in slide-in-from-right-full
              ${getToastStyles(toast.type)}
            `}
                    >
                        {getToastIcon(toast.type)}
                        <span className="font-medium">{toast.message}</span>
                        <button
                            onClick={() => removeToast(toast.id)}
                            className="ml-2 hover:opacity-70 transition-opacity"
                        >
                            <FiX className="size-4" />
                        </button>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};

// Export a simple message object for easy migration from Ant Design
export const message = {
    success: (text: string, duration?: number) => {
        // This will be replaced by the hook in components
        console.log('Success:', text);
    },
    error: (text: string, duration?: number) => {
        console.log('Error:', text);
    },
    info: (text: string, duration?: number) => {
        console.log('Info:', text);
    },
    warning: (text: string, duration?: number) => {
        console.log('Warning:', text);
    },
}; 