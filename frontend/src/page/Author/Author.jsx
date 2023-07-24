import axios from "axios";
import { useEffect, useState } from "react";
import AuthorCard from "./AuthorCard";

function Author() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/authors")
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {authors.map((author) => (
        <AuthorCard key={author.id} authors={authors[0]} />
      ))}
    </div>
  );
}

export default Author;
