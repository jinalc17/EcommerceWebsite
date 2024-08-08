package com.example.ecommerce.model;

public class AdminLoginResponse {
    private String message;

    public AdminLoginResponse(String message) {
        this.message = message;
    }

    // Getters and setters
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}
