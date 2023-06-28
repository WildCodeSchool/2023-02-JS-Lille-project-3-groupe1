import axios from "axios";
import { useEffect, useState } from "react";
import AuthorCard from "../../components/Author/AuthorCard";

function Author() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/authors")
      .then((response) => {
        setAuthors(response.data); // Utiliser response.data pour obtenir le tableau d'auteurs
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
