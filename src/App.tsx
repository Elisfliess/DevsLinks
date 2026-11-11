import avatarLight from "./assets/avatar-light.png";
import avatarDark from "./assets/avatar-dark.png";
import { Profile } from "./components/features/Profile";
import { LinkButton } from "./components/features/LinkButton";
import { SocialLinks } from "./components/features/SocialLinks";
import { ThemeToggle } from "./components/ui/ThemeToggle";
import { links } from "./data/links";
import { socials } from "./data/socials";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  // Tema claro/escuro: estado, data-theme no <html> e localStorage.
  const { theme, toggleTheme } = useTheme();

  // Escolhe o avatar conforme o tema ativo (claro ou escuro).
  const avatar = theme === "dark" ? avatarDark : avatarLight;

  return (
    <div className="app-bg flex min-h-screen flex-col items-center px-4 py-8">
      <div className="flex w-full max-w-md flex-col items-center gap-6">
        <Profile
          avatar={avatar}
          name="Lise Fliess"
        />

        <div className="self-center">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        <main className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkButton key={link.id} label={link.label} url={link.url} />
          ))}
        </main>

        <SocialLinks socials={socials} />

        <footer className="mt-4 text-xs text-[var(--text-color)] opacity-60">
          Feito com ♥ — DevLinks
        </footer>
      </div>
    </div>
  );
}
