// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Crucial for theme switching
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
          active: 'var(--primary-active)',
          subtle: 'var(--primary-subtle)',
          emphasis: 'var(--primary-emphasis)',
        },
        'on-primary': {
          DEFAULT: 'var(--on-primary)',
          subtle: 'var(--on-primary-subtle)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          hover: 'var(--secondary-hover)',
          active: 'var(--secondary-active)',
          subtle: 'var(--secondary-subtle)',
        },
        'on-secondary': {
          DEFAULT: 'var(--on-secondary)',
          subtle: 'var(--on-secondary-subtle)',
        },
        accent: 'var(--accent)',
        'on-accent': 'var(--on-accent)',
        background: 'var(--background)',
        surface: {
          1: 'var(--surface1)', // Matches --surface1 from your CSS
          2: 'var(--surface2)', // Matches --surface2 from your CSS
          inverse: 'var(--surface-inverse)',
        },
        'on-background': 'var(--on-background)',
        'on-surface-1': 'var(--on-surface1)', // Matches --on-surface1
        'on-surface-2': 'var(--on-surface2)', // Matches --on-surface2
        'on-surface-inverse': 'var(--on-surface-inverse)',
        text: {
          DEFAULT: 'var(--text-default)',
          strong: 'var(--text-strong)',
          muted: 'var(--text-muted)',
          placeholder: 'var(--text-placeholder)',
          link: 'var(--text-link)',
          'link-hover': 'var(--text-link-hover)',
          disabled: 'var(--text-disabled)',
        },
        icon: {
          DEFAULT: 'var(--icon-default)',
          muted: 'var(--icon-muted)',
          disabled: 'var(--icon-disabled)',
        },
        border: {
          DEFAULT: 'var(--border-subtle)',
          subtle: 'var(--border-subtle)',
          interactive: 'var(--border-interactive)',
          strong: 'var(--border-strong)',
          focus: 'var(--border-focus)',
        },
        disabled: {
          bg: 'var(--disabled-bg)',
          content: 'var(--disabled-content)',
        },
        selected: {
          bg: 'var(--selected-bg)',
          content: 'var(--selected-content)',
        },
        error: {
          bg: 'var(--error-bg)',
          border: 'var(--error-border)',
          icon: 'var(--error-icon)',
          text: 'var(--error-text)',
        },
        warning: {
          bg: 'var(--warning-bg)',
          border: 'var(--warning-border)',
          icon: 'var(--warning-icon)',
          text: 'var(--warning-text)',
        },
        success: {
          bg: 'var(--success-bg)',
          border: 'var(--success-border)',
          icon: 'var(--success-icon)',
          text: 'var(--success-text)',
        },
        info: {
          bg: 'var(--info-bg)',
          border: 'var(--info-border)',
          icon: 'var(--info-icon)',
          text: 'var(--info-text)',
        },
        avatar: {
          bg: 'var(--avatar-bg)',
        },
        slider: {
          track: 'var(--slider-track)',
          'track-active': 'var(--slider-track-active)',
          thumb: 'var(--slider-thumb)',
        },
        progress: {
          track: 'var(--progress-track)',
          indicator: 'var(--progress-indicator)',
        },
        scrim: 'var(--scrim)',

        // Panel specific (optional if only used via direct CSS)
        'panel-text': 'var(--panel-text)',
        'panel-text-muted': 'var(--panel-text-muted)',
        'panel-border': 'var(--panel-border)',
        'panel-header-bg': 'var(--panel-header-bg)',
        'panel-background': 'var(--panel-background)',
        'panel-section-border': 'var(--panel-section-border)',
        'panel-input-border': 'var(--panel-input-border)',
      },
      fontFamily: {
        sans: ['var(--font-stack)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-mono)', 'ui-monospace'],
      },
      borderRadius: {
        DEFAULT: 'var(--input-border-radius)', // Makes Tailwind's `rounded` use your theme var
        input: 'var(--input-border-radius)',   // For a specific `rounded-input` class if you want
        lg: 'var(--input-border-radius)',      // Example override for `rounded-lg`
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      ringColor: { // For focus rings
        DEFAULT: 'var(--border-focus)', // Default focus ring color
        focus: 'var(--border-focus)', // For `ring-focus` utility
        'panel-input-focus': 'var(--panel-input-focus-ring)',
      },
      // If you have opacity tokens, etc., map them here:
      // opacity: {
      //   'overlay': 'var(--overlay-opacity, 0.6)', // Example
      // }
    },
  },
  plugins: [],
}