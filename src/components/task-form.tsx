import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectItem, SelectValue } from '@/components/ui/select'
import { SelectContent, SelectTrigger } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { createTask, updateTask } from '@/actions/task-actions'
import Link from 'next/link'

interface Task {
  id: number
  name: string
  description: string
  priority: string
  createdAt: Date
  updatedAt: Date
}

interface TaskProps {
  task?: Task | null
}

export async function TaskForm(props: TaskProps) {
  // export async function TaskForm({ task }: { task: Task }) {
  const { task } = props

  return (
    <form action={task?.id ? updateTask : createTask}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{task ? 'Update Task' : 'Create Task'}</CardTitle>
          <CardDescription>Create a new task for your project</CardDescription>
        </CardHeader>
        <CardContent>
          {/* hidden input for update task */}
          <div>
            <input type="hidden" name="taskId" value={task?.id} />
          </div>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                name="name"
                id="name"
                placeholder="Name of your task"
                defaultValue={task?.name}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea
                name="description"
                placeholder="Type your message here."
                defaultValue={task?.description}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="priority">Priority</Label>
              <Select name="priority" defaultValue={task?.priority}>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/">Cancel</Link>
          <Button type="submit">{task ? 'Update' : 'Create'}</Button>
        </CardFooter>
      </Card>
    </form>
  )
}
