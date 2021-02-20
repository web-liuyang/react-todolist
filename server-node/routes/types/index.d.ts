export namespace Reception {
  interface Login {
    phone: string;
    password: string;
  }
}

export namespace Response {
  interface Login {
    id: number;
    phone: string;
    password: string;
  }
}
