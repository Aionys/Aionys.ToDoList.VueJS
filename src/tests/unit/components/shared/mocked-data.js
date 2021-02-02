export const mockToDoItem = {
  name: "Test Item",
  id: `#${Math.floor(Math.random() * 100000)}`,
  date: new Date().toUTCString(),
  isCompleted: false,
  isEditMode: false
};

export const mockedToDoItems = [
  {
    name: "Test Item 1",
    id: `#1`,
    date: new Date().toUTCString(),
    isCompleted: false,
    isEditMode: false
  },
  {
    name: "Test Item 2",
    id: `#2`,
    date: new Date().toUTCString(),
    isCompleted: false,
    isEditMode: false
  },
  {
    name: "Test Item 3",
    id: `#3`,
    date: new Date().toUTCString(),
    isCompleted: false,
    isEditMode: false
  }
];

export const mockedTruthyToDoItems = [
  {
    name: "Test Item 1",
    id: `#${Math.floor(Math.random() * 100000)}`,
    date: new Date().toUTCString(),
    isCompleted: false,
    isEditMode: false
  },
  {
    name: "Test Item 2",
    id: `#${Math.floor(Math.random() * 100000)}`,
    date: new Date().toUTCString(),
    isCompleted: false,
    isEditMode: true
  },
  {
    name: "Test Item 3",
    id: `#${Math.floor(Math.random() * 100000)}`,
    date: new Date().toUTCString(),
    isCompleted: false,
    isEditMode: false
  }
];
