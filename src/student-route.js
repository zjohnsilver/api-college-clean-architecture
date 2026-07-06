const students = [
  { id: 1, name: 'Alice', age: 22 },
  { id: 2, name: 'Bob', age: 24 },
  { id: 3, name: 'Charlie', age: 21 },
];


const express = require('express');
const app = express();

app.get('/api/students', (req, res) => {
    res.json(students);
});
app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


