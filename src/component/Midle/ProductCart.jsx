import React, { useState } from "react";
import css from "./midle.module.css";

const ProductCart = ({ item }) => {
  const [button, setButton] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [detal, setDetal] = useState(true);

  const handleAdd = () => {
    if (button) {
      setButton(false);
      setDisabled(true);
    }
  };
  const handleCor = () => {
    if (!button) {
      setButton(true);
      setDisabled(false);
    }
  };
  const handleDetal = (i) => {
    setDetal(false);
  };
  const handleX = () => {
    if (!detal) {
      setDetal(true);
    }
  };

  return (
    <div className={css.divMidle}>
      <div className={css.divImg}>
        <img src={item.img} alt="" />
      </div>
      <div className={css.divDetal}>
        <div className={css.divNamePrice}>
          <h1 className={css.divName}>{item.name}</h1>
          <h1 className={css.divPrice}>{item.price}</h1>
        </div>
        <button className={css.btn} onClick={() => handleDetal()}>
          Детали
        </button>
        {!detal && (
          <div className={css.qwe}>
            <div className={css.btnDivLorem}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>

            <button className={css.btn5} onClick={handleX}>
              x
            </button>
          </div>
        )}
      </div>
      <hr />
      <div className="corzina">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae et
          cum, perferendis magni ipsam quaerat.
        </p>
        <div className={css.divButton}>
          <button
            className={disabled ? `${css.btn4}` : `${css.btn2}`}
            disabled={disabled}
            onClick={handleAdd}
          >
            {button ? "Добавить в корзину" : "Уже в корзине"}
          </button>
          {!button && (
            <button className={css.btn3} onClick={handleCor}>
              Удалить из корзины
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
