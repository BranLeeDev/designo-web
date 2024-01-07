import { ResponsiveImages } from './responsive-images.model';

export interface LocationCard {
  id: number;
  countryName: string;
  office: {
    name: string;
    street: string;
    state: string;
    postalCode: string;
  };
  contact: {
    phoneNumber: string;
    email: string;
  };
  images: ResponsiveImages;
  isImageRightAligned: boolean;
}
