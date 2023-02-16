export interface INode {
  id: number;
  name: string;
  children: null | INode[];
}
