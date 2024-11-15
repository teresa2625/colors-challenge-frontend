export async function fetchColors() {
    const response = await fetch("http://localhost:5000/api/colors");
    const data = await response.json();
    return data.data;
  }
  