// frontend/src/api.js
const token = localStorage.getItem('token'); // saved after login

fetch('http://localhost:3000/tasks', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`   // ← add this line
  },
  body: JSON.stringify(data)
});