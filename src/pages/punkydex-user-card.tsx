import React from "react";

import CardImage4 from "../assets/images/card-images/card-4.png";

const PunkyDexCard = () => {
  return (
    <div className="page-punkydex-card">
      <div className="page-punkydex-card__container">
        <div className="page-punkydex-card__container__title">
          PunkyDex Database
        </div>
        <div className="page-punkydex-card__container__body">
          <div className="page-punkydex-card__container__body__1">
            <img
              className="page-punkydex-card__container__body__1__card"
              src={CardImage4}
              alt="single-card"
            />
            <div className="page-punkydex-card__container__body__1__btn">Find in Dex</div>
            <div className="page-punkydex-card__container__body__1__btn">Explore more</div>
          </div>
          <div className="page-punkydex-card__container__body__2">
            <div className="page-punkydex-card__container__body__2__title">PunkyDex Card Name</div>
            <div className="page-punkydex-card__container__body__2__main-info">
                <div>Punky-VMAX</div>
                <div>Evolves From : Punky-VMAX delta</div>
            </div>
            <div className="page-punkydex-card__container__body__2__info">
                <div className="page-punkydex-card__container__body__2__info__title">Dark Signal</div>
                <div className="page-punkydex-card__container__body__2__info__content">When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.</div>
            </div>
            <div className="page-punkydex-card__container__body__2__info">
                <div className="page-punkydex-card__container__body__2__info__title">VMAX rule</div>
                <div className="page-punkydex-card__container__body__2__info__content">When your Pokémon VMAX is Knocked Out, your opponent takes 3 Prize cards.</div>
            </div>
            <div className="page-punkydex-card__container__body__2__info">
                <div className="page-punkydex-card__container__body__2__info__title">Dark Signal</div>
                <div className="page-punkydex-card__container__body__2__info__content">When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.</div>
            </div>
            <div className="page-punkydex-card__container__body__2__info">
                <div className="page-punkydex-card__container__body__2__info__title">VMAX rule</div>
                <div className="page-punkydex-card__container__body__2__info__content">When your Pokémon VMAX is Knocked Out, your opponent takes 3 Prize cards.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PunkyDexCard;
