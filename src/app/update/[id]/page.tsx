import { TaskForm } from '@/components/task-form'
import { prisma } from '@/lib/prisma'

// get task by id from prisma
async function getTaskById(id: string) {
  const task = await prisma.task.findUnique({
    where: {
      id: parseInt(id),
    },
  })
  return task
}

// interface PageProps
interface PageProps {
  params: {
    id: string
  }
}

export default async function UpdateByIdPage({ params }: PageProps) {
  const { id } = await params

  if (id !== undefined) {
    const task = await getTaskById(id)
    return (
      <div className="flex justify-center items-center h-screen">
        <TaskForm task={task} />
      </div>
    )
  } else {
    return <div>Task not found</div>
  }
}
