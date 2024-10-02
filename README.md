# E-Commerce Website

### Technology Stack

**Frontend**: ReactJS  

**Backend**: Java 17.0 or higher

**Database**: MongoDB (Atlas)

### Steps to run the Project
Server:
1. Navigate to Your Project Directory and Open your terminal or command prompt.
2. Navigate to the root directory of your Spring Boot project and you can run:
### `./gradlew bootRun`

Server will run on http://localhost:8080/api/v1/products

Client:
In the project directory, you can run:
### `npm start`
 It should Open http://localhost:3000

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
- `user`: UserDetails
  - `name`: String
  - `address`: String
  - `contact`: String
- `items`: List of orderItems
- `subtotal`: double
- `tax`: double
- `total`: double

**OrderItems Schema (MongoDB)**
- `name`: String
- `image`: String
- `quantity`: int
- `price`: double
  

### Test Cases:
1. Display products
2. View Product Details
3. Add to cart
4. Update Quantity
5. Check out products
6. Place order
7. Login using username: admin, pass: admin
8. Display the dashboard
9. CRUD category
10. CRUD products 


### Notes
- The project is set up using Git and GitHub for version control.
- Further development will include implementing user interfaces for product listings, product details and shopping cart.
