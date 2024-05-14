interface NavLink {
  name: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  altText: string;
  tags: string[] | null;
  github: string | undefined;
}

export type { NavLink, Project };
