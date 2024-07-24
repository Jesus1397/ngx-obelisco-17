import { Media } from './media.models';

export interface MediaGallery extends Media {
  author?: string;
  content?: string;
  title?: string;
}
