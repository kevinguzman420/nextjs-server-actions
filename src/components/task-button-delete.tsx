import React from 'react'
import { Button } from './ui/button'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export default function TaskButtonDelete({ taskId }: { taskId: number }) {
  async function deleteTask(formData: FormData) {
    'use server'
    const taskId = formData.get('taskId')?.toString()

    if (!taskId) {
      return
    }

    await prisma.task.delete({
      where: {
        id: parseInt(taskId),
      },
    })

    revalidatePath('/')
  }

  return (
    <form action={deleteTask}>
      <input type="hidden" name="taskId" value={taskId} />
      <Button variant="destructive">Delete</Button>
    </form>
  )
}
