# E-Commerce Website

**Student Name**: Jinal Chandibhamar 
**Student Number**: 8961760  
**Date**: 19/07/2024

### Technology Stack

**Frontend**: ReactJS  
**Backend**: Java 
**Database**: MongoDB (Atlas)

### Project Setup

1. **Project Initialization**: Repository created on GitHub and cloned to local machine.
2. **Frontend Setup**: Initialized ReactJS project.
3. **Backend Setup**: Initialized .Net project and connected to MongoDB (Atlas).

### Database Schema Design

**Products Schema (MongoDB)**
- `name`: String
- `description`: String
- `price`: Number
- `category`: String
- `stock`: Number
- `imageUrl`: String
- `brand`: String
- `createdAt`: Date
- `updatedAt`: Date

**Users Schema (MongoDB)**
- `username`: String
- `password`: String
- `email`: String
- `firstName`: String
- `lastName`: String
- `address`: Object
  - `street`: String
  - `city`: String
  - `state`: String
  - `zipCode`: String
  - `country`: String
- `phone`: String
- `role`: String
- `orders`: Array of ObjectIds (References to Orders)
- `createdAt`: Date
- `updatedAt`: Date

**Orders Schema (MongoDB)**
- `userId`: ObjectId (Reference to Users)
- `products`: Array of Objects
  - `productId`: ObjectId (Reference to Products)
  - `quantity`: Number
  - `price`: Number
- `status`: String
- `totalPrice`: Number
- `shippingAddress`: Object
  - `street`: String
  - `city`: String
  - `state`: String
  - `zipCode`: String
  - `country`: String
- `createdAt`: Date
- `updatedAt`: Date

**Categories Schema (MongoDB)**
- `name`: String
- `description`: String
- `createdAt`: Date
- `updatedAt`: Date
- `email`: String

### Frontend Setup
1. Basic structure set up for React components, including directories for components and services.
2. State management planned to handle user sessions and cart data.

### Notes
- The project is set up using Git and GitHub for version control.
- Further development will include implementing user interfaces for product listings, shopping cart, and checkout.
