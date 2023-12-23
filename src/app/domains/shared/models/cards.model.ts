interface ResponsiveImages {
  mobile: string;
  tablet: string;
  desktop: string;
  alt: string;
}

export interface Image {
  url: string;
  alt: string;
  width: number;
  height: number;
}

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
