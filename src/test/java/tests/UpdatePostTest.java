package tests;

import base.BaseTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class UpdatePostTest extends BaseTest {

    @Test
    void shouldUpdateExistingPost() {

        String requestBody = """
                {
                    "id": 1,
                    "title": "Updated QA Post",
                    "body": "This post was updated using API automation",
                    "userId": 1
                }
                """;

        given()
                .header("Content-Type", "application/json")
                .body(requestBody)
                .when()
                .put("/posts/1")
                .then()
                .statusCode(200)
                .body("id", equalTo(1))
                .body("title", equalTo("Updated QA Post"))
                .body("body", equalTo("This post was updated using API automation"))
                .body("userId", equalTo(1));
    }
}
