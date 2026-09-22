# QA API Testing Framework

A Java-based API automation testing framework built with **REST Assured, JUnit 5, and Maven**. This project demonstrates automated testing of REST API endpoints using positive and negative test scenarios, response validation, and CRUD operations.

---

## Project Overview

The purpose of this project is to demonstrate practical API testing and test automation skills using Java.

The framework tests the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) REST API and covers the main CRUD operations:

* **GET** — Retrieve resources
* **POST** — Create resources
* **PUT** — Update resources
* **DELETE** — Delete resources

The project also demonstrates reusable test configuration through a shared `BaseTest` class, automated assertions with REST Assured and JUnit 5, and Maven-based test execution.

---

## 🎯 Project Objectives

The main objectives of this project were to:

* Learn and apply REST API testing concepts
* Automate API tests using Java
* Understand HTTP methods and status codes
* Validate API response bodies
* Validate response headers
* Implement positive and negative test scenarios
* Create reusable test configuration
* Organise automated tests using a maintainable project structure
* Execute tests using Maven
* Manage the project using Git and GitHub
* Document the testing process professionally

---

## 🛠️ Technologies & Tools

| Technology / Tool | Purpose                                  |
| ----------------- | ---------------------------------------- |
| Java 17           | Programming language                     |
| REST Assured      | API automation and HTTP request testing  |
| JUnit 5           | Test framework                           |
| Maven             | Dependency management and test execution |
| IntelliJ IDEA     | Development environment                  |
| Git               | Version control                          |
| GitHub            | Source code hosting                      |
| JSONPlaceholder   | REST API used for testing                |

---

## 📁 Project Structure

```text
QA-api-testing-framework/
│
├── .gitignore
├── pom.xml
├── README.md
│
└── src/
    └── test/
        └── java/
            │
            ├── base/
            │   └── BaseTest.java
            │
            └── tests/
                ├── GetPostsTest.java
                ├── CreatePostTest.java
                ├── UpdatePostTest.java
                └── DeletePostTest.java
```

### `BaseTest.java`

Contains shared API configuration used by the test classes.

The base URI is configured once:

```java
RestAssured.baseURI = "https://jsonplaceholder.typicode.com";
```

The individual test classes extend `BaseTest`, allowing the configuration to be reused.

---

## 🧪 API Endpoints Tested

| Test Area       | HTTP Method | Endpoint        | Expected Status |
| --------------- | ----------- | --------------- | --------------- |
| Get all posts   | GET         | `/posts`        | 200             |
| Get single post | GET         | `/posts/1`      | 200             |
| Invalid post    | GET         | `/posts/999999` | 404             |
| Create post     | POST        | `/posts`        | 201             |
| Update post     | PUT         | `/posts/1`      | 200             |
| Delete post     | DELETE      | `/posts/1`      | 200             |

---

# 🔍 Test Scenarios

## 1. GET — Retrieve All Posts

### Test

```text
GET /posts
```

### Validations

The test verifies that:

* The API returns HTTP `200 OK`
* The response has an `application/json` content type
* The response contains posts

---

## 2. GET — Retrieve a Single Post

### Test

```text
GET /posts/1
```

### Validations

The test verifies that:

* The API returns HTTP `200 OK`
* The response is JSON
* The returned post has ID `1`
* The returned post belongs to user `1`
* The post has a title
* The post has a body

---

## 3. GET — Invalid Post

### Test

```text
GET /posts/999999
```

### Purpose

This is a negative test scenario.

The test intentionally requests a resource that does not exist.

### Expected Result

```text
404 Not Found
```

This demonstrates testing how an API behaves when an invalid resource is requested.

---

# ➕ 4. POST — Create a Post

### Test

```text
POST /posts
```

### Request Body

```json
{
    "title": "QA API Testing",
    "body": "Learning API automation with REST Assured",
    "userId": 1
}
```

### Validations

The test verifies:

* HTTP status `201 Created`
* The returned title
* The returned body
* The returned user ID
* The response contains an ID

This demonstrates sending JSON request data to an API and validating the response.

---

# 🔄 5. PUT — Update a Post

### Test

```text
PUT /posts/1
```

### Request Body

```json
{
    "id": 1,
    "title": "Updated QA Post",
    "body": "This post was updated using API automation",
    "userId": 1
}
```

### Validations

The test verifies:

* HTTP status `200 OK`
* The correct post ID
* The updated title
* The updated body
* The correct user ID

---

# 🗑️ 6. DELETE — Delete a Post

### Test

```text
DELETE /posts/1
```

### Validation

The test verifies that the API returns a successful response.

