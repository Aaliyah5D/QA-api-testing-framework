# QA API Testing Framework

A Java-based API automation testing framework built with **REST Assured, JUnit 5, and Maven**, with an accompanying **interactive web dashboard** built using HTML, CSS, and JavaScript.

This project demonstrates practical API testing concepts including **CRUD operations, positive and negative test scenarios, HTTP status-code validation, response-body validation, response-header validation, reusable test configuration, and automated test execution**.

---

##  Project Overview

The purpose of this project is to demonstrate practical **API testing and test automation** using Java.

The framework tests the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) REST API and covers the main CRUD operations:

* **GET** — Retrieve resources
* **POST** — Create resources
* **PUT** — Update resources
* **DELETE** — Delete resources

The project also includes an interactive browser-based dashboard that provides a visual way to send requests to the API and inspect the returned responses.

The automated test framework and dashboard serve different purposes:

```text
Automated QA Tests
JUnit 5
    ↓
REST Assured
    ↓
JSONPlaceholder API
    ↓
Assertions
```

```text
Interactive Dashboard
HTML / CSS / JavaScript
    ↓
JavaScript Fetch API
    ↓
JSONPlaceholder API
    ↓
Response displayed in browser
```

The Java automation suite is responsible for automated validation, while the dashboard provides a visual interface for interacting with and demonstrating the API.

---

##  Project Objectives

The main objectives of this project were to:

* Learn and apply REST API testing concepts
* Automate API tests using Java
* Understand HTTP methods and status codes
* Validate API response bodies
* Validate response headers
* Implement positive and negative test scenarios
* Test CRUD operations
* Create reusable test configuration
* Organise automated tests using a maintainable project structure
* Execute automated tests using Maven
* Build a simple interactive API dashboard
* Display API responses in a browser
* Practise Git and GitHub version control
* Document the testing process professionally

---

## Technologies & Tools

| Technology / Tool | Purpose                                      |
| ----------------- | -------------------------------------------- |
| Java 17           | Programming language                         |
| REST Assured      | API automation and HTTP request testing      |
| JUnit 5           | Test framework                               |
| Maven             | Dependency management and test execution     |
| HTML              | Dashboard structure                          |
| CSS               | Dashboard styling and responsive design      |
| JavaScript        | Dashboard API requests and response handling |
| Fetch API         | Sending HTTP requests from the dashboard     |
| IntelliJ IDEA     | Development environment                      |
| Git               | Version control                              |
| GitHub            | Source code hosting                          |
| JSONPlaceholder   | REST API used for testing                    |

---

# Project Structure

```text
QA-api-testing-framework/
│
├── .gitignore
├── pom.xml
├── README.md
│
├── dashboard/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── src/
    └── test/
        └── java/
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

The individual test classes extend `BaseTest`, allowing the configuration to be reused instead of defining the API base URL repeatedly.

---

#  Interactive API Testing Dashboard

The project includes a lightweight browser-based dashboard for visually interacting with the API.

The dashboard provides a simple interface for executing API requests and displaying their results.

### Dashboard Features

The dashboard allows users to:

* Get all posts
* Get an individual post
* Test an invalid post
* Create a post
* Update a post
* Delete a post

The interface displays:

* HTTP method
* API endpoint
* HTTP status code
* Pass/fail result
* API response body
* JSON response data

### Dashboard Structure

```text
dashboard/
├── index.html
├── style.css
└── script.js
```

### Technologies Used

The dashboard was built using:

```text
HTML
CSS
JavaScript
Fetch API
```

The JavaScript code sends requests to the JSONPlaceholder API and evaluates the returned HTTP status against the expected status for each scenario.

For example:

```text
GET /posts/1
        ↓
API returns 200
        ↓
Expected status = 200
        ↓
Dashboard displays:
        PASSED
```

For the negative test:

```text
GET /posts/999999
        ↓
API returns 404
        ↓
Expected status = 404
        ↓
Dashboard displays:
        PASSED
