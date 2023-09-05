import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faWheatAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { rimg1, rimg2, rimg3 } from '../../data/media'
import usePage from '../../hooks/usePage'

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
            <img className='w-[40%] sm:w-[35%] rounded-md rotate-3' src={rimg1} alt='radio bendición samugari' />
            <img className='w-[40%] sm:w-[35%] rounded-md -rotate-3' src={rimg2} alt='radio bendición samugari' />
            <img className='w-[40%] sm:w-[35%] rounded-md rotate-3' src={rimg3} alt='radio bendición samugari' />
          </div>
          <div data-aos='fade-left' data-aos-duration='500'>
            <h4 className='text-myblue font-kumbh mb-3'>Nuestros contactos</h4>
            <ul className='flex flex-col gap-3'>
              <li className='font-dosis flex items-center gap-3 justify-end'>
                <a className='hover:underline' target='_blank' href='tel:+51966978585' rel='noreferrer'>988988070</a>
                <span><FontAwesomeIcon icon={faPhone} /></span>
              </li>
              <li className='font-dosis flex items-center gap-3 justify-end'>
                <a className='hover:underline' target='_blank' href='https://api.whatsapp.com/send?phone=51988988070&text=RadioBendiciónPalmapampaSamugari.' rel='noreferrer'>988988070</a>
                <span><FontAwesomeIcon icon={faPhone} /></span>
              </li>
              <li className='font-dosis flex items-center gap-3 justify-end'>
                <a className='hover:underline' target='_blank' href='https://www.facebook.com/profile.php?id=100089312583025' rel='noreferrer'>Radio bendicón Samugari</a>
                <span><FontAwesomeIcon icon={faWheatAlt} /></span>
              </li>
              <li className='font-dosis flex items-center gap-3 justify-end'>
                <a className='hover:underline' target='_blank' href='mailto:radiobendicion@gmail.com.' rel='noreferrer'>radiobendicion@gmail.com.</a>
                <span><FontAwesomeIcon icon={faEnvelope} /></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactsSection
