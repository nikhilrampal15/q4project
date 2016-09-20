import static spark.Spark.*;

public class Main {
    public static void main(String[] args) {
        staticFiles.location("/public");

        get("/", (req, res) -> "hello world");
    }
}

