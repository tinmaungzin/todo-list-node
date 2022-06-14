import { GraphQLClient } from 'graphql-request'
import { createList, createListData, createTask, createTaskData, expectedCreateTasks, expectedListsQuery, expectedTaskOrder, expectedUpdateTasks, listsQuery, updateTask, updateTaskData, updateTaskOrder, updateTaskOrderData } from './gql.js'
import { getConfig } from './helper.js'

const config = getConfig()

test('createList mutation returns the same data', async () => {
  const graphQLClient = new GraphQLClient(config.url)
  const list = await graphQLClient.request(createList, createListData)
  expect(list.createList).toStrictEqual(createListData)
})
function createIndividualTask(input, expected){
  return test('createTask mutation returns the expectedTask object', async () => {
    const graphQLClient = new GraphQLClient(config.url)
    const task = await graphQLClient.request(createTask, input)
    expect(task.createTask).toStrictEqual(expected)
  })
}

createIndividualTask(createTaskData[0],expectedCreateTasks[0])
createIndividualTask(createTaskData[1],expectedCreateTasks[1])
createIndividualTask(createTaskData[2],expectedCreateTasks[2])

test('updateTask mutation returns the expectedTask object', async () => {
  const graphQLClient = new GraphQLClient(config.url)
  const task = await graphQLClient.request(updateTask, updateTaskData)
  expect(task.updateTask).toStrictEqual(expectedUpdateTasks)
})

test('updateTaskOrder mutation returns the expectedTaskOrder object',async() => {
  const graphQLClient = new GraphQLClient(config.url)
  const list = await graphQLClient.request(updateTaskOrder, updateTaskOrderData)
  expect(list.updateTaskOrder).toStrictEqual(expectedTaskOrder)
})

test('query returns all the lists and tasks', async () => {
  const graphQLClient = new GraphQLClient(config.url)
  const lists = await graphQLClient.request(listsQuery)
  expect(lists.lists).toStrictEqual(expectedListsQuery)
})

