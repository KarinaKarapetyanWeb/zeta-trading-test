import { AppDispatch } from "../..";
import TreeService from "../../../api/TreeService";
import { INode } from "../../../models/INode";
import { ModalActionCreators } from "../modal/action-creators";
import { SetTreeAction, TreeActionsEnum } from "./types";

export const TreeActionCreators = {
  setTree: (data: INode): SetTreeAction => ({
    type: TreeActionsEnum.SET_TREE,
    payload: data,
  }),

  fetchTree: (name: string) => async (dispatch: AppDispatch) => {
    const response = await TreeService.getTree(name);

    return dispatch(TreeActionCreators.setTree(response.data));
  },

  addNode:
    (name: string, parentNodeId: number, nodeName: string) =>
    async (dispatch: AppDispatch) => {
      const response = await TreeService.createNode(
        name,
        parentNodeId,
        nodeName
      );
      const responseTree = await TreeService.getTree(name);

      dispatch(ModalActionCreators.setModal(null));

      return dispatch(TreeActionCreators.setTree(responseTree.data));
    },

  renameNode:
    (name: string, parentNodeId: number, nodeName: string) =>
    async (dispatch: AppDispatch) => {
      const response = await TreeService.renameNode(
        name,
        parentNodeId,
        nodeName
      );
      const responseTree = await TreeService.getTree(name);

      dispatch(ModalActionCreators.setModal(null));

      return dispatch(TreeActionCreators.setTree(responseTree.data));
    },

  deleteNode:
    (name: string, nodeId: number) => async (dispatch: AppDispatch) => {
      const response = await TreeService.deleteNode(name, nodeId);
      const responseTree = await TreeService.getTree(name);

      dispatch(ModalActionCreators.setModal(null));

      return dispatch(TreeActionCreators.setTree(responseTree.data));
    },
};
