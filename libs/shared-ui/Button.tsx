import * as React from "react";

export function Button(props: {
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={() => {
        alert("clicked");
        props?.onClick();
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;
