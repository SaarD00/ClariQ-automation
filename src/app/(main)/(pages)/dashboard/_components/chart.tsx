"use client"
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { onFetchCompleteTodos, onGetTodos } from '../_actions/dashboard-connection';
interface Todo {
    id: string;
    userId?: string; title?: string | null; description?: string | null | undefined; completed?: boolean | null | undefined; createdAt?: Date | null | undefined;
}
const Chart = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [completedCount, setCompletedCount] = useState<number>(0);
    const fetchTodos = async () => {
        const todos = await onGetTodos();
        if (todos) setTodos(todos);
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await onFetchCompleteTodos();
            if (data !== undefined) setCompletedCount(data);
        };
        fetchData();
        fetchTodos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const chartData = {
        labels: ['Completed', 'Incomplete'],
        datasets: [
            {
                data: [completedCount, todos.length - completedCount],
                backgroundColor: ['#31006e', '#6e27c4'],
                hoverBackgroundColor: ['#31006e', '#6e27c4']
            }
        ]
    };

    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className='text-2xl'>Progress</h1>
            <Pie data={chartData} className='' />
        </div>
    );
};

export default Chart;