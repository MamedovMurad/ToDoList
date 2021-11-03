import { createSelector } from "reselect";
import { IRootState } from "../Reducers";

const selectToDoReducer = (store: IRootState) => store.todo;
const selectModal = (store: IRootState) => store.modal;
const selectColor = (store: IRootState) => store.color;
const selectAlert = (store:IRootState)=>store.alert
const selectPost = (store:IRootState)=>store.post

export const selectTodo = createSelector([selectToDoReducer], (todo) => todo);
export const modalComponent = createSelector(
  [selectModal],
  (modal) => modal.component
);

export const modalToggless = createSelector(
  [selectModal],
  (modal) => modal.toggle
);

export const modalSize = createSelector([selectModal], (modal) => modal.size);
export const choosenColor = createSelector([selectColor], (color) => color);
export const alertText = createSelector([selectAlert], (alert) => alert.text);
export const alertType = createSelector([selectAlert], (alert) => alert.type);
export const alertActive = createSelector([selectAlert], (alert) => alert.active);
export const postSelect = createSelector([selectPost], (post) => post.post);
export const loadingSelect = createSelector([selectPost], (post) => post.load);