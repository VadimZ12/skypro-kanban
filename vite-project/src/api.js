const API_URL_USER = "https://wedev-api.sky.pro/api/user";
const API_URL = "https://wedev-api.sky.pro/api/kanban";

export async function login({ login, password }) {
  const response = await fetch(API_URL_USER + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (response.status === 401) {
    throw new Error("Нет авторизации");
  } else {
    const data = await response.json();
    return data;
  }
}

export async function getTasks({ token }) {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status === 401) {
    throw new Error("Ошибка авторизации");
  } else {
    const data = await response.json();
    return data;
  }
}
export async function createTasks({ token, tasks }) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(tasks),
  });
  if (response.status === 401) {
    throw new Error("Ошибка авторизации");
  } else {
    const data = await response.json();
    return data;
  }
}

export async function register({ login, password, name }) {
  const response = await fetch(API_URL_USER, {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
      name,
    }),
  });
  if (response.status === 400) {
    throw new Error("Ошибка регистрации");
  } else {
    const data = await response.json();
    return data;
  }
}
export async function deleteCard({ token, id }) {
  const response = await fetch(API_URL + "/" + id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status >= 400) {
    throw new Error("Ошибка удаления");
  } else {
    const data = await response.json();
    return data;
  }
}

export async function editCardQuery({ token, id, info }) {
  const response = await fetch(API_URL + "/" + id, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(info),
  });
  if (response.status >= 400) {
    throw new Error("Ошибка редактирования");
  } else {
    const data = await response.json();
    return data;
  }
}
