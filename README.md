# 📝 Todo API Application

A complete Todo API application built with **Node.js**, **Express**, **HTML**, **CSS**, and **JavaScript**.

---

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/mdabdulalnoman07-afk/todo-api-app.git
cd todo-api-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Server
```bash
npm start
```

### 🌐 Access Points
- **Frontend UI**: http://localhost:5000/
- **API**: http://localhost:5000/api
- **Student Info**: http://localhost:5000/api/team

---

## 👥 Students Information

This application is developed by **4 students** from Feni University:

| Name | ID | Email | CGPA |
|------|-------|-------|------|
| **Md. Abdul Al Noman** | 232031044 | 232031044@feniuniversity.ac.bd | 3.69 |
| **Mahdi Hasan** | 232031036 | 232031036@feniuniversity.ac.bd | 3.72 |
| **Mushfiqur Rahman** | 232031037 | 232031037@feniuniversity.ac.bd | 3.40 |
| **Foysal Mahmud** | 232031039 | 232031039@feniuniversity.ac.bd | 3.40 |

---

## 📋 Features

✅ **Create Todo** - Add new todos with title, description, and priority  
✅ **Read Todos** - Fetch all todos or get a single todo by ID  
✅ **Update Todo** - Edit existing todos (title, description, priority, status)  
✅ **Delete Todo** - Remove todos permanently  
✅ **Search & Filter** - Search by title, filter by status and priority  
✅ **Statistics** - View total, pending, and completed todos  
✅ **Interactive UI** - Beautiful, responsive frontend interface  
✅ **Student Information** - View student details  
✅ **API Documentation** - Complete API docs included  

---

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Testing**: Postman, cURL
- **Version Control**: Git, GitHub
- **Data Format**: JSON

---

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/mdabdulalnoman07-afk/todo-api-app.git
cd todo-api-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the server**
```bash
npm start
```

4. **Open in browser**
```
http://localhost:5000
```

---

## 🚀 API Endpoints

**Base URL**: `http://localhost:5000/api`

### 1. Get All Todos

```http
GET /api/todos
```

**Response:**
```json
{
  "success": true,
  "message": "All todos retrieved successfully",
  "count": 2,
  "data": [
    {
      "id": 1,
      "title": "Learn Node.js",
      "description": "Complete Node.js tutorial",
      "priority": "high",
      "status": "pending",
      "createdAt": "2026-05-18T10:30:00.000Z",
      "updatedAt": "2026-05-18T10:30:00.000Z"
    }
  ]
}
```

### 2. Get Single Todo by ID

```http
GET /api/todos/:id
```

**Example:**
```bash
curl http://localhost:5000/api/todos/1
```

**Response:**
```json
{
  "success": true,
  "message": "Todo retrieved successfully",
  "data": {
    "id": 1,
    "title": "Learn Node.js",
    "description": "Complete Node.js tutorial",
    "priority": "high",
    "status": "pending",
    "createdAt": "2026-05-18T10:30:00.000Z",
    "updatedAt": "2026-05-18T10:30:00.000Z"
  }
}
```

### 3. Search & Filter Todos

```http
GET /api/todos/search/query?status=pending&priority=high&title=learn
```

**Query Parameters:**
- `status` - Filter by status: `pending`, `completed`
- `priority` - Filter by priority: `low`, `medium`, `high`
- `title` - Search by title (case-insensitive)

**Example:**
```bash
curl "http://localhost:5000/api/todos/search/query?status=pending&priority=high"
```

**Response:**
```json
{
  "success": true,
  "message": "Todos filtered successfully",
  "count": 1,
  "filters": {
    "status": "pending",
    "priority": "high",
    "title": null
  },
  "data": [
    {
      "id": 1,
      "title": "Learn Node.js",
      "description": "Complete Node.js tutorial",
      "priority": "high",
      "status": "pending",
      "createdAt": "2026-05-18T10:30:00.000Z",
      "updatedAt": "2026-05-18T10:30:00.000Z"
    }
  ]
}
```

### 4. Create Todo

```http
POST /api/todos
```

**Request Body:**
```json
{
  "title": "Learn Express.js",
  "description": "Complete Express.js course",
  "priority": "high"
}
```

**Example with cURL:**
```bash
curl -X POST http://localhost:5000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn Express.js","description":"Complete Express.js course","priority":"high"}'
```

**Response:**
```json
{
  "success": true,
  "message": "Todo created successfully",
  "data": {
    "id": 2,
    "title": "Learn Express.js",
    "description": "Complete Express.js course",
    "priority": "high",
    "status": "pending",
    "createdAt": "2026-05-18T10:35:00.000Z",
    "updatedAt": "2026-05-18T10:35:00.000Z"
  }
}
```

### 5. Update Todo

```http
PUT /api/todos/:id
```

**Request Body:**
```json
{
  "title": "Updated Title",
  "description": "Updated description",
  "priority": "low",
  "status": "completed"
}
```

**Example with cURL:**
```bash
curl -X PUT http://localhost:5000/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"status":"completed","priority":"low"}'
```

