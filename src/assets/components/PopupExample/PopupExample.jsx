import { useState } from "react";
import styles from "./styles.module.scss";

const PopupExample = () => {
  const [info, setInfo] = useState(false);
  const [isAnimation, setIsAnimation] = useState(false);

  const handlOpen = () => {
    setInfo(true);
    setTimeout(() => setIsAnimation(true), 10);
  };

  const handClose = () => {
    setIsAnimation(false);
    setTimeout(() => setInfo(false), 300);
  };

  return (
    <div className={styles.container}>
      <p>Узнать секретный ингредиент секретно-ингредиентного кода:</p>
      <button type="button" className={styles.button_door} onClick={handlOpen}>
        ⤴︎
      </button>
      {info && (
        <div
          className={`${styles.wrapper} ${
            isAnimation ? styles.open : styles.close
          }`}
        >
          <div className={styles.container_info}>
            <div className={styles.info}>
              <p>
                Секретно-ингредиентного кода не существует. Чтобы сделать что-то
                особенное, надо просто поверить, что это что-то особенное!
              </p>
              <button
                type="button"
                className={styles.button_secret}
                onClick={handClose}
              >
                ☹
              </button>
            </div>
            <img loading="lazy" src="./saitama.png" alt="ok" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupExample;
