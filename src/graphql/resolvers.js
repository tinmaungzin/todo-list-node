import { lists } from "../../db/mockdb.js";
import { getLists,createList, createTask, updateTask, updateTaskOrder } from "../services.js";
const resolvers = {
  Query: {
    lists: async () => getLists(),
  },
  Mutation: {
    createList: async (root, {title, orderedTasksById}) => {
      return await createList(title, orderedTasksById)
    },

    // updateList: async (root, {listId, title, orderedTasks}) => {
    //   return await updateList(listId, title, orderedTasks)
    // },

    updateTaskOrder: async (root, {listId, targetTaskId, newPosition}) => {
      return await updateTaskOrder(listId, targetTaskId, newPosition)
    },

    createTask: async (root, {title, listId}) => {
      return await createTask(title,listId)
    },

    updateTask: async (root, {taskId, title,status}) => {
      return await updateTask(taskId, title, status)
    }
  }
};
export default resolvers;