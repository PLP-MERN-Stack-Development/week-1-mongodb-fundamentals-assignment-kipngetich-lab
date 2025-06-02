// queries
// ---Basic CRUD Operations ---
// 1. Find all books in a specific genre (e.g., "Fantasy")
db.books.find({ genre: "Fantasy" });

// 2. Find books published after a certain year (e.g., 2000)
db.books.find({ published_year: { $gt: 2000 } });

// 3. Find books by a specific author (e.g., "J.K. Rowling")
db.books.find({ author: "J.K. Rowling" });

// 4. Update the price of a specific book (e.g., "The Hobbit" to 15.99)
db.books.updateOne(
  { title: "The Hobbit" },
  { $set: { price: 15.99 } }
);

// Verify the update
db.books.find({ title: "The Hobbit" });

// 5. Delete a book by its title (e.g., "Crime and Punishment")
db.books.deleteOne({ title: "Crime and Punishment" });

// Verify deletion
db.books.find({ title: "Crime and Punishment" }); // Should return no document

// --- Advanced Queries ---
// 1. Find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

// 2. Use projection to return only the title, author, and price fields
db.books.find(
  { genre: "Fantasy" },
  { title: 1, author: 1, price: 1, _id: 0 }
);

// 3. Implement sorting to display books by price (ascending)
db.books.find({}, { title: 1, price: 1, _id: 0 }).sort({ price: 1 });

// 4. Implement sorting to display books by price (descending)
db.books.find({}, { title: 1, price: 1, _id: 0 }).sort({ price: -1 });

// 5. Use the limit and skip methods to implement pagination (5 books per page)
db.books.find({}, { title: 1, _id: 0 }).sort({ title: 1 }).limit(5).skip(0);
db.books.find({}, { title: 1, _id: 0 }).sort({ title: 1 }).limit(5).skip(5);
db.books.find({}, { title: 1, _id: 0 }).sort({ title: 1 }).limit(5).skip(10); // Will show remaining if any

// ---Aggregation Pipeline ---
// 1. Calculate the average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      average_price: { $avg: "$price" },
      total_books: { $sum: 1 }
    }
  },
  {
    $sort: { average_price: -1 }
  }
]);

// 2. Find the author with the most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      book_count: { $sum: 1 }
    }
  },
  {
    $sort: { book_count: -1 }
  },
  {
    $limit: 1
  }
]);

// 3. Group books by publication decade and counts them
db.books.aggregate([
  {
    $group: {
      _id: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] },
      count: { $sum: 1 },
      titles: { $push: "$title" }
    }
  },
  {
    $sort: { _id: 1 }
  },
  {
    $project: {
      _id: 0,
      decade: { $concat: [ { $toString: "$_id" }, "s" ] },
      count: 1,
      titles: 1
    }
  }
]);

// --- Indexing ---
// 1. Create an index on the 'title' field
db.books.createIndex({ title: 1 });

// 2. Create a compound index on 'author' and 'published_year'
db.books.createIndex({ author: 1, published_year: -1 });

// 3. Use explain() to demonstrate performance improvement
db.books.find({ title: "The Lord of the Rings" }).explain("executionStats");
db.books.find({ author: "J.R.R. Tolkien", published_year: 1937 }).explain("executionStats");