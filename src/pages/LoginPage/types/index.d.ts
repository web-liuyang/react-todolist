export namespace PublicComponents {
  interface Props {
    title: string;
    show: boolean;
    setCurIndex: React.Dispatch<React.SetStateAction<number>>;
  }

  type A<T> = {
    [P in keyof T]: T[P];
  };
}
