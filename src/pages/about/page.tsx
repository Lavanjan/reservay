import Contact from "../../components/widgets/Contact";
import FAQs from "../../components/widgets/FAQs";
import Features4 from "../../components/widgets/Features4";
import Hero2 from "../../components/widgets/Hero2";
import {
  contactAbout,
  faqsAbout,
  featuresFourAbout,
  featuresFourAboutTwo,
  hero2About,
} from "../../shared/data/pages/about.data";

export const metadata = {
  title: `About us`,
};

const AboutPage = () => {
  return (
    <>
      <Hero2 {...hero2About} />
      {/* <Stats {...statsAbout} /> */}
      <Features4 {...featuresFourAbout} />
      <Features4 {...featuresFourAboutTwo} />
      {/* <Steps {...stepsAbout} /> */}
      {/* <Features3 {...features3About} /> */}
      {/* <Features {...featuresAbout} /> */}
      {/* <Team2 {...teamAbout} /> */}
      {/* <Testimonials2 {...testimonials2About} /> */}
      <FAQs {...faqsAbout} />
      <Contact {...contactAbout} />
    </>
  );
};

export default AboutPage;
