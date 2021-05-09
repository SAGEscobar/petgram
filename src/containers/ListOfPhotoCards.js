import { withPhotos } from '../HOC/withPhotos';
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCard/index';

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);