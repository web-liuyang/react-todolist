export namespace Reception {
  interface Login {
    phone: string;
    password: string;
  }

  interface Add<T = Omit<Response.MatterItem, 'id'>> {
    [P in typeof T]: T[P];
  }

  interface Del {
    uId: Pick<Response.Login, 'id'>;
    id: Partial<Pick<Response.MatterItem, 'id'>>;
  }

  interface Edit {
    uId: Pick<Response.Login, 'id'>;
    id: Partial<Pick<Response.MatterItem, 'id'>>;
    title: Pick<Response.MatterItem, 'title'>;
  }

  interface Query {
    uId: Pick<Response.Login, 'id'>;
    id: Partial<Pick<Response.MatterItem, 'id'>>;
    title: Pick<Response.MatterItem, 'title'>;
  }
}

const a: Reception.Add = {

};

export namespace Response {
  interface Login {
    id: number;
    phone: string;
    password: string;
  }

  interface MatterItem {
    id: number;
    title: string;
    content: string;
    complete: string;
  }

  interface MatterList {
    [key: number]: MatterItem;
  }
}
