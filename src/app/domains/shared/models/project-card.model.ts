import { Image } from './image.model';

export interface ProjectCard {
  id: number;
  title: string;
  description: string;
  image: Image;
}
