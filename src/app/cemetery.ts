import {Grave} from "./cemeteries/cemetery/grave";

export interface Cemetery {
  name: string;
  city: string;
  street: string;
  _links: {
    self: {
      href: string;
    }
    cemetery: {
      href: string;
    }
    graves: {
      href: string;
    }
  }
}
