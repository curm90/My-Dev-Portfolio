export type ProjectIcon =
  | {
      kind: 'image';
      src: `/images/${string}`;
      alt: string;
    }
  | {
      kind: 'emoji';
      value: string;
    };

export type ProjectItem = {
  name: string;
  description: string;
  thumbnail: string;
  liveUrl: string;
  codeUrl: string | false;
  tags: string[];
  icon: ProjectIcon;
  year: string | number;
};