**Response:**
```json
{
  "success": true,
  "message": "Todo updated successfully",
  "data": {
    "id": 1,
    "title": "Learn Node.js",
    "description": "Complete Node.js tutorial",
    "priority": "low",
    "status": "completed",
    "createdAt": "2026-05-18T10:30:00.000Z",
    "updatedAt": "2026-05-18T10:40:00.000Z"
  }
}
```

### 6. Delete Todo

```http
DELETE /api/todos/:id
```

**Example with cURL:**
```bash
curl -X DELETE http://localhost:5000/api/todos/1
```

**Response:**
```json
{
  "success": true,
  "message": "Todo deleted successfully",
  "data": {
    "id": 1,
    "title": "Learn Node.js",
    "description": "Complete Node.js tutorial",
    "priority": "high",
    "status": "pending",
    "createdAt": "2026-05-18T10:30:00.000Z",
    "updatedAt": "2026-05-18T10:30:00.000Z"
  }
}
```

### 7. Health Check

```http
GET /api/health
```

**Response:**
```json
{
  "status": "OK",
  "message": "Todo API is running",
  "timestamp": "2026-05-18T10:45:00.000Z"
}
```

### 8. Get Student Information

```http
GET /api/team
```

**Response:**
```json
{
  "success": true,
  "message": "Student Information",
  "totalMembers": 4,
  "team": [
    {
      "name": "Md. Abdul Al Noman",
      "id": "232031044",
      "batch": "31st",
      "program": "BSc in CSE",
      "department": "Computer Science & Engineering",
      "university": "Feni University",
      "semester": "6th",
      "email": "232031044@feniuniversity.ac.bd",
      "cgpa": 3.69
    }
  ]
}
```

---

## 🧪 Testing with Postman

### Setup Postman
1. Open Postman → Click "New" → Select "Collection"
2. Name it → "Todo API Tests"
3. Add Requests using the endpoints below

### Test Requests

#### 1. Create Todo
- **Method**: POST
- **URL**: http://localhost:5000/api/todos
- **Headers**: `Content-Type: application/json`
- **Body (JSON)**:
```json
{
  "title": "Learn REST APIs",
  "description": "Master REST API concepts",
  "priority": "high"
}
```

#### 2. Get All Todos
- **Method**: GET
- **URL**: http://localhost:5000/api/todos

#### 3. Get Single Todo
- **Method**: GET
- **URL**: http://localhost:5000/api/todos/1

#### 4. Search Todos
- **Method**: GET
- **URL**: http://localhost:5000/api/todos/search/query?status=pending&priority=high

#### 5. Update Todo
- **Method**: PUT
- **URL**: http://localhost:5000/api/todos/1
- **Headers**: `Content-Type: application/json`
- **Body (JSON)**:
```json
{
  "status": "completed",
  "priority": "low"
}
```

#### 6. Delete Todo
- **Method**: DELETE
- **URL**: http://localhost:5000/api/todos/1

#### 7. Health Check
- **Method**: GET
- **URL**: http://localhost:5000/api/health

#### 8. Get Student Info
- **Method**: GET
- **URL**: http://localhost:5000/api/team

---

## 🌐 Frontend Interface

### Features
- 📊 **Dashboard** - View statistics of todos
- ➕ **Create Section** - Add new todos with form
- 📋 **Todo List** - Display all todos with actions
- 🔍 **Search & Filter** - Find todos by various criteria
- ⚡ **Quick Actions** - Complete, Edit, Delete buttons
- 👥 **Student Information** - View student details
- 📱 **Responsive Design** - Works on all devices

### Access
```
http://localhost:5000/
```

---

## 📝 cURL Examples

### Create Todo
```bash
curl -X POST http://localhost:5000/api/todos \
  -H "Content-Type: application/json" \
  -d '{
    "title":"Buy groceries",
    "description":"Milk, eggs, bread",
    "priority":"medium"
  }'
```

### Get All Todos
```bash
curl http://localhost:5000/api/todos
```

### Get Single Todo
```bash
curl http://localhost:5000/api/todos/1
```

### Update Todo (Mark as Complete)
```bash
curl -X PUT http://localhost:5000/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"status":"completed"}'
```

### Delete Todo
```bash
curl -X DELETE http://localhost:5000/api/todos/1
```

### Search Todos
```bash
curl "http://localhost:5000/api/todos/search/query?status=pending&priority=high"
```

---

## 🚀 Development

### Start in Development Mode (with auto-reload)
```bash
npm run dev
```

### Project Structure
```
todo-api-app/
├── server.js              # Main Express server
├── package.json           # Dependencies
├── .gitignore            # Git ignore rules
├── README.md             # This file
└── public/
    ├── index.html        # Main frontend interface
    └── api-docs.html     # API documentation
```

---

## 🐛 Troubleshooting

### Port Already in Use
If port 5000 is already in use, modify the PORT variable in server.js

### Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Module Not Found Error
```bash
npm install express cors
```

---

## 👨‍💻 Lead Developer

**Md. Abdul Al Noman**
- **ID**: 232031044
- **Institution**: Feni University
- **Department**: Computer Science & Engineering
- **Batch**: 31st
- **Semester**: 6th
