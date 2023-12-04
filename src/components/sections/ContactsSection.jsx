import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { rimg1, rimg2, rimg3 } from '../../data/media'
import usePage from '../../hooks/usePage'

const WhatsappIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'><path d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z' /></svg>
  )
}
const FacebookIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'><path d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z' /></svg>
  )
}

function ContactsSection () {
  const { contactsSection } = usePage()

  return (
    <section ref={contactsSection} className='section-site bg-white py-10 sm:py-20'>
      <div className='container px-5 mx-auto text-right'>
        <div
          className='text-section'
          data-aos='fade-right'
          data-aos-offset='300'
          data-aos-easing='ease-in-sine'
          data-aos-duration='500'
        >
          <h2 className='text-xl font-dosis font-semibold uppercase text-myorange mb-2'>Contáctanos</h2>
          <p className='text-gray-500'>y solicite sus canciones favoritas, lo escucharemos y atenderemos los pedidos de nuestros radioyentes.</p>
        </div>
        <br />
        <div className='flex flex-col-reverse md:flex-row gap-10 mt-5'>
          <div
            className='college flex flex-wrap justify-center gap-5 sm:gap-10 max-w-[1050px] mt-0 sm:mt-10'
            data-aos='fade-right' data-aos-duration='500'
          >
            <img className='hidden md:block w-[40%] sm:w-[35%] rounded-md rotate-3' src={rimg1} alt='radio bendición samugari' />
            <img className='hidden md:block w-[40%] sm:w-[35%] rounded-md -rotate-3' src={rimg2} alt='radio bendición samugari' />
            <img className='w-10/12 md:w-[40%] rounded-md md:rotate-3' src={rimg3} alt='radio bendición samugari' />
          </div>
          <div data-aos='fade-left' data-aos-duration='500'>
            <h4 className='text-myblue font-kumbh mb-3'>Nuestros contactos</h4>
            <ul className='flex flex-col gap-3'>
              <li className='font-dosis flex items-center gap-3 justify-end'>
                <a className='hover:underline' target='_blank' href='tel:+51966978585' rel='noreferrer'>988988070</a>
                <span className='text-lg'><FontAwesomeIcon icon={faPhone} /></span>
              </li>
              <li className='font-dosis flex items-center gap-3 justify-end'>
                <a className='hover:underline' target='_blank' href='https://api.whatsapp.com/send?phone=51988988070&text=RadioBendiciónPalmapampaSamugari.' rel='noreferrer'>988988070</a>
                <span className='text-lg'><WhatsappIcon /></span>
              </li>
              <li className='font-dosis flex items-center gap-3 justify-end'>
                <a className='hover:underline' target='_blank' href='https://www.facebook.com/profile.php?id=100089312583025' rel='noreferrer'>Radio bendicón Samugari</a>
                <span className='text-lg'><FacebookIcon /></span>
              </li>
              <li className='font-dosis flex items-center gap-3 justify-end'>
                <a className='hover:underline' target='_blank' href='mailto:radiobendicion@gmail.com.' rel='noreferrer'>radiobendicion@gmail.com.</a>
                <span className='text-lg'><FontAwesomeIcon icon={faEnvelope} /></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactsSection
