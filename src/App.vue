<template>
  <div id="app">
    <div class="header">
      <img src="./assets/logo.svg" />
    </div>
    <ToDoList />
  </div>
</template>

<script>
import ToDoList from "@/components/to-do-list/ToDoList.vue";

export default {
  components: {
    ToDoList,
  },
};
</script>

<style lang="scss">
@import "src/colors.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  .header {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;

    background: $text-color;

    display: flex;
    justify-content: space-between;
  }
}
</style>
