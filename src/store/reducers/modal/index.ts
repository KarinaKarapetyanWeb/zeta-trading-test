import { ModalState, ModalAction, ModalActionsEnum } from "./types";

const initialState: ModalState = {
  modal: null,
};

export default function ModalReducer(
  state = initialState,
  action: ModalAction
): ModalState {
  switch (action.type) {
    case ModalActionsEnum.SET_MODAL:
      return { ...state, modal: action.payload };
    default:
      return state;
  }
}
