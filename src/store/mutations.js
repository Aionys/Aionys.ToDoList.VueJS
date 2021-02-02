import {
    ADD_TO_DO_ITEM,
    REMOVE_TO_DO_ITEM,
    EDIT_TO_DO_ITEM,
    COMPLETE_TO_DO_ITEM,
    ENABLE_EDIT_MODE_TO_DO_ITEM,
    SET_TO_DO_LIST
} from "./index.constants";

export const toDoListMutations = {
    [ADD_TO_DO_ITEM](state, item) {
        state.toDoList = [
            ...state.toDoList,
            item
        ]
    },
    [REMOVE_TO_DO_ITEM](state, id) {
        state.toDoList = state.toDoList.filter(item => item.id !== id)
    },
    [EDIT_TO_DO_ITEM](state, { name, id }) {
        const ind = state.toDoList.findIndex(item => item.id === id);
        const toDoListCopy = [...state.toDoList];
        toDoListCopy[ind].name = name;

        state.toDoList = toDoListCopy;
    },
    [COMPLETE_TO_DO_ITEM](state, { id, isCompleted }) {
        const ind = state.toDoList.findIndex(item => item.id === id);
        const toDoListCopy = [...state.toDoList];
        toDoListCopy[ind].isCompleted = isCompleted;

        state.toDoList = toDoListCopy;

    },
    [ENABLE_EDIT_MODE_TO_DO_ITEM](state, id) {
        const ind = state.toDoList.findIndex(item => item.id === id);
        const toDoListCopy = [...state.toDoList];
        toDoListCopy.forEach((item, i) => {
            if (i !== ind) {
                item.isEditMode = false
            }
        });
        toDoListCopy[ind].isEditMode = !toDoListCopy[ind].isEditMode;

        state.toDoList = toDoListCopy;
    },
    [SET_TO_DO_LIST](state, list) {
        state.toDoList = list;
    }
}