import { Image } from './image.model';

export interface Location {
  id: number;
  country: string;
  path: string;
  image: Image;
}
