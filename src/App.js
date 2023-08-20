import { useThemeContext } from './contexts/ThemeContext';
import Router from './router';
import './App.css';
export default function App() {
  const {theme} =useThemeContext();
  return (
    <div className={theme}>
        <Router />
    </div>
  );
}
