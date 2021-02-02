import {
  addNewToDoItem,
  editToDoItem,
  getToDoList,
  removeToDoItem
} from "../services/local-storage.service";
import {
  ADD_TO_DO_ITEM,
  REMOVE_TO_DO_ITEM,
  EDIT_TO_DO_ITEM,
  COMPLETE_TO_DO_ITEM,
  ENABLE_EDIT_MODE_TO_DO_ITEM,
  SET_TO_DO_LIST
} from "./index.constants";

export const toDoListActions = {
  [ADD_TO_DO_ITEM](context, name) {
    const item = addNewToDoItem(name);
    context.commit(ADD_TO_DO_ITEM, item);
  },
  [REMOVE_TO_DO_ITEM](context, id) {
    const removedId = removeToDoItem(id);
    context.commit(REMOVE_TO_DO_ITEM, removedId);
  },
  [EDIT_TO_DO_ITEM](context, { id, name }) {
    const item = editToDoItem(id, name);
    context.commit(EDIT_TO_DO_ITEM, item);
  },
  [COMPLETE_TO_DO_ITEM](context, payload) {
    const item = editToDoItem(payload.id, null, payload.isCompleted);
    context.commit(COMPLETE_TO_DO_ITEM, item);
  },
  [ENABLE_EDIT_MODE_TO_DO_ITEM](context, id) {
    context.commit(ENABLE_EDIT_MODE_TO_DO_ITEM, id);
  },
  [SET_TO_DO_LIST](context) {
    const list = getToDoList();
    context.commit(SET_TO_DO_LIST, list);
  }
};
