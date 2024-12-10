interface LinkProps {
  href: string;
  text: string;
}
const Link = ({ href, text }: LinkProps) => (
  <a
    className="underline decoration-theme underline-offset-2"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
);

export default Link;
