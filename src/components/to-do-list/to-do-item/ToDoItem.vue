<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
  >
    <li class="collection-item">
      <div class="content-wrap">
        <div class="block">
          <div class="complete-checkbox">
            <label>
              <input
                ref="complete-checkbox"
                type="checkbox"
                v-model="isCompleted"
              />
              <span class="empty"></span>
            </label>
          </div>
          <div class="content">
            <p :class="{ 'crossed-out-text': isCompleted }">
              {{ toDoItem.name }}
            </p>
            <time>{{ toDoItem.date }}</time>
          </div>
        </div>
        <div class="block">
          <div class="action-block">
            <div class="buttons">
              <button
                @click="removeItem"
                class="btn remove-btn"
                type="submit"
                name="remove-item"
              >
                <i class="material-icons">delete</i>
              </button>

              <button
                @click="editItem"
                class="btn edit-btn"
                type="submit"
                name="edit-item"
              >
                <i class="material-icons">edit</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  </transition>
</template>
<style lang="scss" src="./style.scss"></style>
<script>
import { storeMixin } from "@/components/mixins/store.mixin.js";

import {
  ENABLE_EDIT_MODE_TO_DO_ITEM,
  REMOVE_TO_DO_ITEM,
  COMPLETE_TO_DO_ITEM
} from "@/store/index.constants";

export default {
  name: "ToDoItem",
  props: {
    toDoItem: Object
  },
  mixins: [storeMixin],
  data() {
    return {
      isCompleted: this.toDoItem.isCompleted
    };
  },
  methods: {
    removeItem() {
      this[REMOVE_TO_DO_ITEM](this.toDoItem.id);
    },

    editItem() {
      this[ENABLE_EDIT_MODE_TO_DO_ITEM](this.toDoItem.id);

      this.$emit("edit-item", {
        itemId: this.toDoItem.id
      });
    }
  },

  watch: {
    isCompleted() {
      this[COMPLETE_TO_DO_ITEM]({
        id: this.toDoItem.id,
        isCompleted: this.isCompleted
      });
    }
  }
};
</script>
