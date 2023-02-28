import SectionHeader from '../../UI/SectionHeader';
import classes from './classes.module.scss';

const SpecialOffer = () => {

  return (
    <section className={classes.special_offer}>
      <SectionHeader
        title={<span>Best Specialties</span>}
        subtitle={"special offer"}
      />
    </section>
  )
}

export default SpecialOffer