<template>
  <div>
    <h1>You son of bitch!</h1>
    <div class="Todos">
      <ul v-for="todo in allTodos" :key="todo.id">
        <li>{{ $lodash.capitalize(todo.title) }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'test',
  computed: {
    ...mapGetters({ allTodos: "allTodos" })
  },
  methods: {
    ...mapActions({
      fetchTodos: 'fetchTodos'
    })
  },
  created() {
    this.fetchTodos()
  }
}
</script>

<style>

</style>