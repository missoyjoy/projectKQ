// Change this URL if your JSON server is online (e.g. GitHub pages or Render)
const BASE_URL = "http://localhost:3000";

async function fetchData() {
  try {
    // Fetch all categories
    const [women, men, girls, boys] = await Promise.all([
      fetch(`${BASE_URL}/women`).then(res => res.json()),
      fetch(`${BASE_URL}/men`).then(res => res.json()),
      fetch(`${BASE_URL}/girls`).then(res => res.json()),
      fetch(`${BASE_URL}/boys`).then(res => res.json())
    ]);

    // Combine everything
    const allClothes = [...women, ...men, ...girls, ...boys];
    displayTable(allClothes);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayTable(clothes) {
  const tbody = document.querySelector("#clothesTable tbody");
  tbody.innerHTML = "";

  clothes.forEach(item => {
    const row = `
      <tr>
        <td><img src="${item.image}" alt="${item.name}"></td>
        <td>${item.name}</td>
        <td>${item.category}</td>
        <td>${item.price}</td>
        <td>${item.stock}</td>
        <td>${item.sizes.join(", ")}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

// Load data on page start
fetchData();
