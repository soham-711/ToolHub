import { Moon, Sun, Monitor, Check } from "lucide-react";
import { useTheme, type ThemePreference } from "../../hooks/useTheme";
import "./header.css";

const options: {
  value: ThemePreference;
  label: string;
  Icon: typeof Sun;
}[] = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
];

function Header() {
  const { preference, setPreference } = useTheme();

  return (
    <header className="site-header">
      <a href="/" className="brand" aria-label="Utility Hub home">
        <span className="brand-mark">U</span>
        <span>Utility Hub</span>
      </a>

      <nav className="header-actions" aria-label="Main navigation">
        <a href="#tools">Explore tools</a>

        <div className="theme-switcher" aria-label="Theme preference">
          {options.map(({ value, label, Icon }) => (
            <button
              key={value}
              type="button"
              className={`theme-option ${preference === value ? "active" : ""}`}
              aria-label={`${label} theme`}
              aria-pressed={preference === value}
              title={`${label} theme`}
              onClick={() => setPreference(value)}
            >
              <Icon size={16} />
              <span>{label}</span>
              {preference === value && (
                <Check className="theme-check" size={13} />
              )}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
