import { INode } from "../../../models/INode";

export interface TreeState {
  tree: INode | null;
}

export enum TreeActionsEnum {
  SET_TREE = "SET_TREE",
  CREATE_NODE = "CREATE_NODE",
  EDIT_NODE = "EDIT_NODE",
  DELETE_NODE = "DELETE_NODE",
}

export interface SetTreeAction {
  type: TreeActionsEnum.SET_TREE;
  payload: INode;
}

export interface CreateNodeAction {
  type: TreeActionsEnum.CREATE_NODE;
  payload: string;
}

export interface EditNodeAction {
  type: TreeActionsEnum.EDIT_NODE;
  payload: string;
}

export interface DeleteNodeAction {
  type: TreeActionsEnum.DELETE_NODE;
  payload: string;
}

export type TreeAction =
  | SetTreeAction
  | CreateNodeAction
  | EditNodeAction
  | DeleteNodeAction;
