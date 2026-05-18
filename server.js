const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// In-memory database
let todos = [
  {
    id: 1,
    title: 'Learn Node.js',
    description: 'Complete Node.js fundamentals course',
    priority: 'high',
    status: 'pending',
    createdAt: new Date('2026-05-18'),
    updatedAt: new Date('2026-05-18')
  },
  {
    id: 2,
    title: 'Build Todo API',
    description: 'Create a REST API for Todo application',
    priority: 'high',
    status: 'in-progress',
    createdAt: new Date('2026-05-18'),
    updatedAt: new Date('2026-05-18')
  }
];

let nextId = 3;

// Team Information
const team = [
  {
    name: "Md. Abdul Al Noman",
    id: "232031044",
    batch: "31st",
    program: "BSc in CSE",
    department: "Computer Science & Engineering",
    university: "Feni University",
    semester: "6th",
    email: "232031044@feniuniversity.ac.bd",
    cgpa: 3.69
  },
  {
    name: "Mahdi Hasan",
    id: "232031036",
    batch: "31st",
    program: "BSc in CSE",
    department: "Computer Science & Engineering",
    university: "Feni University",
    semester: "6th",
    email: "232031036@feniuniversity.ac.bd",
    cgpa: 3.72
  },
  {
    name: "Mushfiqur Rahman",
    id: "232031037",
    batch: "31st",
    program: "BSc in CSE",
    department: "Computer Science & Engineering",
    university: "Feni University",
    semester: "6th",
    email: "232031037@feniuniversity.ac.bd",
    cgpa: 3.40
  },
  {
    name: "Foysal Mahmud",
    id: "232031039",
    batch: "31st",
    program: "BSc in CSE",
    department: "Computer Science & Engineering",
    university: "Feni University",
    semester: "6th",
    email: "232031039@feniuniversity.ac.bd",
    cgpa: 3.60
  }
];

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Todo API is running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Get Team Information
app.get('/api/team', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Team Information',
    totalMembers: team.length,
    team: team
  });
});

// GET all todos
app.get('/api/todos', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'All todos retrieved successfully',
    count: todos.length,
    data: todos
  });
});

// GET single todo by ID
app.get('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  
  if (!todo) {
    return res.status(404).json({
      success: false,
      message: 'Todo not found',
      data: null
    });
  }
  
  res.status(200).json({
    success: true,
    message: 'Todo retrieved successfully',
    data: todo
  });
});

// GET todos with search and filter
app.get('/api/todos/search/query', (req, res) => {
  let filtered = todos;
  const { status, priority, title } = req.query;
  
  // Filter by status
  if (status) {
    filtered = filtered.filter(t => t.status.toLowerCase() === status.toLowerCase());
  }
  
  // Filter by priority
  if (priority) {
    filtered = filtered.filter(t => t.priority.toLowerCase() === priority.toLowerCase());
  }
  
  // Filter by title (case-insensitive)
  if (title) {
    filtered = filtered.filter(t => t.title.toLowerCase().includes(title.toLowerCase()));
  }
  
  res.status(200).json({
    success: true,
    message: 'Todos filtered successfully',
    count: filtered.length,
    filters: { status, priority, title },
    data: filtered
  });
});

// POST create new todo
app.post('/api/todos', (req, res) => {
  const { title, description, priority } = req.body;
  
  // Validation
  if (!title) {
    return res.status(400).json({
      success: false,
      message: 'Title is required',
      data: null
    });
  }
  
  const newTodo = {
    id: nextId++,
    title: title,
    description: description || '',
    priority: priority || 'medium',
    status: 'pending',
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  todos.push(newTodo);
  
  res.status(201).json({
    success: true,
    message: 'Todo created successfully',
    data: newTodo
  });
});

// PUT update todo
app.put('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  
  if (!todo) {
    return res.status(404).json({
      success: false,
      message: 'Todo not found',
      data: null
    });
  }
  
  const { title, description, priority, status } = req.body;
  
  // Update only provided fields
  if (title !== undefined) todo.title = title;
  if (description !== undefined) todo.description = description;
  if (priority !== undefined) todo.priority = priority;
  if (status !== undefined) todo.status = status;
  
  todo.updatedAt = new Date();
  
  res.status(200).json({
    success: true,
    message: 'Todo updated successfully',
    data: todo
  });
});

// DELETE todo
app.delete('/api/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Todo not found',
      data: null
    });
  }
  
  const deletedTodo = todos.splice(index, 1);
  
  res.status(200).json({
    success: true,
    message: 'Todo deleted successfully',
    data: deletedTodo[0]
  });
});

// 404 Not Found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
    path: req.path
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'An error occurred'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Todo API Server is running on http://localhost:${PORT}`);
  console.log(`📚 API Documentation: http://localhost:${PORT}/api-docs.html`);
  console.log(`🌐 Frontend: http://localhost:${PORT}`);
  console.log(`\n✅ Server started at ${new Date().toISOString()}\n`);
});

module.exports = app;