import { Image } from './image.model';

export interface SectionCard {
  title: string;
  paragraphOne: string;
  paragraphTwo?: string;
  isSecondaryColor: boolean;
  hasTwoParagraphs: boolean;
  isImageRightAligned: boolean;
  image: Image;
}
