"use client"
import React, { useEffect, useState } from 'react';
import { onCreateTodo, onDeleteTodos, onGetTodos, onUpdateTodos } from '@/app/(main)/(pages)/dashboard/_actions/dashboard-connection'
// import { Check } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';
import { toast } from 'sonner';
import { PencilIcon, Plus, Trash } from 'lucide-react';
// import { Checkbox } from "@/components/ui/chec"

interface Todo {
    id: string;
    userId?: string; title?: string | null; description?: string | null | undefined; completed?: boolean | null | undefined; createdAt?: Date | null | undefined;
}

const TodoList = () => {
    const [newTodo, setNewTodo] = useState<string>('');
    const [newText, setNewText] = useState<string | null | undefined>('');
    const [todos, setTodos] = useState<Todo[]>([]);

    const fetchTodos = async () => {
        const todos = await onGetTodos();
        if (todos) setTodos(todos);
    };
    useEffect(() => {
        fetchTodos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div

            className="flex flex-col gap-2 relative  dark:bg-[#0f0f0f] bg-neutral-200 w-fit min-h-64   h-fit shrink-0  px-8 py-3  rounded-2xl"
        >
            <div className="w-full flex flex-row gap-1 relative items-center justify-start">
                <h1 className="whitespace-nowrap  font-normal  text-center text-xl font-sans dark:text-white w-fit flex gap-2">
                    Today{"'"}s tasks
                </h1>
            </div>
            <div className="border-solid border-gray-700 self-center mb-3 w-40 relative  h-px shrink-0" />
            <div className="overflow-y-scroll scrollbar-none max-h-44 overflow-x-hidden h-fit">
                {todos.map((todo: Todo) => (

                    <div
                        onClick={() => {
                            if (todo.title) {
                                localStorage.setItem('selectedTodoTitle', todo.title);
                            }
                        }}
                        key={todo.id}
                        className="flex flex-row gap-x-12 dark:bg-[#171717]    mb-3 text-bl items-center hover:bg-white/10 p-3  cursor-pointer rounded-lg justify-between"
                    >
                        <div className="flex flex-row gap-2    items-center">
                            <Checkbox color='blue' onCheckedChange={async (checked: CheckedState) => {
                                console.log(checked)
                                // Update the todo item with the new checked state
                                await onUpdateTodos(todo.id, checked === true, todo.title, todo.createdAt)
                                // Fetch the updated todos list
                                fetchTodos();
                                // Show toast message when todo is completed
                                if (checked === true) {
                                    toast.message('Task completed');
                                }
                            }} checked={todo.completed ?? false} />
                            <input
                                type="text"
                                value={todo.title ?? ''}
                                onChange={(e) => {
                                    const updatedTitle = e.target.value;
                                    setTodos((prevTodos) =>
                                        prevTodos.map((t) =>
                                            t.id === todo.id ? { ...t, title: updatedTitle } : t
                                        )
                                    );
                                }}
                                onKeyDown={async (e) => {
                                    if (e.key === 'Enter') {
                                        await onUpdateTodos(todo.id, todo.completed ?? undefined, todo.title, todo.createdAt);
                                        fetchTodos();
                                        toast.message('Task updated');
                                    }
                                }}
                                className="dark:text-white text-black cursor-text bg-transparent border-none focus:outline-none focus:border-b focus:border-white "
                            />

                            {/* <div className="text-white">{todo.title}</div> */}
                        </div>
                        <div className="flex flex-row gap-2    items-center">


                            {/* <input
type="text"
value={todo.title ?? ''}
onChange={async (e) => {
    const updatedTitle = e.target.value;
    await onUpdateTodos(todo.id, todo.completed ?? undefined, updatedTitle, todo.createdAt);
    fetchTodos();
}}
className="text-white bg-transparent border-none focus:outline-none"
/> */}
                            {/* <div className="text-white">{todo.title}</div> */}
                        </div>
                        <div className="flex flex-row">

                            <button onClick={() => { onDeleteTodos(todo.id); toast.message("Todo Deleted"); fetchTodos(); }} className="text-neutral-300 hover:text-neutral-400 transition-colors duration-200 cursor-pointer">
                                <Trash className='h-4 dark:text-red-200 text-red-400 w-4' />
                            </button>
                        </div>
                    </div>

                ))}
            </div>
            <div className="flex flex-col gap-y-2   justify-center items-center mt-4">

                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    className="whitespace-nowrap px-2 py-1 w-full rounded bg-transparent border border-black/10 dark:border-white/20 placeholder-neutral-500 focus:outline-none focus:ring-0"
                    placeholder="Name of the task"
                />
                <button
                    onClick={() => { onCreateTodo(newTodo, ""); fetchTodos(); setNewTodo(''); toast.message("Todo Created") }}
                    className="ml-2 dark:text-neutral-300 dark:hover:text-neutral-400 transition-colors duration-200 cursor-pointer"
                >
                    <Plus className='h-6 font-bold w-6 border border-white/20 rounded-full' />
                </button>
            </div>
        </div>
    );
};

export default TodoList;