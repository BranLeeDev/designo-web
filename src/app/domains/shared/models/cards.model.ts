import { Image } from './image.model';
import { ResponsiveImages } from './responsive-images.model';

export interface PortfolioCard {
  id: number;
  title: string;
  path: string;
  images: ResponsiveImages;
}

export interface CultureCard extends Omit<PortfolioCard, 'images' | 'path'> {
  description: string;
  image: Image;
}
