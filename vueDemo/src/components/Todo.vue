<template>
  <main class="app">
    <section class="greeting">
      <h2 class="title">
        what's up
        <input
          ref="todoname"
          type="text"
          placeholder="Enter name"
          v-model="todoname"
        />
      </h2>
    </section>
    <section class="create-todo">
      <h3>CREATE A TODO</h3>

      <form @submit.prevent="addToDo">
        <h4>what's on your todo list ?</h4>

        <input
          type="text"
          placeholder="e.g. make a video"
          v-model="input_content"
        />

        <h4>Pick a category</h4>
        <div class="options">
          <label for="category1">
            <input
              type="radio"
              name="category"
              id="category1"
              value="Business"
              v-model="input_category"
            />
            <span class="bubble business"></span>
            <div>Business</div>
          </label>
          <label for="category2">
            <input
              type="radio"
              name="category"
              id="category2"
              value="personal"
              v-model="input_category"
            />
            <span class="bubble personal"></span>
            <div>Personal</div>
          </label>
        </div>

        <input type="submit" value="Add todo" />
      </form>
    </section>

    <section class="todo-list">
      <h3>TODO LIST</h3>
      <!-- <ul v-for="(todo,index) in todo_Asc" :key="index">
        <li>{{ todo.input_content }}</li>
        <li>{{ todo.input_category }}</li>

      </ul> -->
      <div
        v-for="(todo, index) in todo_Asc"
        :class="`todo-item ${todo.done ? 'done' : ''}`"
        :key="index"
      >
        <label>
          <input type="checkbox" v-model="todo.done" />
          <span :class="`bubble ${todo.category}`"> </span>
        </label>
        <div class="todo-content">
          <input type="text" v-model="todo.content" />
        </div>

        <div class="actions">
          <button class="delete" @click="removeTodo(index)">DELETE</button>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: "Todo",
  data() {
    return {
      todos: [],
      todoname: "",
      input_content: "",
      done: false,
      input_category: null,
    };
  },
  watch: {
    todoname: function (val) {
      localStorage.setItem("name", val);
    },
    todos: {
      handler: function (obj) {
        console.log("obj", obj);
        localStorage.setItem("todoList", JSON.stringify(obj));
      },
      deep: true,
    },
  },
  beforeMount() {
    this.todoname = localStorage.getItem("name") || "";
    this.todos = JSON.parse(localStorage.getItem("todoList")) || [];
    console.log("i am todos", this.todos);
  },
  methods: {
    addToDo() {
      if (
        this.input_content.trim() === "" ||
        this.input_content.trim() == null ||
        this.input_category === ""
      ) {
        return;
      }
      this.todos.push({
        content: this.input_content,
        category: this.input_category,
        done: false,
        createdAt: new Date().getTime(),
      });
    },
    removeTodo(position) {
      this.todos.splice(position, 1);
    },
  },

  computed: {
    todo_Asc() {
      return this.todos.sort((a, b) => {
        return b.createdAt - a.createdAt;
      });
    },
  },
};
</script>

<style scoped></style>
