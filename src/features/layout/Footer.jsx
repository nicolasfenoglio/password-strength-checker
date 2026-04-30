import GitHubIcon from '../../shared/icons/GitHubIcon';

function Footer() {
  return (
    <footer className="bg-bg text-muted py-4 px-4 flex items-center justify-between shadow-elev sticky top-0 z-10">
      <p>
        &copy; 2026.{' '}
        <a
          href="https://nicofeno.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer hover:underline hover:text-primary transition-colors"
        >
          Nicolás Fenoglio, estudiante de Ingenieria en Sistemas de la
          Información.
        </a>
      </p>
      <p>
        <a
          className="flex items-center gap-1 hover:cursor-pointer hover:underline hover:text-primary transition-colors"
          href="https://github.com/nicolasfenoglio/password-strength-checker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="size-4" />
          GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;
