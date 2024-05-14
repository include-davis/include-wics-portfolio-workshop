import { Project } from "@/data/interfaces";
import styles from "./ProjectsCard.module.scss";
import Image from "next/image";
// build out card & style it

export default function ProjectsCard({ project }: { project: Project }) {
  return (
    <div className={styles.ProjectsCard}>
      <div className={styles.ProjectImage}>
        <Image
          src={`/include-wics-portfolio-workshop/${project.image}`}
          width={100}
          height={100}
          alt={project.altText ? project.altText : "Project Image"}
        />
      </div>
      <div className={styles.ProjectInfo}>
        <h2>{project.title}</h2>
        <ul className={styles.ProjectTags}>
          {project.tags?.map((tag: string, index: number) => (
            <li key={index} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
        <p className={styles.ProjectDesc}>{project.description}</p>
      </div>
    </div>
  );
}
