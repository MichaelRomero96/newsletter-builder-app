// app/services/api.js
export async function fetchUserData() {
  const response = await fetch('http://localhost:3000/api/hello');
  console.log(response);
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return response.json();
}
