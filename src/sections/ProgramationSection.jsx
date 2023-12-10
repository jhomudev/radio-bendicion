import { ListGenres } from '@/components'
import { usePage } from '@/hooks'
import { motion } from 'framer-motion'

function ProgramationSection () {
  const { progSection } = usePage()

  return (
    <section ref={progSection} className='section-site bg-mygray py-10 sm:py-20'>
      <div className='container px-5 mx-auto'>
        <div className='text-section'>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0, transition: { type: 'spring', duration: 1 } }}
            viewport={{ once: true }}
            className='text-xl font-dosis uppercase font-semibold mb-2'
          >
            Disfruta de <span className='text-myorange'>nuestra Programación</span>
          </motion.h2>
          <motion.p
            className='text-gray-500'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0, transition: { type: 'tween', duration: 1 } }}
            viewport={{ once: true }}
          >Nuestra emisora transmite desde las 4:00 am hasta las 9:00 pm. Tenemos una programación pensada para todo público cristiano, incluyendo programación infantil hasta juvenil y folcklorica, además de mensajes de la palabra de Dios. Disfrute de esta programación y que su vida se llene de la bendición del Señor a traves de nuestra señal.
          </motion.p>
        </div>
        <br />
        <ListGenres />
      </div>
    </section>
  )
}
export default ProgramationSection
