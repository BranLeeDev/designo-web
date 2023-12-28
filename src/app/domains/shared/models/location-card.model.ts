import { Coords } from './coords.model';

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
  coords: Coords;
  isImageRightAligned: boolean;
}