```

This demonstrates that a QA test should validate the **expected behaviour**, rather than assuming that every successful test must return `200 OK`.

---

#  API Endpoints Tested

| Test Area       | HTTP Method | Endpoint        | Expected Status |
| --------------- | ----------- | --------------- | --------------: |
| Get all posts   | GET         | `/posts`        |             200 |
| Get single post | GET         | `/posts/1`      |             200 |
| Invalid post    | GET         | `/posts/999999` |             404 |
| Create post     | POST        | `/posts`        |             201 |
| Update post     | PUT         | `/posts/1`      |             200 |
| Delete post     | DELETE      | `/posts/1`      |             200 |

---

#  Test Scenarios

## 1. GET — Retrieve All Posts

### Request

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

### Request

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

### Request

```text
GET /posts/999999
```

### Purpose

This is a **negative test scenario**.

The test intentionally requests a resource that does not exist.

### Expected Result

```text
404 Not Found
```

This demonstrates testing how an API behaves when an invalid resource is requested.

---

#  4. POST — Create a Post

### Request

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

#  5. PUT — Update a Post

### Request

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

#  6. DELETE — Delete a Post

### Request

```text
DELETE /posts/1
```

### Validation

The test verifies that the API returns the expected successful response.

Expected status:

```text
200 OK
```

---

#  QA Concepts Demonstrated

## Positive Testing

Testing scenarios where the API is expected to successfully process a valid request.

Examples:

```text
GET /posts
GET /posts/1
POST /posts
PUT /posts/1
DELETE /posts/1
```

---

## Negative Testing

Testing how the API behaves when an invalid request is made.

Example:

```text
GET /posts/999999
```

Expected:

```text
404 Not Found
```

---

## Status Code Validation

The automated tests verify that the API returns the expected HTTP status codes.

Examples:

```text
200 OK
201 Created
404 Not Found
```

---

## Response Body Validation

The framework validates specific values returned by the API rather than only checking the HTTP status.

For example:

```java
.body("id", equalTo(1))
```

---

## Response Header Validation

The framework also validates response headers.

For example:

```java
.header("Content-Type", containsString("application/json"))
```

---

## CRUD Testing

The project covers the four main CRUD operations:

```text
CREATE → POST
READ   → GET
UPDATE → PUT
DELETE → DELETE
```

---

## Reusable Test Configuration

The `BaseTest` class centralises the API base URI.

This allows test classes to inherit the configuration:

```java
public class GetPostsTest extends BaseTest {
```

This reduces duplication and makes the test framework easier to maintain.

---

## Automated Assertions

REST Assured and JUnit 5 are used to automatically determine whether API behaviour matches the expected results.

Example:

```java
.then()
    .statusCode(200)
    .body("id", equalTo(1));
```

If the API does not return the expected result, the automated test fails.

---

#  How to Run the Project

## Prerequisites

Make sure you have installed:

* Java 17 or compatible JDK
* Maven
* IntelliJ IDEA
* Git
* A modern web browser

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

# ▶️ Run the Automated Tests

Execute:

```bash
mvn test
```

Maven will compile the project and execute the automated JUnit test suite.

A successful run should end with:

```text
BUILD SUCCESS
```

with zero test failures and zero errors.

---

#  Run the Dashboard

Navigate to:

```text
dashboard/index.html
```

Open `index.html` in a modern web browser.

The dashboard provides buttons for the available API scenarios.

For example:

```text
GET     Get All Posts       [TEST]
GET     Get Post #1         [TEST]
GET     Invalid Post        [TEST]
POST    Create Post         [TEST]
PUT     Update Post         [TEST]
DELETE  Delete Post         [TEST]
```

After selecting a test, the dashboard displays the API response and whether the returned status matches the expected result.

---

# Test Results

The current framework contains **6 automated API tests**:

```text
GET all posts       ✅
GET single post     ✅
GET invalid post    ✅
POST create post    ✅
PUT update post     ✅
DELETE post         ✅
```

The expected Maven output is:

```text
Tests run: 6
Failures: 0
Errors: 0
Skipped: 0
```

The exact test count may increase as additional automated scenarios are added.

---


---


---

# Future Improvements

Possible future improvements include:

* Add more positive and negative scenarios
* Introduce parameterised tests
* Add test data management
* Add request and response logging
* Add reusable request specifications
* Add API authentication testing
* Add environment-specific configuration
* Add automated HTML test reporting
* Add test execution history to the dashboard
* Add test result statistics
* Add automated CI/CD execution
* Integrate the framework with GitHub Actions
* Expand endpoint coverage
* Add API schema validation

---

#  Project Architecture

The project currently contains two complementary components.

### Automated Testing Layer

```text
JUnit 5
   ↓
REST Assured
   ↓
JSONPlaceholder
   ↓
HTTP Response
   ↓
Assertions
   ↓
PASS / FAIL
```

### Interactive Dashboard Layer

```text
Browser
   ↓
HTML / CSS / JavaScript
   ↓
Fetch API
   ↓
JSONPlaceholder
   ↓
HTTP Response
   ↓
Dashboard Result
```

The dashboard provides a visual demonstration of API interaction, while the Java test suite provides automated and repeatable QA validation.

---

# About JSONPlaceholder

This project uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/), a fake REST API designed for testing and prototyping.

Because it is a simulated API, POST, PUT, and DELETE operations are intended for demonstration and testing purposes and do not represent permanent changes to a production database.

The API was selected because it provides a simple environment for demonstrating API automation concepts without requiring authentication or a private backend.

---

#  Project Demonstration

The project demonstration covers:

1. Project overview
2. QA testing objectives
3. Interactive API dashboard
4. GET requests
5. Positive and negative testing
6. POST request
7. PUT request
8. DELETE request
9. Java REST Assured test implementation
10. JUnit 5 automated tests
11. Maven test execution
12. Successful test results
13. GitHub repository structure
14. Git development workflow

---

#  Author

**Aaliyah Dube**

Software Engineering Student | QA & Automation Enthusiast
