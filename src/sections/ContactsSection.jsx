import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { rimg1, rimg2, rimg3 } from '@/data/media'
import { motion } from 'framer-motion'
import { usePage } from '@/hooks'

function ContactsSection () {
  const { contactsSection } = usePage()

  return (
    <section ref={contactsSection} className='section-site bg-white py-10 sm:py-20'>
      <div className='container px-5 mx-auto text-right'>
        <motion.div
          className='text-section'
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0, transition: { type: 'tween', duration: 1 } }}
          viewport={{ once: true }}
        >
          <h2 className='text-xl font-dosis font-semibold uppercase text-myorange mb-2'>Contáctanos</h2>
          <p className='text-gray-500'>y solicite sus canciones favoritas, lo escucharemos y atenderemos los pedidos de nuestros radioyentes.</p>
        </motion.div>
        <br />
        <div className='flex flex-col-reverse md:flex-row gap-10 mt-5'>
          <motion.div
            className='college flex flex-wrap justify-center gap-5 sm:gap-10 max-w-[1050px] mt-0 sm:mt-10'
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0, transition: { type: 'tween', duration: 1 } }}
            viewport={{ once: true }}
          >
            <img className='hidden md:block w-[40%] sm:w-[35%] rounded-md rotate-3' src={rimg1} alt='radio bendición samugari' />
            <img className='hidden md:block w-[40%] sm:w-[35%] rounded-md -rotate-3' src={rimg2} alt='radio bendición samugari' />
            <img className='w-10/12 md:w-[40%] rounded-md md:rotate-3' src={rimg3} alt='radio bendición samugari' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0, transition: { type: 'tween', duration: 1 } }}
            viewport={{ once: true }}
          >
            <h3 className='text-myblue font-kumbh mb-3'>Nuestros contactos</h3>
            <ul className='flex flex-col gap-3'>
              <li className='font-dosis flex items-center gap-3 justify-end'>
                <a
                  aria-label='llamar a la radio'
                  role='link' className='hover:underline' target='_blank' href='tel:+51966978585' rel='noreferrer'
                >988988070
                </a>
                <span className='text-lg'><FontAwesomeIcon icon={faPhone} /></span>
              </li>
              <li className='font-dosis flex items-center gap-3 justify-end'>
                <a
                  aria-label='escribir al whatsapp'
                  role='link' className='hover:underline' target='_blank' href='https://api.whatsapp.com/send?phone=51988988070&text=RadioBendiciónPalmapampaSamugari.' rel='noreferrer'
                >988988070
                </a>
                <span className='text-lg'>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </span>
              </li>
              <li className='font-dosis flex items-center gap-3 justify-end'>
                <a
                  aria-label='visitar pagina de facebook'
                  role='link' className='hover:underline' target='_blank' href='https://www.facebook.com/profile.php?id=100089312583025' rel='noreferrer'
                >Radio bendicón Samugari
                </a>
                <span className='text-lg'>
                  <FontAwesomeIcon icon={faFacebook} />
                </span>
              </li>
              <li className='font-dosis flex items-center gap-3 justify-end'>
                <a
                  aria-label='enviar correo'
                  role='link' className='hover:underline' target='_blank' href='mailto:radiobendicion@gmail.com.' rel='noreferrer'
                >radiobendicion@gmail.com.
                </a>
                <span className='text-lg'><FontAwesomeIcon icon={faEnvelope} /></span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default ContactsSection
