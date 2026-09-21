package tests;

import base.BaseTest;
import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.*;

//We are veryfying that the API responds successfully to deleting the post/
public class DeletePostTest extends BaseTest {
    @Test
    void shouldDeleteExistingPost(){
        given()
                .when()
                .delete("/posts/1")
                .then()
                .statusCode(200);
    }
}