Expected status:

```text
200 OK
```

---

# 🧠 QA Concepts Demonstrated

This project demonstrates several important software testing concepts.

### Positive Testing

Testing scenarios where the system is expected to work correctly.

Examples:

```text
GET /posts
GET /posts/1
POST /posts
PUT /posts/1
DELETE /posts/1
```

---

### Negative Testing

Testing how the system behaves when an invalid request is made.

Example:

```text
GET /posts/999999
```

Expected:

```text
404 Not Found
```

---

### Status Code Validation

The tests verify that the API returns the expected HTTP status codes.

Examples:

```text
200 OK
201 Created
404 Not Found
```

---

### Response Body Validation

The framework checks values returned by the API rather than only checking the status code.

For example:

```java
.body("id", equalTo(1))
```

---

### Response Header Validation

The framework also verifies response headers.

For example:

```java
.header("Content-Type", containsString("application/json"))
```

---

### CRUD Testing

The project covers:

```text
CREATE → POST
READ   → GET
UPDATE → PUT
DELETE → DELETE
```

---

### Reusable Test Configuration

The `BaseTest` class centralises the API base URI so that individual tests do not need to repeatedly define it.

---

# 🚀 How to Run the Project

## Prerequisites

Make sure you have installed:

* Java 17 or compatible JDK
* Maven
* IntelliJ IDEA
* Git

---

## Clone the Repository

```bash
git clone https://github.com/Aaliyah5D/QA-api-testing-framework.git
```

Navigate into the project:

```bash
cd QA-api-testing-framework
```

---

## Run the Tests

Execute:

```bash
mvn test
```

Maven will compile the project and execute the automated test suite.

---

# 📊 Test Results

The framework currently contains **6 automated API tests**:

```text
GET all posts              ✅
GET single post            ✅
GET invalid post           ✅
POST create post           ✅
PUT update post            ✅
DELETE post                ✅
```

Expected result:

```text
Tests run: 6
Failures: 0
Errors: 0
Skipped: 0
```

The test count may increase as additional scenarios are added to the framework.

---

# 🔄 Development Workflow

The project was developed incrementally using Git.

Example commit history:

```text
chore: initialize API testing project
test: add GET posts API test
test: add positive and negative GET scenarios
refactor: centralize API base configuration
test: add POST create resource scenario
test: add PUT and DELETE API scenarios
chore: improve API test validation and project cleanup
docs: add project README and test documentation
```

This approach demonstrates incremental development and version control practices.

---

# 📚 What I Learned

Through this project, I strengthened my understanding of:

* REST APIs
* HTTP methods
* HTTP status codes
* JSON request and response bodies
* API assertions
* Positive and negative testing
* Automated testing
* REST Assured
* JUnit 5
* Maven
* Java test organisation
* Reusable test configuration
* Git and GitHub
* QA test design

The project also helped me understand how automated API testing can be structured into a maintainable test framework rather than writing isolated manual checks.

---

# 🔮 Future Improvements

Possible future improvements include:

* Add more positive and negative scenarios
* Introduce parameterised tests
* Add test data management
* Add request/response logging
* Add reusable request specifications
* Add API authentication testing
* Add environment-specific configuration
* Add automated HTML test reporting
* Integrate the framework with a CI/CD pipeline
* Run automated tests through GitHub Actions
* Expand endpoint coverage

---

# ⚠️ About JSONPlaceholder

This project uses JSONPlaceholder, a fake REST API designed for testing and prototyping.

Because it is a simulated API, POST, PUT, and DELETE operations are intended for testing purposes and do not represent permanent changes to a production database.

The API was selected because it provides a simple environment for demonstrating API automation concepts without requiring authentication or a private backend.

---

# 👩🏽‍💻 Author

**Aaliyah Dube**

Software Engineering Student | QA & Automation Enthusiast

Interested in:

* Software Engineering
* Quality Assurance
* API Automation
* Artificial Intelligence
* Cloud Technologies
* Technology for Digital Inclusion

---

# 📌 Project Status

**Status: Completed — Portfolio Project**

The current version demonstrates a functional Java API automation framework covering CRUD operations, positive and negative testing, response validation, Maven execution, and Git/GitHub version control.

---

## 🎥 Project Demonstration

A short demonstration video will showcase:

1. Project overview
2. Project structure
3. API test implementation
4. GET, POST, PUT and DELETE tests
5. Positive and negative testing
6. Maven test execution
7. Successful test results
8. GitHub repository and documentation

---

⭐ If you found this project useful or are interested in API testing and automation, feel free to explore the repository.

WTC-YXG94U92
