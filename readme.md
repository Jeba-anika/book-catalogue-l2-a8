### Live Link: https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/

### Application Routes:

### Auth (User)

- Route: https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/auth/login (POST)
- Route: https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/auth/signup (POST)
- Route: https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/users (GET)
- Route: https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/users/6607ac54-56cb-4168-86f0-087bb3980cb3 (GET)
- Route: https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/users/6607ac54-56cb-4168-86f0-087bb3980cb3 (PATCH)
- Route: https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/profile (POST)

### Category

- https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/categories (GET)
- https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/categories/create-category (POST)
- https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
- https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4 (PATCH)
- https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database



#### Books

- Route: https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/books (POST)
- Route: https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/books (GET)
- Route: https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/books/64b4e360beb6f1e2b71f9386 (Single GET)
- Route: https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/books/64b4e360beb6f1e2b71f9386 (PATCH)
- Route: https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/books/64b4e360beb6f1e2b71f9386 (DELETE)
- Route: https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/books/addToWishlist/64b4e360beb6f1e2b71f9386 (POST)
- Route: https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/books/addToCurrentlyReading/64b4e360beb6f1e2b71f9386 (POST)
- Route: https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/books/addToPlanToReadSoon/64b4e360beb6f1e2b71f9386 (POST)
- Route: https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/books/finishedReading/64b4e360beb6f1e2b71f9386 (POST)
- Route: https://book-catalogue-l2-a8-9mn3si37c-jeba-anika.vercel.app/api/v1/books/addReview/64b4e360beb6f1e2b71f9386 (POST)

### Application Routes:

#### User

- api/v1/auth/signup (POST)
- api/v1/users (GET)
- api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
- api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH)
- api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database
- api/v1/profile (GET)



### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/:categoryId/category (GET)
- api/v1/books/:id (GET)
- api/v1/books/:id (PATCH)
- api/v1/books/:id (DELETE)

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET) 
- api/v1/orders/:orderId (GET)
