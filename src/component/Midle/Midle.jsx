import React from "react";
import { useState } from "react";
import newArray from "../Array/Array";
import css from "../Midle/midle.module.css";
import ProductCart from "./ProductCart";

const Midle = () => {
  const [products, setProducts] = useState(newArray);
  const [text, setText] = useState("");

  const changeText = (e) => {
    setText(e.target.value);
    if (e.target.value === "") {
      return setProducts(newArray);
    } else {
      setProducts(
        products.filter((item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <div>
      <div className={css.divInput}>
        <form>
          <input
            type="text"
            placeholder="Введите текст"
            className={css.input}
            value={text}
            onChange={changeText}
          />
        </form>
      </div>
      <div className={css.divmain}>
        {products.map((item, index) => {
          return <ProductCart key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Midle;
