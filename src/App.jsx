import React from "react";
import BookDetails from "./components/BookInfo";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <header className="bg-blue-500 text-white text-3xl p-4">
        React API
      </header>
      <main className="container mx-auto mt-8">
        <BookDetails />
      </main>
    </div>
  );
};

export default App;
