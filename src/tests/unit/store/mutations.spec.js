import { toDoListMutations } from '@/store/mutations'
import {
    ADD_TO_DO_ITEM,
    REMOVE_TO_DO_ITEM,
    EDIT_TO_DO_ITEM,
    COMPLETE_TO_DO_ITEM,
    ENABLE_EDIT_MODE_TO_DO_ITEM
} from "@/store/index.constants";
import { mockedToDoItems, mockToDoItem } from '../components/shared/mocked-data'

test('Add new item to the store', () => {
    const state = {
        toDoList: [...mockedToDoItems]
    }

    toDoListMutations[ADD_TO_DO_ITEM](state, mockToDoItem)
    expect(state.toDoList.length).toBe(mockedToDoItems.length + 1)
})

test('Edit item name', () => {
    const newName = 'updated'
    const id = '#1'

    const state = {
        toDoList: [...mockedToDoItems]
    }

    toDoListMutations[EDIT_TO_DO_ITEM](state, { name: newName, id })
    expect(state.toDoList.find(i => i.id === id).name).toBe(newName)
})

test('Remove item', () => {
    const id = '#1'

    const state = {
        toDoList: [...mockedToDoItems]
    }

    toDoListMutations[REMOVE_TO_DO_ITEM](state, id)
    expect(state.toDoList.find(i => i.id === id)).toBeUndefined()
})

test('Complete item', () => {
    const id = '#1'
    const isCompleted = true

    const state = {
        toDoList: [...mockedToDoItems]
    }
    const item = state.toDoList.find(i => i.id === id)
    toDoListMutations[COMPLETE_TO_DO_ITEM](state, { id, isCompleted })
    expect(item.isCompleted).toBe(true)
})

test('Enable item edtt mode', () => {
    const id = '#1'

    const state = {
        toDoList: [...mockedToDoItems]
    }

    const item = state.toDoList.find(i => i.id === id)
    toDoListMutations[ENABLE_EDIT_MODE_TO_DO_ITEM](state, id)
    expect(item.isEditMode).toBe(true)
})
