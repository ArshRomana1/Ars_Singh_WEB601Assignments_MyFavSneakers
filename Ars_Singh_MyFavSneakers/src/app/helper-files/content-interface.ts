interface Content {
    [x: string]: any;
    id: number;
    title: string;
    description: string;
    creator: string;
    imgURL?: string;
    type?: string;
    tags?: string[];
  }
  export { Content };