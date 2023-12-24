import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

const List = (props): JSX.Element => {
    const navigate = useNavigate();
    const handlePreview = (link) => {
        navigate(link);
    }
  return (
    <div className="overflow-hidden rounded-md bg-white shadow">
      <ul className="divide-y divide-black-1000">
        {props.items.map((item) => (
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <li key={item.id} className="py-9 text-xl">
                  {item.name}
                </li>
              </div>
              <div className="flip-card-back">
                <button className="previewButton" onClick={(event) => handlePreview(item.hrefPreview)}>Preview</button>
                <button className="codeButton">Code</button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export { List };
