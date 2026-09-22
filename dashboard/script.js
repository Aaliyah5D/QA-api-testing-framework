const API_URL = "https://jsonplaceholder.typicode.com";


async function runTest(testType) {

    const testName = document.getElementById("testName");
    const resultBadge = document.getElementById("resultBadge");
    const resultMethod = document.getElementById("resultMethod");
    const resultEndpoint = document.getElementById("resultEndpoint");
    const resultStatus = document.getElementById("resultStatus");
    const responseBody = document.getElementById("responseBody");


    // Show loading state

    resultBadge.textContent = "RUNNING...";
    resultBadge.className = "result-badge neutral";

    responseBody.textContent = "Sending request...";


    let method;
    let endpoint;
    let options = {};


    // GET ALL POSTS

    if (testType === "getAllPosts") {

        method = "GET";
        endpoint = "/posts";

    }


    // GET SINGLE POST

    else if (testType === "getSinglePost") {

        method = "GET";
        endpoint = "/posts/1";

    }


    // INVALID POST

    else if (testType === "invalidPost") {

        method = "GET";
        endpoint = "/posts/999999";

    }


    // CREATE POST

    else if (testType === "createPost") {

        method = "POST";
        endpoint = "/posts";

        options = {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                title: "QA API Testing",

                body: "Created from the QA dashboard",

                userId: 1

            })

        };

    }


    // UPDATE POST

    else if (testType === "updatePost") {

        method = "PUT";
        endpoint = "/posts/1";

        options = {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                id: 1,

                title: "Updated QA Post",

                body: "Updated using the API dashboard",

                userId: 1

            })

        };

    }


    // DELETE POST

    else if (testType === "deletePost") {

        method = "DELETE";
        endpoint = "/posts/1";

        options = {

            method: "DELETE"

        };

    }


    // Update UI

    testName.textContent = `${method} ${endpoint}`;

    resultMethod.textContent = method;

    resultEndpoint.textContent = endpoint;


    try {

        const response = await fetch(
            API_URL + endpoint,
            options
        );


        resultStatus.textContent =
            `${response.status} ${response.statusText}`;


        const contentType =
            response.headers.get("content-type");


        let data;


        if (contentType && contentType.includes("application/json")) {

            data = await response.json();

        } else {

            data = await response.text();

        }


        // Display response

        if (typeof data === "object") {

            responseBody.textContent =
                JSON.stringify(data, null, 2);

        } else {

            responseBody.textContent = data;

        }


        // Determine result

        const expectedStatus =
            getExpectedStatus(testType);


        if (response.status === expectedStatus) {

            resultBadge.textContent = "PASSED";

            resultBadge.className =
                "result-badge success";

        } else {

            resultBadge.textContent = "FAILED";

            resultBadge.className =
                "result-badge failure";

        }

    }


    catch (error) {

        resultBadge.textContent = "ERROR";

        resultBadge.className =
            "result-badge failure";

        resultStatus.textContent = "NETWORK ERROR";

        responseBody.textContent =
            error.message;

    }

}


/*
    Expected status codes
*/

function getExpectedStatus(testType) {

    if (testType === "getAllPosts") {
        return 200;
    }

    if (testType === "getSinglePost") {
        return 200;
    }

    if (testType === "invalidPost") {
        return 404;
    }

    if (testType === "createPost") {
        return 201;
    }

    if (testType === "updatePost") {
        return 200;
    }

    if (testType === "deletePost") {
        return 200;
    }

}


/*
    Copy response to clipboard
*/

function copyResponse() {

    const response =
        document.getElementById("responseBody").textContent;

    navigator.clipboard.writeText(response);

}