import { PrismaClient } from '@prisma/client'
import { getList, getNewOrder, updateList } from './utils.js'

const prisma = new PrismaClient()


export const getLists =async () => {
  const lists = await prisma.list.findMany({
    include: {
      tasks: true
    }
  })
  return lists
}

export const createList =async (title, orderedTasksById) => {
  const list = await prisma.list.create({
    data: {
      title,
      orderedTasksById
    }
  })
  if(list) return list
}


export const updateTaskOrder = async (listId, targetTaskId, newPosition) => {
  const list = await getList(listId)
  const order = getNewOrder(list,targetTaskId,newPosition)
  const updatedList = await prisma.list.update({
    where: {
      id: listId
    },
    data: {
      title: list.title,
      orderedTasksById: order
    }
  })
  if(updatedList) return updatedList
}

export const createTask =async (title,listId) => {
  const task = await prisma.task.create({
    data: {
      title,
      listId
    }
  })
  const list = await getList(listId)
  const order = list.orderedTasksById
  order.splice(0,0,task.id)
  await updateList(listId, list.title, order)
  return task
}

export const updateTask =async (taskId, title, status) => {
  const task = await prisma.task.update({
    where: {
      id: taskId
    },
    data: {
      title,
      status
    }
  })
  if(task) return task
}