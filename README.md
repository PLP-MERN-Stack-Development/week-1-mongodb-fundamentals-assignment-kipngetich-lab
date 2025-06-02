[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19667141&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

This assignment focuses on learning MongoDB fundamentals including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Assignment Overview

You will:
1. Set up a MongoDB database
2. Perform basic CRUD operations
3. Write advanced queries with filtering, projection, and sorting
4. Create aggregation pipelines for data analysis
5. Implement indexing for performance optimization

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all tasks in the assignment
2. Add your `queries.js` file with all required MongoDB queries
3. Include a screenshot of your MongoDB database
4. Update the README.md with your specific setup instructions

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/) 


# MongoDB PLP Bookstore Project

This repository demonstrates fundamental and advanced operations on a MongoDB database for a hypothetical bookstore application. It covers database setup, basic CRUD (Create, Read, Update, Delete) operations, advanced querying with projection and pagination, aggregation pipelines for data analysis, and indexing for performance optimization.

The project uses Node.js with MongoClient for data insertion and mongosh (MongoDB Shell) for executing queries and demonstrating concepts.

🎯 Project Goals

The primary objectives of this project are to:

1. Set up a MongoDB database and collection.
2. Perform basic CRUD operations on book documents.
3. Implement advanced queries using filtering, projection, and pagination.
4. Develop aggregation pipelines for data transformation and analysis.
5. Create and demonstrate the performance benefits of indexes.

🛠️ Setup

Follow these steps to set up and run the project:

1. Prerequisites

Before you begin, ensure you have the following installed:

- Node.js & npm: Download from nodejs.org.
- MongoDB:
        - Local Machine: Install MongoDB Community Server from MongoDB Download Center. Ensure it's running (e.g., via mongod command or as a service).
        - MongoDB Atlas (Cloud): Set up a free tier cluster on MongoDB Atlas. Make sure to configure network access (IP Whitelist) and create a database user.
- MongoDB Shell (mongosh): Usually installed with MongoDB Community Server, or download separately from mongosh docs.
- MongoDB Compass (Optional, but Recommended GUI): Download from MongoDB Compass Download.

2. Project Initialization

Navigate to your desired project directory in your terminal and set up the necessary files:
# Initialize Node.js project for the insertion script
npm init -y

# Install MongoDB driver
npm install mongodb@6.16

3. Database & Collection Creation

Connect to your MongoDB instance using mongosh and set up the database and collection:

- Local MongoDB: bash mongosh
- MongoDB Atlas: bash mongosh "mongodb+srv://<yourUser>:<yourPassword>@<yourClusterURL>/plp_bookstore?retryWrites=true&w=majority" # IMPORTANT: Replace <yourUser>, <yourPassword>, and <yourClusterURL>
Once connected, switch to (or create) the plp_bookstore database:

use plp_bookstore
(The books collection will be implicitly created upon first data insertion, but you can explicitly create it if you wish: db.createCollection("books"))

4. Populate Database with Data

Run the insertion script from root directory:

node insert_books.js
You should see output indicating MongoDB connection and successful insertion.

🚀 Running Queries

All the required MongoDB queries are consolidated into queries.js.

🧪 Expected Outcome

Upon successfully running the setup and queries, you should observe:

- A functioning plp_bookstore database with a books collection populated by at least 12 book documents.
- Output from mongosh demonstrating:
             - Results of basic find, updateOne, and deleteOne operations.
             - Filtered, projected, and sorted lists of books.
             - Paginated results showing specific subsets of books
             - Aggregated data, such as average prices by genre, the author with the most books, and book counts per publication decade.
             - The explain() output showing IXSCAN (Index Scan) in the winningPlan for queries leveraging the created indexes, indicating efficient query execution compared to a full collection scan.

This project serves as a practical demonstration of core MongoDB functionalities.