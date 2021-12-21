# Trootech Practical Task

# Node.js API

  

- An API to create, update, delete, and list Categories and Products
- Stake - Node, Express, MySQL (Sequelize)
- No static page served, Use Postman to test API

  

# How to go up and running

  

-  ### Local env

  

1. Clone this repo
2. Navigate to Project Directory
3. Update /database/config.json file

4. Install Packages

  

```sh

npm install

```

5. Run Migrations

  

```sh

npm run migration

```
6. Run Seeds

  

```sh

npm run seeds

```
  

7. Run the server

  

```sh

npm start

```

  

- To undo all Seeds 
```sh

npm run undoSeeds

```
- To undo Migration one by one
```sh

npm run undoMigration

```
- once started you can visit [http://localhost:8000](http://localhost:8000) 8000 is default port.



# API Endpoints

  

Use Postman</br>

Use Header => Content-Type: application/json</br>
**Route for Category -**
localhost:8000/category/</br>
**Route for Product -**
localhost:8000/product/</br>



| Endpoint     | Method | Payload                                                                                                                                                                                                                        | Response                      | Requirements                                                           | Description                                                                                            |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| /category | GET   | | Array of Categories |      | Get All Categories                                                                                        |
| /category/:Id  | GET   | params : `userId` | Get details of Category having ID=:Id || Get Category with particular ID|
| /category       |POST| {</br>&emsp;"name":"Mobile"</br>} | {</br>&emsp;"id":"6",</br>&emsp;"message":"Category_Created."</br>}          | Category name must be unique. | Creates new category |
| /category/:Id | PUT    | params : `Id`</br>{</br>&emsp;"name":"Laptops"</br>}| {</br>&emsp;"id":"6",</br>&emsp;"message":"Category_Updated."</br>}          | `category` must not be exist with other Id | Updates the Category name |
| /category/:Id | DELETE   | params : `Id`| {</br>&emsp;"message":"UserDeleted"</br>} |      ||


  
# Author
Anshul Jain
