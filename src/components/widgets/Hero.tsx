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
import Iframe from "react-iframe";

const Hero = ({
  title,
  subtitle,
  mainTitle,
  callToAction,
  callToAction2,
  callToAction3,
  appName,
}: HeroProps) => {
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);

  const handleClickDemoVideo = (href: string | undefined) => {
    setVideoSrc(href);
  };

  return (
    <section id="heroOne">
      {videoSrc && (
        <div className="relative text-center max-w-8xl h-screen bg-center pb-20">
          <div className="flex justify-center items-center h-5/6 pb-10 pt-10 pr-1/12 w-4/5 sm:w-8/12 mx-auto">
            <Iframe
              // className="absolute w-11/12 h-4/5 "
              frameBorder={0}
              allowFullScreen
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen;"
              referrerpolicy="strict-origin-when-cross-origin"
              url={videoSrc}
            ></Iframe>
          </div>
        </div>
      )}
      {!videoSrc && (
        <>
          <Carousel
            leftControl={true}
            rightControl={true}
            indicators={false}
            className={`absolute mx-auto max-w-8xl h-screen bg-cover bg-center bg-black bg-opacity-90 hidden lg:block`}
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
            className={`absolute mx-auto max-w-8xl h-screen bg-cover bg-center bg-black bg-opacity-90 lg:hidden`}
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
                    {callToAction3 && (
                      <CTA
                        callToAction={callToAction3}
                        linkClass="btn"
                        onClick={() => handleClickDemoVideo(callToAction3.href)}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
