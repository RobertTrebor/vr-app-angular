import {Link} from './_links';

export interface Cemetery {
  id: string;
  name: string;
  city: string;
  street: string;
  _links: Link;

}
