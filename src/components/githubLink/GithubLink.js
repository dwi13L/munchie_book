import React from "react";
import "./GithubLink.css";

export default function GithubLink({ source }) {
  return (
    <div className="repo-link">
      <a href={source} target="_blank" rel="noopener noreferrer">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="github icon"
        />
      </a>
    </div>
  );
}
