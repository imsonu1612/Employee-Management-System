import React from 'react'
import Header from '../Others/Header'
import TaskListNum from '../Others/TaskListNum'
import TaskList from '../TaskList/TaskList'

const EmployeeDashbord = () => {
  return (
    <div className='p-10 bg-white h-screen'>
      <Header />
      <TaskListNum />
      <TaskList />
    </div>
  )
}

export default EmployeeDashbord
