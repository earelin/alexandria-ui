import React from "react";

export default function UserProfileWidget(props) {
  return (
    <div>
      <i className="bi-person-fill"/>&nbsp;
      <span>{props.username}</span>
    </div>
  )
}
