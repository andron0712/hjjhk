// ===== Завдання 1 (GET) =====
document.getElementById("loadUsers").onclick = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("users");
      list.innerHTML = "";

      data.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.email})`;
        list.appendChild(li);
      });
    })
    .catch(() => {
      document.getElementById("userError").textContent = "Помилка завантаження";
    });
};


// ===== Завдання 2 (POST) =====
document.getElementById("postForm").onsubmit = (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, body })
  })
    .then(res => res.json())
    .then(data => {
      console.log("Відповідь сервера:", data);
      document.getElementById("postForm").reset();
    });
};


// ===== Завдання 3 (async/await) =====
document.getElementById("loadPosts").onclick = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const container = document.getElementById("posts");
    container.innerHTML = "";

    data.slice(0, 5).forEach(post => {
      const div = document.createElement("div");
      div.innerHTML = `<b>${post.title}</b><p>${post.body}</p>`;
      container.appendChild(div);
    });
  } catch (err) {
    document.getElementById("postError").textContent = "Помилка завантаження";
  }
};


// ===== Завдання 4 (профіль + пости) =====
document.getElementById("loadProfile").onclick = async () => {
  try {
    const [userRes, postsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1"),
      fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    ]);

    const user = await userRes.json();
    const posts = await postsRes.json();

    const profile = document.getElementById("profile");

    profile.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
      <p>Місто: ${user.address.city}</p>
      <h4>Пости:</h4>
    `;

    posts.slice(0, 5).forEach(post => {
      const div = document.createElement("div");
      div.innerHTML = `<b>${post.title}</b><p>${post.body}</p>`;
      profile.appendChild(div);
    });

  } catch {
    document.getElementById("profile").textContent = "Помилка завантаження";
  }
};
