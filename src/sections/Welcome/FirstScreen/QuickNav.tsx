import type { ReactNode } from "react";

interface QuickNavProps {
  link: string;
  color: string;
  icon: (props: any) => ReactNode;
}
const QuickNav = ({ link, color, icon: Icon }: QuickNavProps) => (
  <a
    className={`p-2 rounded-full transition-colors duration-300 text-white ${color}`}
    href={link}
    target="_blank"
  >
    <Icon className="size-6" />
  </a>
);

export default QuickNav;
