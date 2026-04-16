// ===== Варіант 1 =====
const input = document.getElementById("itemInput");
const list = document.getElementById("list");

document.getElementById("addBtn").onclick = () => {
  if (!input.value.trim()) return alert("Введи текст!");

  const li = document.createElement("li");
  li.textContent = input.value;

  li.onclick = () => li.remove();

  list.appendChild(li);
  input.value = "";
};

document.getElementById("sortBtn").onclick = () => {
  const items = [...list.children].sort((a, b) =>
    a.textContent.localeCompare(b.textContent)
  );
  list.innerHTML = "";
  items.forEach(i => list.appendChild(i));
};
