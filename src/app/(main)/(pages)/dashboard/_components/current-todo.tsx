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

const CurrentTodo = () => {
    const [title, setTitle] = useState("")
    useEffect(() => {
        const titles = localStorage.getItem('selectedTodoTitle') || ""
        setTitle(titles)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title])

    return (
        <div

            className="flex flex-col gap-2 relative  dark:bg-[#0f0f0f] bg-neutral-200  max-h-96 w-full  h-fit shrink-0  px-8 py-3  rounded-2xl"
        >
            <div className="w-full flex  gap-1 flex-col relative items-center justify-start">
                <h1 className="whitespace-nowrap  font-normal   text-center text-lg font-sans dark:text-white w-fit flex gap-2">
                    Current Task
                </h1>
                <h2 className='text-xl '>{title}</h2>
                <div className='w-full h-full  max-h-96'>
                    <h1>Notes</h1>
                    <textarea
                        className="w-full p-2 mt-2 dark:bg-[#171717] bg-neutral-300/20   resize-none focus:outline-none text-neutral-700 dark:text-white rounded-md"
                        placeholder="Type your notes here..."
                        rows={4}

                        onChange={(e) => localStorage.setItem('notes', e.target.value)}
                        defaultValue={localStorage.getItem('notes') || ''}
                    />

                </div>
            </div>

        </div>
    );
};

export default CurrentTodo;