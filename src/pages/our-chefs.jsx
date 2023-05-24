import Contianer from "../components/UI/Container";
import bgSrc from "../assets/images/chefs-header.jpg";
import PageHeader from "../components/UI/PageHeader";

const OurChefs = () => {
  return (
    <>
      <PageHeader title="Meet Our Chefs" subtitle="Our Team" src={bgSrc} />

      <Contianer>
        <main>
          <section>Experience</section>
          <section>Qoute</section>
          <section>Team</section>
        </main>
      </Contianer>
    </>
  );
};

export default OurChefs;
