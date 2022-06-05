import React, { useState } from "react";
import style from "./Star.module.css";

const Star = () => {
  // Создаем состояние с текущем выбраным рейтингом
  const [rating, setRating] = useState(-1);
  // Необязательно, но просто чтобы уменьшить код создал пустой массив с количество элементов = звездам,
  // Чтобы пробежаться по ним через map в jsx
  const [maxStar, setMaxStar] = useState([0, 0, 0, 0, 0]);

  return (
    <div className={style.Contents}>
      <div className={style.Contents__wrapper}>
        <div className={style.Contents__block}>
          <div className={style.star__rating}>
            {maxStar.map((item, index) => {
              // Вызываю компонент и перадаю в него пропы с текущем состоянием, функцию изминения,
              // index через него получим на какую по счету звезду нажали
              // тк это тот же итератор из циклов.
              // ну и key, это уже условия реакта
              return (
                <ButtonStar
                  rating={rating}
                  setRating={setRating}
                  index={index}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// тк спец символы реактом не рендярться, а данное свойсво dangerouslySetInnerHTML тут не помогает,
// используем декодер
// https://github.com/facebook/react/issues/7825
function htmlDecode(content) {
  let e = document.createElement("div");
  e.innerHTML = content;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

// Другой компонент желательно в другом файле, но я оставлю его тут
const ButtonStar = ({ rating, setRating, index }) => {
  return (
    <button onClick={() => setRating(index)} className={style.star}>
      {rating + 1 > index ? htmlDecode("&#9733;") : htmlDecode("&#9734;")}
    </button>
  );
};

export default Star;