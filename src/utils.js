import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getList = async(id) => {
  const list = await prisma.list.findUnique({
    where: {
      id
    }
  })
  return list
}

export const updateList =async (listId, title, orderedTasksById) => {
  const list = await prisma.list.update({
    where: {
      id: listId
    },
    data: {
      title,
      orderedTasksById
    }
  })
  return list
}

export const getUpdatedOrder = (list, targetTaskId, newPosition) => {
  const order = list.orderedTasksById
  const oldPosition = order.indexOf(targetTaskId)
  order.splice(oldPosition,1)
  order.splice(newPosition-1,0,targetTaskId)
  return order
}

export const getNewOrder = (list,taskId) => {
  const order = list.orderedTasksById
  order.splice(0,0,taskId)
  return order
}