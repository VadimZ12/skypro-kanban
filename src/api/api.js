const kanbanHost = "https://wedev-api.sky.pro/api/kanban";

const userHost = "https://wedev-api.sky.pro/api/user";

// Получить список задач
export async function getTodos({ token }) {
  const response = await fetch(kanbanHost, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.status === 200) {
    throw new Error("Ошибка получения");
  }

  const data = await response.json();
  return data;
}

// Отправить задачу
export async function postTodo(taskData) {
  const response = await fetch(kanbanHost, {
    headers: {
      Authorization: `Bearer ${taskData.token}`,
    },
    method: "POST",
    body: JSON.stringify({
      status: "Без статуса",
      title: taskData.title,
      topic: taskData.topic,
      description: taskData.description,
      date: taskData.date,
    }),
  });

  if (!response.status === 201) {
    throw new Error("Ошибка отправки");
  }

  const data = await response.json();
  return data;
}

// Изменить задачу
export async function putTodo(taskData) {
  const response = await fetch(kanbanHost + `/${taskData.id}`, {
    headers: {
      Authorization: `Bearer ${taskData.token}`,
    },
    method: "PUT",
    body: JSON.stringify({
      title: taskData.title,
      topic: taskData.topic,
      status: taskData.status,
      description: taskData.description,
      date: taskData.date,
    }),
  });

  if (!response.status === 201) {
    throw new Error("Ошибка отправки");
  }

  const data = await response.json();
  return data;
}

// Удалить задачу
export async function deleteTodo(taskData) {
  const response = await fetch(kanbanHost + `/${taskData.id}`, {
    headers: {
      Authorization: `Bearer ${taskData.token}`,
    },
    method: "DELETE",
    body: JSON.stringify({
      _id: taskData.id,
    }),
  });

  if (!response.status === 201) {
    throw new Error("Ошибка отправки");
  }

  const data = await response.json();
  return data;
}

// Получить список пользователей

export async function getUserList({ token }) {
  const response = await fetch(userHost, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.status === 200) {
    throw new Error("Ошибка получения");
  }

  const data = await response.json();
  return data;
}

// Регистрация

export async function signUp({ login, name, password }) {
  return fetch(userHost, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Такой пользователь уже существуют");
    }
    return response.json();
  });
}

// Авторизация

export async function signIn({ login, password }) {
  return fetch(userHost + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Неверный логин или пароль");
    }
    return response.json();
  });
}
