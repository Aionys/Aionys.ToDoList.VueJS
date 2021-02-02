import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ToDoItem from "@/components/to-do-list/to-do-item/ToDoItem.vue";
import {
    REMOVE_TO_DO_ITEM,
    ENABLE_EDIT_MODE_TO_DO_ITEM,
    COMPLETE_TO_DO_ITEM
} from "@/store/index.constants.js";
import { mockToDoItem } from "./shared/mocked-data";
import { factory } from '@/tests/unit/components/shared/factory'

const localVue = createLocalVue()

localVue.use(Vuex)

const testPrefix = `ToDoItem`;

describe("ToDoItem.vue", () => {
    /* initial data check */
    it(`${testPrefix}: correct toDoItem prop`, () => {
        const wrapper = factory(ToDoItem, {
            propsData: {
                toDoItem: { ...mockToDoItem }
            }
        });

        const toDoItemProp = wrapper.props('toDoItem');

        expect(toDoItemProp).not.toBeUndefined();

        expect(typeof toDoItemProp.name).toBe('string');
        expect(typeof toDoItemProp.id).toBe('string');
        expect(typeof toDoItemProp.date).toBe('string');
        expect(typeof toDoItemProp.isCompleted).toBe('boolean');
        expect(typeof toDoItemProp.isEditMode).toBe('boolean');

    });
    it(`${testPrefix}: isCompleted data prop equals to props.toDoItem`, () => {
        const wrapper = factory(ToDoItem, {
            propsData: {
                toDoItem: { ...mockToDoItem }
            }
        });
        expect(wrapper.vm.isCompleted).toEqual(wrapper.props('toDoItem').isCompleted);
    })
    /* Actions */
    let actions
    let store

    beforeEach(() => {
        actions = {
            [REMOVE_TO_DO_ITEM]: jest.fn(),
            [ENABLE_EDIT_MODE_TO_DO_ITEM]: jest.fn(),
            [COMPLETE_TO_DO_ITEM]: jest.fn()
        }
        store = new Vuex.Store({
            actions
        })
    });

    it(`Call ${REMOVE_TO_DO_ITEM} action`, () => {
        const wrapper = factory(ToDoItem, {
            store, localVue, propsData: {
                toDoItem: { ...mockToDoItem }
            }
        });

        const removeBtn = wrapper.find('.remove-btn');

        removeBtn.trigger('click')

        expect(actions[REMOVE_TO_DO_ITEM]).toHaveBeenCalled()
    });

    it(`Call ${ENABLE_EDIT_MODE_TO_DO_ITEM} action`, () => {
        const wrapper = factory(ToDoItem, {
            store, localVue, propsData: {
                toDoItem: { ...mockToDoItem }
            }
        });

        const editBtn = wrapper.find('.edit-btn');

        editBtn.trigger('click')

        expect(actions[ENABLE_EDIT_MODE_TO_DO_ITEM]).toHaveBeenCalled()
    });
});