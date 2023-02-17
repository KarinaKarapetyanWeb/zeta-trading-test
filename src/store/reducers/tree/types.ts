import { INode } from "../../../models/INode";

export interface TreeState {
  tree: INode | null;
}

export enum TreeActionsEnum {
  SET_TREE = "SET_TREE",
}

export interface SetTreeAction {
  type: TreeActionsEnum.SET_TREE;
  payload: INode;
}

export type TreeAction = SetTreeAction;
