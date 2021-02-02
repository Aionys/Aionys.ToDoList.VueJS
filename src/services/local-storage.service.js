const TO_DO_LIST = "toDoList";

export const getToDoList = () => {
  return parse(localStorage.getItem(TO_DO_LIST)) || [];
};

export const setToDoList = list => {
  localStorage.setItem(TO_DO_LIST, stringify(list));
};

export const addNewToDoItem = name => {
  const item = {
    name,
    id: `#${Math.floor(Math.random() * 100000)}`,
    date: new Date().toUTCString(),
    isCompleted: false,
    isEditMode: false
  };

  const list = getToDoList();

  list.push(item);

  setToDoList(list);

  return item;
};

export const editToDoItem = (id, name, isCompleted) => {
  const list = getToDoList();
  const ind = list.findIndex(item => item.id === id);

  let item = list[ind];

  item = {
    ...item,
    name: name || item.name,
    isCompleted: isCompleted ?? item.isCompleted
  };

  list[ind] = item;

  setToDoList(list);

  return item;
};

export const removeToDoItem = id => {
  const list = getToDoList();
  setToDoList(list.filter(item => item.id !== id));

  return id;
};

const parse = json => JSON.parse(json);
const stringify = object => JSON.stringify(object);
