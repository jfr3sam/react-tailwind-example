// src/App.jsx
import React, { useState } from 'react';
import ThemeToggleButton from './components/ThemeToggleButton';
import ColorPalette from './components/ColorPalette';
import { Mail, Shield, Info } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('demo');

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-background">
      {/* Header */}
      <header className="bg-surface-1 dark:bg-surface-1 p-4 border-b border-border-subtle dark:border-border-subtle shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary">
            Themed UI Kit
          </h1>
          <div className="flex items-center gap-4">
            <ThemeToggleButton />
            <div className="flex text-text-muted dark:text-text-muted text-sm items-center">
              <Info size={16} className="mr-1" />
              <span className="hidden sm:inline">Toggle Light/Dark Mode</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex-1 p-4 md:p-6 space-y-6">
        {/* Tabs */}
        <div className="flex space-x-2 border-b border-border-subtle dark:border-border-subtle">
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-4 py-2 font-medium ${activeTab === 'demo'
                ? 'text-primary dark:text-primary border-b-2 border-primary dark:border-primary -mb-px'
                : 'text-text-muted dark:text-text-muted hover:text-text-default dark:hover:text-text-default'
              }`}
          >
            Components
          </button>
          <button
            onClick={() => setActiveTab('palette')}
            className={`px-4 py-2 font-medium ${activeTab === 'palette'
                ? 'text-primary dark:text-primary border-b-2 border-primary dark:border-primary -mb-px'
                : 'text-text-muted dark:text-text-muted hover:text-text-default dark:hover:text-text-default'
              }`}
          >
            Color Palette
          </button>
        </div>

        {/* Demo Tab Content */}
        {activeTab === 'demo' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-surface-1 dark:bg-surface-1 p-6 rounded-lg shadow-lg border border-border-subtle dark:border-border-subtle">
              <h2 className="text-2xl font-semibold text-text-strong dark:text-text-strong mb-3">
                Sample Card
              </h2>
              <p className="text-text-default dark:text-text-default mb-4">
                This card uses themed background, text, and border colors.
                The button below also uses your theme's primary colors.
              </p>
              <div className="space-y-2 space-x-4">
                <button className="w-full sm:w-auto px-6 py-2 bg-primary text-on-primary rounded-input font-medium hover:bg-primary-hover active:bg-primary-active transition-colors shadow-sm">
                  Primary Action
                </button>
                <button className="w-full sm:w-auto px-6 py-2 bg-secondary text-on-secondary rounded-input font-medium hover:bg-secondary-hover active:bg-secondary-active transition-colors shadow-sm">
                  Secondary Action
                </button>
              </div>
            </div>

            {/* Form Example */}
            <div className="bg-surface-2 dark:bg-surface-2 p-6 rounded-lg shadow-lg border border-border-subtle dark:border-border-subtle">
              <h2 className="text-2xl font-semibold text-text-strong dark:text-text-strong mb-4">
                Input Fields
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-muted dark:text-text-muted mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-icon-muted dark:text-icon-muted" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full pl-10 pr-3 py-2 border border-border-interactive dark:border-border-interactive bg-background dark:bg-background text-text-default dark:text-text-default placeholder-text-placeholder dark:placeholder-text-placeholder rounded-input focus:outline-none focus:ring-2 focus:ring-border-focus dark:focus:ring-border-focus focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-text-muted dark:text-text-muted mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Shield className="h-5 w-5 text-icon-muted dark:text-icon-muted" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full pl-10 pr-3 py-2 border border-border-interactive dark:border-border-interactive bg-background dark:bg-background text-text-default dark:text-text-default placeholder-text-placeholder dark:placeholder-text-placeholder rounded-input focus:outline-none focus:ring-2 focus:ring-border-focus dark:focus:ring-border-focus focus:border-transparent"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-2 bg-secondary text-on-secondary rounded-input font-medium hover:bg-secondary-hover active:bg-secondary-active transition-colors shadow-sm"
                >
                  Submit Form
                </button>
              </form>
            </div>

            {/* Progress Bar */}
            <div className="bg-surface-1 dark:bg-surface-1 p-6 rounded-lg shadow-lg border border-border-subtle dark:border-border-subtle">
              <h2 className="text-2xl font-semibold text-text-strong dark:text-text-strong mb-3">
                Progress Indicators
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-text-muted dark:text-text-muted">25% Complete</span>
                    <span className="text-sm text-text-muted dark:text-text-muted">25/100</span>
                  </div>
                  <div className="w-full bg-progress-track dark:bg-progress-track rounded-full h-2 overflow-hidden">
                    <div className="bg-progress-indicator dark:bg-progress-indicator h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-text-muted dark:text-text-muted">75% Complete</span>
                    <span className="text-sm text-text-muted dark:text-text-muted">75/100</span>
                  </div>
                  <div className="w-full bg-progress-track dark:bg-progress-track rounded-full h-2 overflow-hidden">
                    <div className="bg-progress-indicator dark:bg-progress-indicator h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alert Messages */}
            <div className="bg-surface-2 dark:bg-surface-2 p-6 rounded-lg shadow-lg border border-border-subtle dark:border-border-subtle">
              <h2 className="text-2xl font-semibold text-text-strong dark:text-text-strong mb-3">
                Alert Messages
              </h2>

              <div className="space-y-3">
                <div className="bg-info-bg dark:bg-info-bg rounded-lg border border-info-border dark:border-info-border p-3">
                  <p className="text-info-text dark:text-info-text">This is an informational message.</p>
                </div>
                <div className="bg-success-bg dark:bg-success-bg rounded-lg border border-success-border dark:border-success-border p-3">
                  <p className="text-success-text dark:text-success-text">Operation completed successfully.</p>
                </div>
                <div className="bg-warning-bg dark:bg-warning-bg rounded-lg border border-warning-border dark:border-warning-border p-3">
                  <p className="text-warning-text dark:text-warning-text">Please proceed with caution.</p>
                </div>
                <div className="bg-error-bg dark:bg-error-bg rounded-lg border border-error-border dark:border-error-border p-3">
                  <p className="text-error-text dark:text-error-text">There was a problem with your request.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Palette Tab Content */}
        {activeTab === 'palette' && <ColorPalette />}
      </main>

      <footer className="bg-surface-1 dark:bg-surface-1 border-t border-border-subtle dark:border-border-subtle mt-auto py-4">
        <div className="container mx-auto px-4 text-center text-sm text-text-muted dark:text-text-muted">
          <p>© {new Date().getFullYear()} Theme Editor Pro Demo. All rights reserved.</p>
          <p className="mt-1">
            This is an example of theme integration. Replace <code>src/styles/app-themes.css</code> with your exported file.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;