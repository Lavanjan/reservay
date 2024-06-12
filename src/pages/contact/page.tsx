import Contact2 from "../../components/widgets/Contact2";
import Hero from "../../components/widgets/Hero";
import {
  heroContact,
  contact2Contact,
} from "../../shared/data/pages/contact.data";

export const metadata = {
  title: "Contact us",
};

const ContactPage = () => {
  return (
    <>
      <Hero {...heroContact} />
      <Contact2 {...contact2Contact} />
      {/* <Features2 {...features2Contact} /> */}
    </>
  );
};

export default ContactPage;