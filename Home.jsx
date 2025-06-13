import "bootstrap/dist/css/bootstrap.min.css";
import { Aboutus } from "./src/components/aboutus/Aboutus";
import { Service } from "./src/components/services/Service";
import { Action } from "./src/components/action/Action";
import { Skills } from "./src/components/skills/Skills";
import { Fact } from "./src/components/facts/Fact";
import { Portfolia } from "./src/components/card-filter/Portfolia";
import { Slider } from "./src/components/logo_slider/Slider";
import { Testimonial } from "./src/components/testimonial/Testimonial";
import { Team } from "./src/components/team/Team";
import { ContactUs } from "./src/components/contactUs/ContactUs";
import { Form } from "./src/components/form/Form";
import { Corousal } from "./src/components/corousal/Corousal";
import { LogoCard } from "./src/components/logocard/LogoCard";

export const Home = () => {
  return (
    <>
      <Corousal/>
      <LogoCard/>
      <Aboutus/>
      <Service/>
      <Action/>
      <Skills/>
      <Fact/>
      <Portfolia/>
      <Slider/>
      <Testimonial/>
      <Team/>
      <ContactUs/>
      <Form/>

    </>
  );
}

