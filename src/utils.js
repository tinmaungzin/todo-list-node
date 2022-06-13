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
  if(list) return list
}

export const getNewOrder = (list, targetTaskId, newPosition) => {
  const order = list.orderedTasksById
  const oldPosition = order.indexOf(targetTaskId)
  order.splice(oldPosition,1)
  order.splice(newPosition-1,0,targetTaskId)
  return order
}