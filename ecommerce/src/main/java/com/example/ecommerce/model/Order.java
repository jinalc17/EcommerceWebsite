package com.example.ecommerce.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "orders")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {

    @Id
    private String id;
    private UserDetails user;
    private List<OrderItem> items;
    private double subtotal;
    private double tax;
    private double total;

}
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    class UserDetails {
        private String name;
        private String address;
        private String contact;
    }


