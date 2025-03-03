import React from 'react'
import TodoList from './_components/todo'
import Chart from './_components/chart';
import CurrentTodo from './_components/current-todo';
import { Separator } from '@/components/ui/separator';

const DashboardPage = () => {
  const hours = new Date().getHours();
  const timeOfDay = hours < 12 ? 'Morning' : hours < 18 ? 'Afternoon' : 'Evening';
  return (
    <div className="flex flex-col gap-4 relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Good {timeOfDay}
      </h1>
      <main className='p-5'>
        <div className='flex gap-20 px- justify-between'>
          <div className=' flex pr-3  gap-10'>

            <TodoList />
            <CurrentTodo />
          </div>
          <div className='border-l h-screen'>

            <Chart />
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardPage
