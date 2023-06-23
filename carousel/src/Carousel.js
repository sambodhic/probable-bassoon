import React from "react";
import { useState } from "react";
import { CarouselItem } from "./CarouselItem";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      description:
        "While couple love can be wonderful, there are some potential drawbacks. These include emotional vulnerability, the need for compromise, conflicts and disagreements, a potential loss of personal freedom, dependency, incompatibility, the effort required to maintain the relationship, and the risk of heartbreak. However, not all couples experience these challenges to the same extent, and open communication and mutual respect can help navigate them.",
      icon: require("./resources/undraw_couple_love_re_3fw6.png"),
    },
    {
      description:
        "The cons of being in love include the vulnerability to heartbreak, a potential loss of independence, experiencing emotional ups and downs, the need for compromise and sacrifice, challenges in communication and conflicts, and the risk of having unrealistic expectations. However, being in love can also bring joy and personal growth, and successful relationships require effort, understanding, and mutual support to navigate these challenges.",
      icon: require("./resources/undraw_In_love_6sq2.png"),
    },
    {
      description:
        "Being in love with something can have drawbacks, including potential obsession and imbalance, limited perspective, unrealistic expectations, the risk of losing interest or experiencing burnout, financial implications, and limited personal growth. However, recognizing and addressing these challenges can help maintain a healthy and balanced perspective while still enjoying your passion.",
      icon: require("./resources/undraw_Love_it_uipc.png"),
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = items.length - 1;
    } else if (newIndex >= items.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => {
          return <CarouselItem key={index} item={item} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                key={index}
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};
