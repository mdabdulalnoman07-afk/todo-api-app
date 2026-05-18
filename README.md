# 🚀 Start
# 1. Clone
git clone https://github.com/mdabdulalnoman07-afkwhat/todo-api-app.git
cd todo-api-app

# 2. Install
npm install

# 3. Start

npm start

🌐 Access Points
Frontend UI: http://localhost:5000/
API: http://localhost:5000/api
Team Info: http://localhost:5000/api/team

## 👥 Students Info (Integrated)
4 students' info are used in this application:

| Name |	ID	| Email	| CGPA |
|------|-------|-------|------|
| **Md. Abdul Al Noman** | 232031044 | 232031044@feniuniversity.ac.bd | 3.69 |
| **Mahdi Hasan** | 232031036 | 2320310036@feniuniversity.ac.bd | 3.72 |
| **Mushfiqur Rahman** | 232031037 | 232031037@feniuniversity.ac.bd | 3.40 |
| **Foysal Mahmud** | 232031039 | 232031039@feniuniversity.ac.bd | 3.40 |


# 📝 Todo API Application

A complete Todo API application built with **Node.js**, **Express**, **HTML**, **CSS**, and **JavaScript**. 

---

## 📋 Features

✅ **Create Todo** - Add new todos with title, description, and priority  
✅ **Read Todos** - Fetch all todos or get a single todo by ID  
✅ **Update Todo** - Edit existing todos (title, description, priority, status)  
✅ **Delete Todo** - Remove todos permanently  
✅ **Search & Filter** - Search by title, filter by status and priority  
✅ **Statistics** - View total, pending, and completed todos  
✅ **Interactive UI** - Beautiful, responsive frontend interface  
✅ **Team Information** - View team member details  
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
```
git clone https://github.com/mdabdulalnoman07-afkwhat/todo-api-app.git
cd todo-api-app
Install dependencies

npm install
Start the server

npm start
Open in browser
Code
http://localhost:5000
```

## 🚀 API Endpoints
Base URL
Code
http://localhost:5000/api
1. Get All Todos
HTTP
GET /api/todos
Response:

JSON
```bash
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

2. Get Single Todo by ID

HTTP
GET /api/todos/:id
Example:

bash
curl http://localhost:5000/api/todos/1
Response:
```
JSON
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
3. Search & Filter Todos
HTTP
GET /api/todos/search/query?status=pending&priority=high&title=learn
Query Parameters:

status - Filter by status: pending, completed
priority - Filter by priority: low, medium, high
title - Search by title (case-insensitive)
Example:

bash
curl "http://localhost:5000/api/todos/search/query?status=pending&priority=high"
Response:

JSON
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

4. Create Todo
HTTP
POST /api/todos
Request Body:

JSON
{
  "title": "Learn Express.js",
  "description": "Complete Express.js course",
  "priority": "high"
}
Example with cURL:

bash
curl -X POST http://localhost:5000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn Express.js","description":"Complete Express.js course","priority":"high"}'
Response:

JSON
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
5. Update Todo
HTTP
PUT /api/todos/:id
Request Body:

JSON
{
  "title": "Updated Title",
  "description": "Updated description",
  "priority": "low",
  "status": "completed"
}
Example with cURL:

bash
curl -X PUT http://localhost:5000/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"status":"completed","priority":"low"}'
Response:

JSON
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
6. Delete Todo
HTTP
DELETE /api/todos/:id
Example with cURL:

bash
curl -X DELETE http://localhost:5000/api/todos/1
Response:

JSON
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
7. Health Check
HTTP
GET /api/health
Response:

JSON
{
  "status": "OK",
  "message": "Todo API is running",
  "timestamp": "2026-05-18T10:45:00.000Z"
}
8. Get Team Information
HTTP
GET /api/team
Response:

JSON
{
  "success": true,
  "message": "Team Information",
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
    // ... more members
  ]
}


