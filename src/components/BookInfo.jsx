import React, { useEffect, useState } from "react";
import axios from "axios";

const BookInfo = () => {
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "abcd1234" },
      })
      .then((response) => {
        setBooks(response.data.books);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setErrorMessage("Error: Not Found (404)");
        } else {
          setErrorMessage("An error occurred while fetching data.");
        }
      });
  }, []);

  useEffect(() => {
    console.log("Books Fetched");
  }, [books]);

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      {errorMessage && (
        <p className="text-red-500 text-lg font-semibold mb-4">
          {errorMessage}
        </p>
      )}
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-white shadow-md rounded p-6 mb-8 transition-transform transform hover:scale-105"
        >
          <h2 className="text-2xl font-semibold mb-4">{book.title}</h2>
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={book.imageLinks.thumbnail}
              alt={book.title}
              className="w-full md:w-48 h-auto mb-4 md:mr-4 rounded"
            />
            <div>
              <p className="text-gray-700 mb-2">{book.description}</p>
              <p className="text-gray-600">
                Authors: {book.authors.join(", ")}
              </p>
            </div>
          </div>
          <hr className="my-4 border-t" />
        </div>
      ))}
    </div>
  );
};

export default BookInfo;
