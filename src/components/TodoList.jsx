import React from 'react'
import { TodoItem } from './TodoItem'
import { getFilteredTodos } from '../stores/util'
import { Reorder } from 'framer-motion'

export const TodoList = ({ todos, visibilityFilter, setTodos }) => (
  <Reorder.Group className='todo-list' axis='y' values={todos} onReorder={setTodos}>
    {getFilteredTodos(todos, visibilityFilter).map((todo, index) => (
      <Reorder.Item key={todo.id} value={todo}>
        <TodoItem key={todo.id} todo={todo} index={index} />
      </Reorder.Item>
    ))}
  </Reorder.Group>
)
