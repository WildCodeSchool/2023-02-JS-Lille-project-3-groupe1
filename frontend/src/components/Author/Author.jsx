// import axios from "axios";
// import { useEffect, useState } from "react";
// import AuthorCard from "./AuthorCard";

// export default function Author() {
//   const [author, setAuthor] = useState([]);
//   useEffect(() => {
//     axios.get("localhost:3000/author").then((d) => {
//       setAuthor(d.data.result[0]);
//       //   console.log(res.data.result[0]);
//     });
//   }, []);
//   return (
//     <div>
//       <AuthorCard author={res.data} />
//     </div>
//   );
// }