🧪 Testing with Postman
Setup Postman
Open Postman → Click "New" → Select "Collection"
Name it → "Todo API Tests"
Add Requests using the endpoints below
Test Requests
1. Create Todo
Method: POST
URL: http://localhost:5000/api/todos
Headers: Content-Type: application/json
Body (JSON):
JSON
{
  "title": "Learn REST APIs",
  "description": "Master REST API concepts",
  "priority": "high"
}
2. Get All Todos
Method: GET
URL: http://localhost:5000/api/todos
3. Get Single Todo
Method: GET
URL: http://localhost:5000/api/todos/1
4. Search Todos
Method: GET
URL: http://localhost:5000/api/todos/search/query?status=pending&priority=high
5. Update Todo
Method: PUT
URL: http://localhost:5000/api/todos/1
Headers: Content-Type: application/json
Body (JSON):
JSON
{
  "status": "completed",
  "priority": "low"
}
6. Delete Todo
Method: DELETE
URL: http://localhost:5000/api/todos/1
7. Health Check
Method: GET
URL: http://localhost:5000/api/health
8. Get Team Info
Method: GET
URL: http://localhost:5000/api/team


📊 Postman Testing Screenshots
Screenshot 1: Create Todo (POST)
Code
Request: POST http://localhost:5000/api/todos
Status: 201 Created
Response shows newly created todo with ID and timestamp
Screenshot 2: Get All Todos (GET)
Code
Request: GET http://localhost:5000/api/todos
Status: 200 OK
Response shows array of all todos with count
Screenshot 3: Search/Filter Todos (GET)
Code
Request: GET http://localhost:5000/api/todos/search/query?status=pending
Status: 200 OK
Response shows filtered todos based on query
Screenshot 4: Update Todo (PUT)
Code
Request: PUT http://localhost:5000/api/todos/1
Status: 200 OK
Response shows updated todo with new values
Screenshot 5: Delete Todo (DELETE)
Code
Request: DELETE http://localhost:5000/api/todos/1
Status: 200 OK
Response confirms successful deletion
Screenshot 6: Get Team Info (GET)
Code
Request: GET http://localhost:5000/api/team
Status: 200 OK
Response shows all team member information


🌐 Frontend Interface
Features:
Dashboard - View statistics of todos
Create Section - Add new todos with form
Todo List - Display all todos with actions
Search & Filter - Find todos by various criteria
Quick Actions - Complete, Edit, Delete buttons
Team Modal - View team member information
Responsive Design - Works on all devices
Access:
Code
http://localhost:5000/


📝 cURL Examples
Create Todo
bash
curl -X POST http://localhost:5000/api/todos \
  -H "Content-Type: application/json" \
  -d '{
    "title":"Buy groceries",
    "description":"Milk, eggs, bread",
    "priority":"medium"
  }'
Get All Todos
bash
curl http://localhost:5000/api/todos
Get Single Todo
bash
curl http://localhost:5000/api/todos/1
Update Todo (Mark as Complete)
bash
curl -X PUT http://localhost:5000/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"status":"completed"}'
Delete Todo
bash
curl -X DELETE http://localhost:5000/api/todos/1
Search Todos
bash
curl "http://localhost:5000/api/todos/search/query?status=pending&priority=high"


🚀 Development
Start in Development Mode (with auto-reload)
bash
npm run dev
Project Structure
Code
todo-api-app/
├── server.js              # Main Express server
├── package.json           # Dependencies
├── .gitignore            # Git ignore rules
├── README.md             # This file
└── public/
    ├── index.html        # Main frontend interface
    └── api-docs.html     # API documentation


🐛 Troubleshooting
Port Already in Use
If port 5000 is already in use, modify the PORT variable in server.js

Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm install
Module Not Found Error
bash
npm install express cors
```

# 👨‍💻 Contributor
### Md. Abdul Al Noman
### ID:232031044
### Feni University
### Department: Computer Science & Engineering
### Batch: 31st
### Semester: 6th
