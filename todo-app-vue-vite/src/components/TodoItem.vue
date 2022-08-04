<script>
export default {
  data() {
    return {
      id: 1,
      toDo: [], //ToDo列表
      newToDo: "", //新增的备忘
      isActive: false,
      currentIndex: -1,
      chooseArr: [],
    };
  },
  methods: {
    addToDo() {
      //新增内容为空就不管
      if (!this.newToDo) {
        return;
      }
      //往ToDo列表中新增一条
      //新增的ToDo插在最前面，所以使用 unshift 而不是 push
      this.toDo.unshift({
        id: this.id++,
        title: this.newToDo,
      });
      //添加成功后，清空输入框
      this.newToDo = "";
    },
    deleteTodo(index) {
      for (var i = 0; i <= this.toDo.length - 1; i++) {
        if (this.toDo[i].id === index) {
          this.toDo.splice(i, 1);
        }
      }

      if (this.chooseArr.includes(index)) {
        for (var i = 0; i < this.chooseArr.length; i++) {
          this.chooseArr[i] === index;
          this.chooseArr.splice(i, 1);
        }
      } else {
        return;
      }
    },
    todoDone(index) {
      if (!this.chooseArr.includes(index)) {
        this.chooseArr.push(index);
      } else {
        for (var i = 0; i < this.chooseArr.length; i++) {
          this.chooseArr[i] === index;
          this.chooseArr.splice(i, 1);
        }
      }
    },
  },
};
</script>

<template>
  <form id="form" v-on:submit.prevent="">
    <input
      type="text"
      v-model="newToDo"
      class="input"
      placeholder="Enter your todo"
      autocomplete="off"
      @keyup.enter="addToDo"
    />
    <section>
      <ul class="todos">
        <!-- 查看所有备忘 -->
        <!-- v-for 遍历所有备忘，key 绑定备忘 id，class 绑定样式 -->
        <li
          v-for="todo in toDo"
          class="toDo"
          :key="todo.id"
          @click.right.prevent="deleteTodo(todo.id)"
          @click.left="todoDone(todo.id)"
          :class="{ active: chooseArr.includes(todo.id) }"
        >
          {{ todo.title }}
        </li>
      </ul>
    </section>
  </form>
</template>

<style scoped>
</style>
