'use server'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

// Create Tasks
export async function createTask(formData: FormData) {
  const name = formData.get('name')?.toString()
  const description = formData.get('description')?.toString()
  const priority = formData.get('priority')?.toString()

  if (!name || !description || !priority) {
    console.log('All fields are required')
    return
  }

  try {
    const newTask = await prisma.task.create({
      data: {
        name,
        description,
        priority,
      },
    })
    console.log(newTask)
  } catch (error) {
    console.error(error)
  }
  redirect('/')
}
// Update Task
export async function updateTask(formData: FormData) {
  const name = formData.get('name')?.toString()
  const description = formData.get('description')?.toString()
  const priority = formData.get('priority')?.toString()
  const taskId = formData.get('taskId')?.toString()

  if (!taskId) {
    console.log('TaskId is required')
    return
  }

  if (!name || !description || !priority) {
    console.log('All fields are required')
    return
  }

  try {
    await prisma.task.update({
      where: {
        id: parseInt(taskId),
      },
      data: {
        name,
        description,
        priority,
      },
    })
  } catch (error) {
    console.error(error)
  }
  redirect('/')
}
