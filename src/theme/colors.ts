export const themes = {
  light: {
    background: '#ffffff',
    text: '#000000',
    icon: '#000000',
    primary: '#007AFF',
    secondary: '#5856D6',
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    border: '#E5E5E7',
    card: '#F2F2F7',
  },
  dark: {
    background: '#000000',
    text: '#ffffff',
    icon: '#ffffff',
    primary: '#0A84FF',
    secondary: '#5E5CE6',
    success: '#30D158',
    warning: '#FF9F0A',
    error: '#FF453A',
    border: '#38383A',
    card: '#1C1C1E',
  },
} as const;

export type ThemeColors = typeof themes.light;
