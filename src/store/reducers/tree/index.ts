import { TreeState, TreeAction, TreeActionsEnum } from "./types";

const initialState: TreeState = {
  tree: null,
};

export default function treeReducer(
  state = initialState,
  action: TreeAction
): TreeState {
  switch (action.type) {
    case TreeActionsEnum.SET_TREE:
      return { ...state, tree: action.payload };
    default:
      return state;
  }
}
