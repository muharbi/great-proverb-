import { useRef, useState, lazy } from "react";
import styles from "./styles.module.scss";

const PopupExample = () => {
  const [info, setInfo] = useState(false);

  const openInfo = () => {
    setInfo(true);
  };

  const closeInfo = () => {
    setInfo(false);
  };

  return (
    <div className={styles.container}>
      <p>Узнать секретный ингредиент секретно-ингредиентного кода:</p>
      <button type="button" className={styles.button_door} onClick={openInfo}>
        ⤴︎
      </button>
      {info && (
        <div className={styles.wrapper}>
          <div className={styles.container_info}>
            <div className={styles.info}>
              <p>
                Секретно-ингредиентного кода не существует. Чтобы сделать что-то
                особенное, надо просто поверить, что это что-то особенное!
              </p>
              <button
                type="button"
                className={styles.button_secret}
                onClick={closeInfo}
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
