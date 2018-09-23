import React from "react";
import Loading from "../Loading";

const Quote = props => {
  const quoteArea = (
    <div>
      <div>
        <p>{props.quote}</p>
        <p>{props.author}</p>
      </div>
    </div>
  );
  const loadingArea = <Loading />;
  let area = props.loading ? loadingArea : quoteArea;
  return { ...area };
};

export default Quote;
