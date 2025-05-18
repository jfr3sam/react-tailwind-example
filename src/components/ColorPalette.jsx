// src/components/ColorPalette.jsx
import React from 'react';
import { Copy, Check } from 'lucide-react';

const ColorPalette = () => {
    const [copied, setCopied] = React.useState(null);

    // Define color categories to display
    const colorCategories = [
        {
            name: 'Primary Colors',
            colors: [
                { name: 'primary', label: 'Primary' },
                { name: 'primary-hover', label: 'Hover' },
                { name: 'primary-active', label: 'Active' },
                { name: 'primary-subtle', label: 'Subtle' },
                { name: 'on-primary', label: 'On Primary' },
            ]
        },
        {
            name: 'Secondary Colors',
            colors: [
                { name: 'secondary', label: 'Secondary' },
                { name: 'secondary-hover', label: 'Hover' },
                { name: 'secondary-active', label: 'Active' },
                { name: 'secondary-subtle', label: 'Subtle' },
                { name: 'on-secondary', label: 'On Secondary' },
            ]
        },
        {
            name: 'Surface Colors',
            colors: [
                { name: 'background', label: 'Background' },
                { name: 'surface1', label: 'Surface 1' },
                { name: 'surface2', label: 'Surface 2' },
            ]
        },
        {
            name: 'Text Colors',
            colors: [
                { name: 'text-default', label: 'Default' },
                { name: 'text-strong', label: 'Strong' },
                { name: 'text-muted', label: 'Muted' },
                { name: 'text-link', label: 'Link' },
            ]
        },
    ];

    // Function to get CSS variable value
    const getCssVar = (name) => {
        return getComputedStyle(document.documentElement).getPropertyValue(`--${name}`).trim();
    };

    // Function to copy color value to clipboard
    const copyToClipboard = (value, name) => {
        navigator.clipboard.writeText(value);
        setCopied(name);
        setTimeout(() => setCopied(null), 1500);
    };

    return (
        <div className="bg-surface-1 dark:bg-surface-1 rounded-lg shadow-lg border border-border-subtle dark:border-border-subtle p-6">
            <h2 className="text-2xl font-bold text-text-strong dark:text-text-strong mb-6">
                Theme Color Palette
            </h2>

            <div className="space-y-8">
                {colorCategories.map((category) => (
                    <div key={category.name}>
                        <h3 className="text-lg font-semibold text-text-strong dark:text-text-strong mb-3 border-b border-border-subtle dark:border-border-subtle pb-2">
                            {category.name}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {category.colors.map((color) => {
                                const colorValue = getCssVar(color.name);
                                return (
                                    <div key={color.name} className="flex flex-col">
                                        <div
                                            className="h-16 rounded-t-lg w-full flex items-center justify-center shadow-sm"
                                            style={{ backgroundColor: colorValue }}
                                        >
                                            {color.name.includes('on-') && (
                                                <span className="text-xs font-medium" style={{ color: `var(--${color.name.replace('on-', '')})` }}>
                                                    Text on {color.name.replace('on-', '')}
                                                </span>
                                            )}
                                        </div>
                                        <div className="bg-background dark:bg-background border-x border-b border-border-subtle dark:border-border-subtle rounded-b-lg p-2">
                                            <div className="text-sm font-medium text-text-strong dark:text-text-strong mb-1">
                                                {color.label}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <code className="text-xs text-text-muted dark:text-text-muted">
                                                    {colorValue}
                                                </code>
                                                <button
                                                    onClick={() => copyToClipboard(colorValue, color.name)}
                                                    className="p-1 text-icon-muted dark:text-icon-muted hover:text-primary dark:hover:text-primary transition-colors"
                                                    title="Copy color value"
                                                >
                                                    {copied === color.name ? (
                                                        <Check size={14} className="text-success-icon dark:text-success-icon" />
                                                    ) : (
                                                        <Copy size={14} />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorPalette;