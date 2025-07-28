# 🎓 Student Certificate Generator - CertiGen

A full-stack **Spring Boot + PostgreSQL + HTML/CSS/JS** project that allows staff or faculty to **create, view, update, delete, and preview certificates** for students. Certificates are displayed using a custom-designed HTML template.

---

## 📌 Features

- ✅ Add student certificate details (Name, Course, Achievement, Date)
- ✅ Save to PostgreSQL database
- ✅ View all saved certificates
- ✅ Update or delete existing certificates
- ✅ Preview beautifully designed certificate (HTML-based)

---

## 🛠️ Tech Stack

| Layer      | Technology Used               |
| ---------- | ----------------------------- |
| Backend    | Java + Spring Boot (REST API) |
| Database   | PostgreSQL                    |
| Frontend   | HTML + CSS + JavaScript       |
| Build Tool | Maven                         |
| API Format | JSON (via REST)               |

---

## 📸 Screenshots

### 📝 1. Certificate Entry Form

![Form Screenshot](https://github.com/shubhrazope/certigen/blob/main/form.jpg?raw=true)

### 📄 2. Certificate Preview

![Preview Screenshot](https://github.com/shubhrazope/certigen/blob/main/certificate-preview.jpg?raw=true)

### 🗂️ 3. All Saved Certificates

![Saved Data Screenshot](https://github.com/shubhrazope/certigen/blob/main/saved-data.jpg?raw=true)

---

## 🚀 Getting Started

### ✅ Prerequisites

- Java 17+
- PostgreSQL
- Maven
- Git

---

### ⚙️ Backend Setup (Spring Boot)

1. **Clone the project**

```bash
git clone https://github.com/your-username/certificate-generator.git
cd certificate-generator
Configure database

Open src/main/resources/application.properties and set your DB credentials:

properties
Copy
Edit
spring.datasource.url=jdbc:postgresql://localhost:5432/certigendb
spring.datasource.username=your_db_username
spring.datasource.password=your_db_password
Run the backend

bash
Copy
Edit
./mvnw spring-boot:run
API will be available at: http://localhost:8080/api/certificates

🌐 Frontend Setup
Go to the certigen-ui folder

bash
Copy
Edit
cd certigen-ui
Open index.html in your browser.

Make sure your backend is running at http://localhost:8080
```
