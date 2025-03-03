'use server'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs'


export const onUpdateTodos = async (
    id?: string,
    completed?: boolean,
    title?: string | null | undefined,
    created?: Date | null | undefined

) => {
    const todos = await db.todoList.update({
        where: {
            id: id

        },
        data: {
            title: title,
            completed: completed,
            id: id,
            createdAt: created,

        },
    })

    if (todos) return { message: 'flow saved' }
}

export const onDeleteTodos = async (id: string) => {
    const todos = await db.todoList.delete({
        where: {
            id: id,
        },
    })

    if (todos) return { message: 'flow deleted' }
}
export const onFetchCompleteTodos = async () => {
    const user = await currentUser()
    if (user) {
        const todos = await db.todoList.findMany({
            where: {
                userId: user.id,
            },
        })
        const completedTodos = todos.filter(task => task.completed).length;
        if (todos) return completedTodos
    }


}


export const onGetTodos = async () => {
    const user = await currentUser()
    if (user) {
        const todos = await db.todoList.findMany({
            where: {
                userId: user.id,
            },
        })

        if (todos) return todos
    }
}

export const onCreateTodo = async (title: string, description: string) => {
    const user = await currentUser()

    if (user) {
        //create new workflow
        const todos = await db.todoList.create({
            data: {
                userId: user.id,
                title: title,
                description: description,
                completed: false,
                createdAt: new Date(),
            },
        })

        if (todos) return { message: 'Todos created' }
        return { message: 'Oops! try again' }
    }
}
