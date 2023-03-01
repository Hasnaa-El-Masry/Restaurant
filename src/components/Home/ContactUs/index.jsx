import classes from './classes.module.scss';
import Button from '../../UI/Button';
import { TbSquareRotated } from 'react-icons/tb'
import { AiOutlineUser } from 'react-icons/ai'
import { BsClockFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Container from '../../UI/Container'

const ContactUs = () => {

  return (
    <section className={classes.contact}>
      <Container className={classes.container}>

        <div className={classes.form_container}>

          <div className={classes.header}>
            <h2>Online Reservation</h2>
            <p>Booking request <span>+88-123-123456</span>  or fill out the order form</p>
          </div>

          <div className={classes.form}>
            <form>
              <div className={classes.input_group}>
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='Your Phone' />
              </div>

              <div className={classes.input_group}>

                <div className={classes.select}>
                  <AiOutlineUser />
                  <select value='1'>
                    <option value="1">1 person</option>
                    <option value="2">2 person</option>
                    <option value="3">3 person</option>
                    <option value="4">4 person</option>
                    <option value="5">5 person</option>
                  </select>
                </div>

                <div className={classes.select}>
                  <input type="date" />
                </div>

                <div className={classes.select}>
                  <BsClockFill />
                  <select value=''>
                    <option value="">8:00 am</option>
                    <option value="">9:00 am</option>
                    <option value="">10:00 am</option>
                    <option value="">11:00 am</option>
                    <option value="">12:00 am</option>
                  </select>

                </div>


              </div>
              <textarea name="" id="" cols="20" rows="4" placeholder='Message'></textarea>
              <Button variant='primary' style={classes.action}>Book A Table</Button>

            </form>
          </div>

        </div>

        <div className={classes.location}>

          <div className={classes.header}>
            <h2>Contact Us</h2>
            <span>Booking Request</span>
            <div className={classes.number}> <Link to='' className='link'>+88-123-123456</Link></div>
            <TbSquareRotated className='icon'/>
          </div>

          <div className={classes.address}>
            <ul>
              <li>
                <h4>Location</h4>
                <p>Restaurant St, Delicious City, London 9578, UK</p>
              </li>

              <li>
                <h4>Lunch Time</h4>
                <p>Monday to Sunday <br />
                  11.00 am - 2.30pm</p>
              </li>

              <li>
                <h4>Dinner Time</h4>
                <p>Monday to Sunday <br />
                  05.00 pm - 10.00pm</p>
              </li>
            </ul>
          </div>

        </div>

      </Container>
    </section>
  )
}

export default ContactUs