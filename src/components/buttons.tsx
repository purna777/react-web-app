import { Children, useCallback } from "react";
import { useState } from "react";
import styles from "./buttons.module.css";

interface Props {
  children: string;
  onClickEve: () => void;
  color?: string;
}

const colorObj: MyObject = {
  key1: "primary",
  key2: "secondary",
  key3: "success",
};

interface MyObject {
  [key: string]: string;
}

function randomSelector() {
  let randomKey =
    Object.keys(colorObj)[
      Math.floor(Math.random() * Object.keys(colorObj).length)
    ];

  let randomValue = colorObj[randomKey];

  return randomValue;
}

function Button({ children, onClickEve, color = "primary" }: Props) {
  return (
    <>
      <button
        type="button"
        onClick={onClickEve}
        className={[styles.btn, styles["btn-" + randomSelector()]].join(" ")}
        data-bs-dismiss="alert"
      >
        {children}
      </button>
    </>
  );
}

export default Button;

export function Alert(props: Props) {
  return (
    <div
      className={
        [styles.alert, styles["alert-" + randomSelector()]].join(" ") +
        "alert-dismissible fade show"
      }
      role="alert"
    >
      {props.children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={props.onClickEve}
      ></button>
    </div>
  );
}

export function NewButton(props: Props) {
  const [cart, setCart] = useState({
    id: 1,
    items: [
      {
        name: "John",
        title: "product1",
        quantity: 1,
      },
      { name: "Trevolta", title: "product2", quantity: 1 },
    ],
  });

  const handleEvent = () => {
    setCart({ ...cart, items: cart.items.map(item => item.name === "John" ? {...item, quantity: 2} : item )}); //This create new player object if you want to update the existing player object, player:{...game.player, name:'bob'}
    console.log(cart);
  };
  return (
    <button
      onClick={() => {
        props.onClickEve();
        handleEvent();
      }}
    >
      Handle
    </button>
  );
}
