

export namespace Request {
  interface Login {
    phone: string;
    password: string;
  }
}

export namespace Response {
  interface Userinfo {
    id: number;
    phone: string;
    password: string;
  }
}
