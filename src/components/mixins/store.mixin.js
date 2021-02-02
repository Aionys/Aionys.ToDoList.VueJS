import {
  ADD_TO_DO_ITEM,
  EDIT_TO_DO_ITEM,
  SET_TO_DO_LIST,
  ENABLE_EDIT_MODE_TO_DO_ITEM,
  REMOVE_TO_DO_ITEM,
  COMPLETE_TO_DO_ITEM,
  GET_TO_DO_LIST
} from "@/store/index.constants";
import { mapActions, mapGetters } from "vuex";

export const storeMixin = {
  methods: {
    ...mapActions([
      ADD_TO_DO_ITEM,
      EDIT_TO_DO_ITEM,
      SET_TO_DO_LIST,
      ENABLE_EDIT_MODE_TO_DO_ITEM,
      REMOVE_TO_DO_ITEM,
      COMPLETE_TO_DO_ITEM,
      ENABLE_EDIT_MODE_TO_DO_ITEM
    ])
  },
  computed: {
    ...mapGetters([GET_TO_DO_LIST])
  }
};
