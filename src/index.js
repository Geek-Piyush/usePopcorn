import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = React.useState(0);
  return (
    <div>
      <StarRating
        maxRating={5}
        defaultRating={movieRating}
        onSetRating={(rating) => setMovieRating(rating)}
      />
      <p>Current Rating: {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} defaultRating={5} />
    <StarRating
      maxRating={3}
      color="#e63946"
      size={32}
      messages={["Bad", "Average", "Good"]}
    />
    <Test />
  </React.StrictMode>
);

//Rating component API Testing

/*
import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = React.useState(0);
  return (
    <div>
      <StarRating
        maxRating={5}
        defaultRating={movieRating}
        onSetRating={(rating) => setMovieRating(rating)}
      />
      <p>Current Rating: {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   
    <StarRating maxRating={10} defaultRating={5} />
    <StarRating
      maxRating={3}
      color="#e63946"
      size={32}
      messages={["Bad", "Average", "Good"]}
    />
    <Test />
  </React.StrictMode>
);
*/
