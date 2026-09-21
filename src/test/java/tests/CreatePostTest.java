package tests;

import base.BaseTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class CreatePostTest extends BaseTest {

    @Test
    void shouldCreateNewPost() {

        String requestBody = """
                {
                    "title": "QA API Testing",
                    "body": "Learning API automation with REST Assured",
                    "userId": 1
                }
                """;

        given()
                .header("Content-Type", "application/json")
                .body(requestBody)
                .when()
                .post("/posts")
                .then()
                .statusCode(201)
                .body("title", equalTo("QA API Testing"))
                .body("body", equalTo("Learning API automation with REST Assured"))
                .body("userId", equalTo(1))
                .body("id", notNullValue());
    }
}

