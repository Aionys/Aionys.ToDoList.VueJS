<template>
  <div class="to-do-list">
    <span class="hidden-text" :class="{ 'active-text': isEditMode }"
      >Edit Mode</span
    >
    <input
      v-focus="true"
      v-on:keydown.enter.capture.prevent.stop="addToDo"
      v-model="inputToDoListValue"
      placeholder="Type a note"
    />
    <span class="hidden-text" :class="{ 'active-text': inputToDoListValue }"
      >Tap Enter to Save</span
    >
    <ul class="collection" v-if="getToDoList.length">
      <ToDoItem
        v-for="toDoItem of getToDoList"
        :key="toDoItem.id"
        :toDoItem="toDoItem"
        @edit-item="editItem"
      />
    </ul>
  </div>
</template>
<style lang="scss" src="./style.scss"></style>
<script>
import ToDoItem from "@/components/to-do-list/to-do-item/ToDoItem.vue";
import { storeMixin } from "@/components/mixins/store.mixin.js";
import {
  ADD_TO_DO_ITEM,
  EDIT_TO_DO_ITEM,
  SET_TO_DO_LIST,
  ENABLE_EDIT_MODE_TO_DO_ITEM,
  GET_TO_DO_LIST,
} from "@/store/index.constants";

export default {
  name: "ToDoList",
  components: {
    ToDoItem,
  },
  mixins: [storeMixin],
  data() {
    return {
      inputToDoListValue: "",

      currentItem: null,
    };
  },
  created() {
    this[SET_TO_DO_LIST]();
  },
  methods: {
    addToDo() {
      if (!this.inputToDoListValue) return;

      if (this.currentItem) {
        const { id } = this.currentItem;
        this[EDIT_TO_DO_ITEM]({ id, name: this.inputToDoListValue });

        this[ENABLE_EDIT_MODE_TO_DO_ITEM](id);
        this.currentItem = null;
      } else {
        this[ADD_TO_DO_ITEM](this.inputToDoListValue);
      }

      this.inputToDoListValue = "";
    },

    editItem({ itemId }) {
      if (itemId) {
        this.currentItem = {
          ...this.getToDoList.find((item) => item.id === itemId),
        };

        if (this.currentItem.isEditMode) {
          this.inputToDoListValue = this.currentItem.name;
        } else {
          this.inputToDoListValue = "";
        }
      }
    },
  },
  computed: {
    isEditMode() {
      return this[GET_TO_DO_LIST].some((item) => item.isEditMode);
    },
  },
};
</script>