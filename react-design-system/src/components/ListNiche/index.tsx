import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

const List = (props) => {
  const navigate = useNavigate();

  const handlePreview = (link) => {
    navigate(link);
  };
  const handleCode = (link) => {
    navigate(link);
  };
  return (
    <div className="overflow-hidden rounded-md bg-white shadow w-full ">
      <ul className="divide-y divide-black-1000">
        {props.items
          .filter((item) =>
            item.name.toLowerCase().includes(props.search.toLowerCase())
          )
          .map((item) => (
            <div className="flip-card" key={item.id}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <li className="py-9 text-xl">{item.name}</li>
                </div>
                <div className="flip-card-back">
                  <button
                    className="previewButton"
                    onClick={(event) => handlePreview(item.hrefPreview)}
                  >
                    Preview
                  </button>
                  <button
                    className="codeButton"
                    onClick={(event) => handleCode(item.hrefCode)}
                  >
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
};

export { List };
