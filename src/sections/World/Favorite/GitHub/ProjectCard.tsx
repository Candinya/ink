import { IconStarFilled } from "@tabler/icons-react";
import type { ReactNode } from "react";

interface ProjectCardProps {
  id: string;
  icon?: (props: any) => ReactNode;
  text?: string;
}
const ProjectCard = ({
  id,
  icon: Icon = IconStarFilled,
  text,
}: ProjectCardProps) => (
  <a href={`https://github.com/${id}`} target="_blank">
    <div className="px-4 py-2 rounded-xl text-nowrap border-2 border-gray-600/30 dark:border-gray-300/20 bg-slate-200/60 dark:bg-slate-500/60 hover:bg-slate-300/60 dark:hover:bg-slate-600/60 transition-colors flex flex-row gap-2 items-center">
      <Icon className="size-4 text-yellow-300" />
      <span>{text || id}</span>
    </div>
  </a>
);

export default ProjectCard;
