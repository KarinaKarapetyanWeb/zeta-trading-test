export interface ModalState {
  modal: React.ReactNode | null;
}

export enum ModalActionsEnum {
  SET_MODAL = "SET_MODAL",
}

export interface SetModalAction {
  type: ModalActionsEnum.SET_MODAL;
  payload: React.ReactNode;
}

export type ModalAction = SetModalAction;
