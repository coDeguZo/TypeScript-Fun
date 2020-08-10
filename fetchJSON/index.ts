// import axios from 'axios';

// const url = 'https://jsonplaceholder.typicode.com/todos/1';

// interface Todo {
//   id: number;
//   title: string;
//   completed: boolean;
// }

// axios.get(url).then((resp) => {
//   const todo = resp.data as Todo;

//   const id = todo.id;
//   const title = todo.title;
//   const completed = todo.completed;

//   console.log(`
//     The Todo with ID: ${id}
//     Has a Title of: ${title}
//     Is it finished: ${completed}
//   `);
// });

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((resp) => {
  const todo = resp.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logtodo(id, title, completed);
});

const logtodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a Title of: ${title}
  Is it finished: ${completed}
`);
};
