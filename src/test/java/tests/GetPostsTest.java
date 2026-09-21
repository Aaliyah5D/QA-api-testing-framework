package tests;

import io.restassured.RestAssured;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class GetPostsTest {
    
    @BeforeEach
    public void setUp() {
        RestAssured.baseURI = "https://jsonplaceholder.typicode.com";
    }
    
    @Test
    public void shouldGetAllPosts() {
        given()
            .when()
            .get("/posts")
            .then()
            .statusCode(200)
                .header("Content-Type", containsString("application/json"))
            .body("size()", greaterThan(0));
    }

    @Test
    void shouldGetSinglePost() {
        given()
            .when()
            .get("/posts/1")
            .then()
            .statusCode(200)
                .header("Content-Type", containsString("application/json"))
            .body("id", equalTo(1))
            .body("userId", equalTo(1))
                .body("title", notNullValue())
                .body("body", notNullValue());
    }

    @Test
    void shouldReturnNotFoundForInvalidPost() {
        given()
            .when()
            .get("/posts/999999")
            .then()
            .statusCode(404);
    }
}
