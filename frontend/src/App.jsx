import "./App.scss";
import Carousel from "./components/carousel";
// import Hexagon from "./components/hexagon"; // import hex from "hexagon.png";

export default function App() {
  return (
    <div>
      {/* <body>
        <nav class="navMenu">
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Work</a>
          <a href="#">About</a>
          <div className="dot">⬢</div>
        </nav>
      </body> */}
      {/* <h1>Tableaux 1.</h1> */}
      <Carousel />
    </div>
  );
}
