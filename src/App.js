import { useThemeContext } from './contexts/ThemeContext';
import Router from './router';

export default function App() {
  const {theme} =useThemeContext();
  return (
    <div className={theme}>
        <Router />
    </div>
  );
}
