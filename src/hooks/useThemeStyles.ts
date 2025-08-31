import { useTheme } from '../context/ThemeContext';
import { themes } from '../theme/colors';

export const useThemeStyles = () => {
  const { theme } = useTheme();
  const colors = themes[theme];

  // Helper function to get theme-aware Tailwind classes
  const getThemeClasses = () => {
    if (theme === 'dark') {
      return {
        background: 'bg-black',
        text: 'text-white',
        card: 'bg-gray-900',
        border: 'border-gray-700',
        button: 'bg-blue-600',
        buttonText: 'text-white',
      };
    } else {
      return {
        background: 'bg-white',
        text: 'text-black',
        card: 'bg-gray-100',
        border: 'border-gray-300',
        button: 'bg-blue-500',
        buttonText: 'text-white',
      };
    }
  };

  return {
    colors,
    theme,
    classes: getThemeClasses(),
  };
};
