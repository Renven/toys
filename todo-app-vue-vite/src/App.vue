<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TodoItem from "./components/TodoItem.vue";
components: {
  TodoItem;
}
</script>

<template>
  <div>
    <h1>ToDos</h1>
    <todo-item></todo-item>
    <small
      >Left click means complete. <br />
      Right click to delete the todo.<br />
      Middle click to update the todo.
    </small>
  </div>
</template>

<style scoped>
</style>
