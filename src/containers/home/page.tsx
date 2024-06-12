import React, { Suspense, lazy } from "react";
import { SITE } from "../../config.js";

const Hero = lazy(() => import("../../components/widgets/Hero"));
const Features = lazy(() => import("../../components/widgets/Features"));
const Content = lazy(() => import("../../components/widgets/Content"));
const FAQs2 = lazy(() => import("../../components/widgets/FAQs2"));
const Pricing = lazy(() => import("../../components/widgets/Pricing"));
const Contact = lazy(() => import("../../components/widgets/Contact"));
const Demo = lazy(() => import("../../components/widgets/Demo"));
import {
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  contentHomeThree,
  contentHomeFour,
  faqs2Home,
  featuresHome,
  heroHome,
  pricingHome,
  contentHomeFive,
  contentHomeSix,
  demoContent,
} from "../../shared/data/pages/home.data";

export const metadata = {
  title: SITE.title,
};

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero {...heroHome} />
      <Features {...featuresHome} />
      <Demo {...demoContent} />
      <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Content {...contentHomeThree} />
      <Content {...contentHomeFour} />
      <Content {...contentHomeFive} />
      <Content {...contentHomeSix} />
      <FAQs2 {...faqs2Home} />
      <Pricing {...pricingHome} />
      <Contact {...contactHome} />
    </Suspense>
  );
}
