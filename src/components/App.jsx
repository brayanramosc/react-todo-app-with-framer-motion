import React from 'react'
import Header from './Header'
import MainSection from './MainSection'
import { reducer } from '../stores/reducer'
import { TodoProvider } from '../TodoProvider'

const initialState = {
  todos: [
    {
      text: 'React Hooks',
      completed: false,
      id: 'b967afe24b23'
    },
    {
      text: 'Task',
      completed: true,
      id: 'b6df51v6d'
    },
    {
      text: 'New task',
      completed: false,
      id: 'csd1d65as1d65f'
    },
    {
      text: 'La donna e mobile',
      completed: true,
      id: 'cdsf4s684feedfef'
    },
    {
      text: 'Context',
      completed: true,
      id: 'b967afe24a13'
    }
  ],
  visibilityFilter: 'All'
}
const App = () => (
  <TodoProvider initialState={initialState} reducer={reducer}>
    <div>
      <Header />
      <MainSection />
    </div>
  </TodoProvider>
)

export default App
