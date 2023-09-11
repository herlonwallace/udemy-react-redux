import { cloneElement } from "react";

export default function Familia(props) {
    return (
      <>
        {props.children.map((children, i) => {
            return cloneElement(children, { ...props, key: i})
        })}  
      </>
    );
  }