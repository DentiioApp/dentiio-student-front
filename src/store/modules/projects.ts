interface ProjectsState {
  projects: any
  todos: any
}

const state: ProjectsState = {
  projects: localStorage.getItem('vuex') || '',
  todos: [
    { id: 1, text: 'lalal', done: true },
    { id: 2, text: '...', done: false }
  ]
}

const getters = {
  getProjects: (state: ProjectsState) => state.projects,
  getTodoById: (state: ProjectsState) => (id: any) => {
    return state.todos.find((todo: any) => todo.id === id)
  }
}

export default {
  state,
  getters
}
