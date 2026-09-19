package tests;

import io.restassured.RestAssured;
import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class GetPostsTest {
    
    @Test
    public void shouldGetAllPosts() {
        RestAssured.baseURI = "https://jsonplaceholder.typicode.com";
        
        given()
            .when()
            .get("/posts")
            .then()
            .statusCode(200)
            .body("size()", greaterThan(0));
    }
}
