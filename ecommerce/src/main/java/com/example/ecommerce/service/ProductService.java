package com.example.ecommerce.service;

import com.example.ecommerce.repository.ProductRepository;
import com.example.ecommerce.model.Product;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    public List<Product> allProducts(){
        return productRepository.findAll();
    }

    public Optional<Product> singleProduct(String id){
        return productRepository.findById(id);
    }

   public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }
    }
