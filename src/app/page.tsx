import TaskButtonDelete from '@/components/task-button-delete'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { prisma } from '@/lib/prisma'
import clsx from 'clsx'
import Link from 'next/link'

export default async function HomePage() {
  const tasks = await prisma.task.findMany()

  return (
    <div className="grid grid-cols-3 gap-4">
      {tasks.map((task) => (
        <Card key={task.id}>
          <CardHeader className=" flex flex-row justify-between ">
            <CardTitle>{task.name}</CardTitle>
            <Badge
              className={clsx({
                'bg-red-500': task.priority === 'critical',
                'bg-yellow-500': task.priority === 'high',
                'bg-green-500': task.priority === 'medium',
                'bg-blue-500': task.priority === 'low',
              })}
            >
              Priority: {task.priority}
            </Badge>
          </CardHeader>
          <CardContent>
            <p>{task.description}</p>
            <span className=" text-slate-500">
              {new Date(task.createdAt).toLocaleDateString()}
            </span>
          </CardContent>
          <CardFooter className="flex justify-end gap-x-3">
            {/* <Button variant="destructive">Delete</Button> */}
            <TaskButtonDelete taskId={task.id} />
            <Link
              href={`/update/${task.id}`}
              className={buttonVariants({ variant: 'secondary' })}
            >
              Update
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
