import static spark.Spark.*;

public class Main {
    public static void main(String[] args) {
        staticFileLocation("/public");
        port(8000);
        get("/", (req, res) -> "Success");
    }
}

