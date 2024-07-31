# E-Commerce Website

**Student Name**: Jinal Chandibhamar

**Student Number**: 8961760

**Date**: 19/07/2024

### Technology Stack

**Frontend**: ReactJS  

**Backend**: Java 17.0 or higher

**Database**: MongoDB (Atlas)

### Project Setup

1. **Project Initialization**: Repository created on GitHub and cloned to local machine.
2. **Frontend Setup**: Initialized ReactJS project.
3. **Backend Setup**: Initialized Java project and connected to MongoDB (Atlas).

### Database Schema Design

**Products Schema (MongoDB)**
- `name`: String
- `shortDescription`: String
- `price`: Number
- `category`: String
- `image`: String

**Orders Schema (MongoDB)**
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

### Frontend Setup
1. Basic structure set up for React components, including directories for components and services.
2. State management planned to handle cart data.

### Notes
- The project is set up using Git and GitHub for version control.
- Further development will include implementing user interfaces for product listings, product details and shopping cart.
