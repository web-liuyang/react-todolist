import { Response } from './index';

export namespace Matter {

  interface MatterItem {
    id: number;
    title: string;
    content: string;
    complete: boolean;
  }

  interface MatterList {
    [key: number]: MatterItem;
  }

}
