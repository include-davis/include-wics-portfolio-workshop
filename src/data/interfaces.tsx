interface NavLink {
  name: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[] | null;
  github: string | null;
}

export type { NavLink, Project };
