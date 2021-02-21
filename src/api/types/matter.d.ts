import { User } from './index';

export namespace Request {
  type Uid = { uId: number };

  type Add = Omit<Response.MatterItem, 'id'> & Uid;

  type Del = Pick<Response.MatterItem, 'id'> & Uid;

  type Edit = Partial<Response.MatterItem> &
    Pick<Response.MatterItem, 'id'> &
    Uid;

  type Query = Pick<Response.MatterItem, 'title'> & Uid;
}

export namespace Response {
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
