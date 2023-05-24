import Contianer from "../components/UI/Container";
import PageHeader from "../components/UI/PageHeader";
import bgSrc from "../assets/images/menu-header.jpg";

const Menu = () => {
  return (
    <>
      <PageHeader title="Our Menu" subtitle="Delicious & Amazing" src={bgSrc} />
      <Contianer>
        <main>
          <section>starter menu</section>
          <section>main dishes</section>
          <section>special offer</section>
          <section>chef selection</section>
        </main>
        <section>Online Reservation</section>
      </Contianer>
    </>
  );
};

export default Menu;
