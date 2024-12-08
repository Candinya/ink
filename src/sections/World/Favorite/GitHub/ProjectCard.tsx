import { IconStarFilled } from "@tabler/icons-react";

interface ProjectCardProps {
  id: string;
}
const ProjectCard = ({ id }: ProjectCardProps) => (
  <a href={`https://github.com/${id}`} target="_blank">
    <div className="px-4 py-2 rounded-xl text-nowrap border-2 border-gray-300/20 bg-slate-200 bg-opacity-5 hover:bg-opacity-10 transition-colors flex flex-row gap-2 items-center">
      <IconStarFilled className="size-4 text-yellow-300" />
      <span>{id}</span>
    </div>
  </a>
);

export default ProjectCard;
