import { FC } from "react";
import { Prisma } from "@prisma/client";
import Card from "./Card";
import clsx from "clsx";

const projectWithTasks = Prisma.validator<Prisma.ProjectArgs>()({
    include: {tasks: true}
});

type ProjectWithTasks = Prisma.ProjectGetPayload<typeof projectWithTasks>;

const formatDate = (date) => new Date(date).toLocaleDateString("en-us",{
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const ProjectCard: FC<{ project: ProjectWithTasks}> = ({project}) => {
    const completedCount = project.tasks.filter(
        (t) => t.status === "COMPLETED"
    ).length;

    const progress = Math.ceil((completedCount / project.tasks.length) * 100);

  }


  export default ProjectCard;