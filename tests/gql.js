export const createList = `
mutation CreateList($title: String!, $orderedTasksById: [Int]!) {
  createList(title: $title, orderedTasksById: $orderedTasksById) {
    title
    orderedTasksById
  }
}

`
export const createListData = {
  title: "List 1",
  orderedTasksById: []
}

export const createTask = `
mutation CreateTask($title: String!, $listId: Int!) {
  createTask(title: $title, listId: $listId) {
    title
    status
    listId
  }
}
`

export const createTaskData = [
  {
    title: "Task 1",
    listId: 1
  },
  {
    title: "Task 2",
    listId: 1
  },
  {
    title: "Task 3",
    listId: 1
  },
]

export const expectedCreateTasks = [
  {
  title: "Task 1",
  listId: 1,
  status: false
  },
  {
    title: "Task 2",
    listId: 1,
    status: false
  },
  {
      title: "Task 3",
      listId: 1,
      status: false
  },
]


export const updateTask = `
mutation UpdateTask($taskId: Int!, $title: String!, $status: Boolean!) {
  updateTask(taskId: $taskId, title: $title, status: $status) {
    title
    status
    listId
  }
}
`

export const updateTaskData = {
  taskId: 1,
  title: "Task 1",
  status: true
}
export const expectedUpdateTasks = {
  title: "Task 1",
  listId: 1,
  status: true
}


export const updateTaskOrder = `
mutation UpdateTaskOrder($listId: Int!, $targetTaskId: Int!, $newPosition: Int!) {
  updateTaskOrder(listId: $listId, targetTaskId: $targetTaskId, newPosition: $newPosition) {
    title
    orderedTasksById
  }
}
`
export const updateTaskOrderData = {
  listId: 1,
  targetTaskId: 1,
  newPosition: 1
}

export const expectedTaskOrder = {
  title: "List 1",
  orderedTasksById: [1,3,2]
}



export const listsQuery = `

query Lists {
  lists {
    title
    orderedTasksById
    tasks{
      title
      status
    }
  }
}
`

export const expectedListsQuery = [
  {
    title: 'List 1',
    orderedTasksById: [ 1, 3, 2 ],
    tasks: [
      { title: 'Task 2', status: false },
      { title: 'Task 3', status: false },
      { title: 'Task 1', status: true }
    ]
  }
]