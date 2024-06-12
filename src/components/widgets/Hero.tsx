import React, { useState } from "react";
import { HeroProps } from "~/shared/types";
import CTA from "../common/CTA";
import coverImageWeb from "../../assets/images/backgroundFront.png";
import hotelImageWeb from "../../assets/images/hotel.png";
import restaurantImageWeb from "../../assets/images/restaurant.png";
import mobileImageWeb from "../../assets/images/mobile.png";
import coverImageMobile from "../../assets/images/Front-Mobile.png";
import hotelImageMobile from "../../assets/images/Front-Hotel.png";
import restaurantImageMobile from "../../assets/images/Front-Restaurant.png";
import mobileAppImageMobile from "../../assets/images/Front-MobileApp.png";
import { Carousel } from "flowbite-react";

const Hero = ({
  title,
  subtitle,
  mainTitle,
  callToAction,
  callToAction2,
  appName,
}: HeroProps) => {
  return (
    <section id="heroOne">
      <Carousel
        leftControl={true}
        rightControl={true}
        indicators={false}
        className={`absolute mx-auto max-w-8xl h-screen bg-cover bg-center bg-black bg-opacity-90`}
      >
        <img src={coverImageWeb} alt="Background Image" />
        <img src={hotelImageWeb} alt="Background Image" />
        <img src={restaurantImageWeb} alt="Background Image" />
        <img src={mobileImageWeb} alt="Background Image" />
      </Carousel>

      <Carousel
        leftControl={true}
        rightControl={true}
        indicators={false}
        className={`absolute lg:hidden xl:hidden 2xl:hidden mx-auto max-w-8xl h-screen bg-cover bg-center bg-black bg-opacity-90`}
      >
        <img src={coverImageMobile} alt="Background Image" />
        <img src={hotelImageMobile} alt="Background Image" />
        <img src={restaurantImageMobile} alt="Background Image" />
        <img src={mobileAppImageMobile} alt="Background Image" />
      </Carousel>
      <div className="relative w-full bg-black h-screen bg-opacity-70 flex justify-center items-center pt-20 pb-10 md:pt-0 lg:pt-0">
        <div>
          <div className="mx-auto max-w-4xl align-middle px-4 md:px-6 text-center">
            {mainTitle && (
              <p className="leading-tighter mb-4 text-base md:text-lg lg:text-lg text-white tracking-tighter">
                {mainTitle}
              </p>
            )}
            {title && appName && (
              <div className="mb-4 md:mb-6">
                <span className="leading-tighter font-heading text-3xl md:text-4xl lg:text-4xl text-amber-500 font-bold tracking-tighter">
                  {appName}
                </span>{" "}
                &nbsp;
                <span className="leading-tighter font-heading text-3xl md:text-4xl lg:text-4xl text-white font-bold tracking-tighter">
                  {title}
                </span>
              </div>
            )}
            <div className="mx-auto max-w-3xl">
              {subtitle && (
                <p className="mb-4 md:mb-6 text-base md:text-xl text-slate-400">
                  {subtitle}
                </p>
              )}
              <div className="flex flex-col pb-10 sm:flex-row gap-4 justify-center px-2 md:px-4">
                {callToAction && (
                  <CTA
                    callToAction={callToAction}
                    linkClass="btn btn-primary"
                  />
                )}
                {callToAction2 && (
                  <CTA callToAction={callToAction2} linkClass="btn" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
