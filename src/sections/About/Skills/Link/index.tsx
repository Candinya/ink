import type { PropsWithChildren } from "react";

interface LinkProps extends PropsWithChildren {
  href: string;
}
const Link = ({ href, children }: LinkProps) => (
  <a
    href={href}
    target="_blank"
    className="underline underline-offset-4 decoration-theme hover:opacity-50 transition-opacity duration-300"
  >
    {children}
  </a>
);

export default Link;
