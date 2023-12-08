import React from 'react'
import { TodoItem } from './TodoItem'
import { getFilteredTodos } from '../stores/util'
import { motion, AnimatePresence } from 'framer-motion'

export const TodoList = ({ todos, visibilityFilter }) => (
  <ul className='todo-list'>
    <AnimatePresence>
      {getFilteredTodos(todos, visibilityFilter).map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index} />
      ))}
    </AnimatePresence>
  </ul>
)
