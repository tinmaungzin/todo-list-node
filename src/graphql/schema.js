import { gql } from "apollo-server";

const typeDefs = gql`
  type List {
    title: String!
    orderedTasksById: [Int]!
    tasks: [Task]
  }

  type Task {
    title: String!
    status: Boolean!
    listId: Int!
  }

  type Query{
    lists: [List]
  }

  type Mutation{
    createList(title: String!, orderedTasksById: [Int]!): List
    updateTaskOrder(listId: Int!, targetTaskId:Int!, newPosition: Int!): List 
    createTask(title: String!, listId: Int!): Task
    updateTask(taskId: Int!, title: String!, status: Boolean!): Task
  }

`;
export default typeDefs;