package hackathon.medhack.backend.exceptions;

public class CustomException extends RuntimeException {
    private String message;

    public CustomException() {}

    public CustomException(String message) {
        super(message);
        this.message = message;
    }
}
