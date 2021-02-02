import ToDoList from "@/components/to-do-list/ToDoList.vue";
import { factory } from '@/tests/unit/components/shared/factory'
import { focus } from 'vue-focus';
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import {
} from "@/store/index.constants.js";
import { mockToDoItem, mockedToDoItems, mockedTruthyToDoItems } from "./shared/mocked-data";
import {
    ADD_TO_DO_ITEM,
    GET_TO_DO_LIST,
    SET_TO_DO_LIST,
    EDIT_TO_DO_ITEM,
    ENABLE_EDIT_MODE_TO_DO_ITEM
} from "@/store/index.constants.js";

const localVue = createLocalVue()

localVue.use(Vuex)

localVue.mixin({
    directives: { focus },
})

const testPrefix = `ToDoList`;

describe(`${testPrefix}.vue`, () => {
    let actions
    let store
    let getters

    beforeEach(() => {
        actions = {
            [ADD_TO_DO_ITEM]: jest.fn(),
            [EDIT_TO_DO_ITEM]: jest.fn(),
            [SET_TO_DO_LIST]: jest.fn(),
            [ENABLE_EDIT_MODE_TO_DO_ITEM]: jest.fn()
        };
        getters = {
            [GET_TO_DO_LIST]: () => [{ ...mockToDoItem }]
        };
        store = new Vuex.Store({
            actions,
            getters
        });
    });

    it(`${testPrefix}: Created hook`, () => {
        const wrapper = factory(ToDoList, {
            store, localVue
        });

        wrapper.vm.$options.created.forEach(hook => {
            hook.call(wrapper.vm);
        });

        expect(actions[SET_TO_DO_LIST]).toHaveBeenCalled()
    });

    it(`${testPrefix}: Emulate adding of new todo item (addToDo method)`, () => {
        const wrapper = factory(ToDoList, {
            store, localVue, data() {
                return {
                    inputToDoListValue: 'test'
                }
            }
        });

        const input = wrapper.find('input')

        input.trigger('keydown.enter.capture.prevent.stop')
        expect(actions[ADD_TO_DO_ITEM]).toHaveBeenCalled()
        expect(wrapper.vm.inputToDoListValue).toBe('')
        expect(wrapper.vm.currentItem).toBeNull()
    });

    it(`${testPrefix}: Emulate editing of existed todo item (addToDo method)`, () => {
        const wrapper = factory(ToDoList, {
            store, localVue, data() {
                return {
                    inputToDoListValue: 'test',
                    currentItem: { ...mockToDoItem }
                }
            }
        });

        const input = wrapper.find('input')

        input.trigger('keydown.enter.capture.prevent.stop')
        expect(actions[EDIT_TO_DO_ITEM]).toHaveBeenCalled()
        expect(actions[ENABLE_EDIT_MODE_TO_DO_ITEM]).toHaveBeenCalled()
        expect(wrapper.vm.inputToDoListValue).toBe('')
        expect(wrapper.vm.currentItem).toBeNull()
    });

    /* Computed methods */
    it(`${testPrefix} computed: isEditMode`, () => {
        const localThis = { [GET_TO_DO_LIST]: [...mockedToDoItems] }
        expect(ToDoList.computed.isEditMode.call(localThis)).toBeFalsy()

        const localTruthyThis = { [GET_TO_DO_LIST]: [...mockedTruthyToDoItems] }
        expect(ToDoList.computed.isEditMode.call(localTruthyThis)).toBeTruthy();
    });
});