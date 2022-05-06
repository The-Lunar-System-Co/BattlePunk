import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import PunkyDexEnergy from "../components/punkydex-energy";
import PunkyDexCard from "../components/punkydex-card";

import EnergyIcon1 from "../assets/images/energy-icons/45.png";
import EnergyIcon2 from "../assets/images/energy-icons/46.png";
import EnergyIcon3 from "../assets/images/energy-icons/47.png";
import EnergyIcon4 from "../assets/images/energy-icons/48.png";
import EnergyIcon5 from "../assets/images/energy-icons/49.png";
import EnergyIcon6 from "../assets/images/energy-icons/50.png";

const PunkyDex = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="page-punkydex">
      <div className="page-punkydex__container">
        <div className="page-punkydex__container__title">Punkydex Database</div>
        <div className="page-punkydex__container__search">
          <div className="page-punkydex__container__search__title">Search</div>
          <div className="page-punkydex__container__search__body">
            <div className="page-punkydex__container__search__body__1">
              <div className="page-punkydex__container__search__body__1__title">
                Card Name and Keyword Search
              </div>

              <div className="page-punkydex__container__search__body__1__body">
                <div className="page-punkydex__container__search__body__1__body__item">
                  <div className="page-punkydex__container__search__body__1__body__item__title">
                    Card Name
                  </div>
                  <input className="page-punkydex__container__search__body__1__body__item__input" />
                </div>

                <div className="page-punkydex__container__search__body__1__body__item">
                  <div className="page-punkydex__container__search__body__1__body__item__title">
                    Card Text
                  </div>
                  <input className="page-punkydex__container__search__body__1__body__item__input" />
                </div>

                <div className="page-punkydex__container__search__body__1__body__item">
                  <div className="page-punkydex__container__search__body__1__body__item__title">
                    Evolves From
                  </div>
                  <input className="page-punkydex__container__search__body__1__body__item__input" />
                </div>
              </div>
            </div>
            <div className="page-punkydex__container__search__body__2">
              <div className="page-punkydex__container__search__body__2__title">
                Energy Type
              </div>

              <div className="page-punkydex__container__search__body__2__body">
                <PunkyDexEnergy
                  icon={EnergyIcon1}
                  title="Energy Type 1"
                  selected={false}
                />
                <PunkyDexEnergy
                  icon={EnergyIcon2}
                  title="Energy Type 2"
                  selected={false}
                />
                <PunkyDexEnergy
                  icon={EnergyIcon3}
                  title="Energy Type 3"
                  selected={false}
                />
                <PunkyDexEnergy
                  icon={EnergyIcon4}
                  title="Energy Type 4"
                  selected={false}
                />
                <PunkyDexEnergy
                  icon={EnergyIcon5}
                  title="Energy Type 5"
                  selected={false}
                />
                <PunkyDexEnergy
                  icon={EnergyIcon6}
                  title="Energy Type 6"
                  selected={false}
                />
              </div>
            </div>
          </div>

          <div className="page-punkydex__container__search__footer">
            <div className="page-punkydex__container__search__footer__btn">
              Reset
            </div>
            <div className="page-punkydex__container__search__footer__btn">
              Search
            </div>
          </div>
        </div>
        <div className="page-punkydex__container__cards">
          <div className="page-punkydex__container__cards__title">Cards</div>
          <div className="page-punkydex__container__cards__carousel">
            <Carousel
              responsive={responsive}
              infinite={true}
              // autoPlay={false}
              // swipeable={false}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              <PunkyDexCard
                image={EnergyIcon1}
                title="Card1"
                description="Description"
              />
              <PunkyDexCard
                image={EnergyIcon2}
                title="Card2"
                description="Description"
              />
              <PunkyDexCard
                image={EnergyIcon3}
                title="Card3"
                description="Description"
              />
              <PunkyDexCard
                image={EnergyIcon4}
                title="Card4"
                description="Description"
              />
              <PunkyDexCard
                image={EnergyIcon5}
                title="Card5"
                description="Description"
              />
              <PunkyDexCard
                image={EnergyIcon6}
                title="Card6"
                description="Description"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PunkyDex;
