import static spark.Spark.*;

public class Main {
    public static void main(String[] args) {
        staticFiles.location("/public");
        port(8000);
        get("/", (req, res) -> "index.html");
    }
}

