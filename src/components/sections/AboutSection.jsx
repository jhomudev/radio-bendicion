import { motion } from 'framer-motion'
import { mision, vision } from '../../data/media'
import usePage from '../../hooks/usePage'

function AboutSection () {
  const { aboutSection } = usePage()

  return (
    <section ref={aboutSection} className='section-site bg-mygray py-10 sm:py-20'>
      <div className='container px-5 mx-auto'>
        <motion.div
          className='text-section'
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0, transition: { type: 'tween', duration: 1 } }}
          viewport={{ once: true }}
        >
          <h2 className='text-xl font-dosis font-semibold uppercase text-myorange mb-2'>Nosotros</h2>
          <p className='text-gray-500'>
            Somos una radio que busca llegar al corazón del pueblo de Dios y de todas la personas. Nos importas tú y los demás, por lo cual a través de esta emisora queremos compartirte el mensaje de Cristo, nuestro Salvador.
          </p>
        </motion.div>
        <br />
        <br />
        <div className='flex flex-col gap-5'>
          <div className='flex flex-wrap md:gap-10 flex-row-reverse items-center justify-center'>
            <figure className='w-[min(100%,300px)]'>
              <img className='w-full h-full object-fill' src={mision} alt='mision' />
            </figure>
            <motion.article
              className='bg-white w-full md:w-1/2 -mt-10 md:mt-0 rounded-md py-3 px-5 shadow-lg'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0, transition: { type: 'tween', duration: 1 } }}
              viewport={{ once: true }}
            >
              <h3 className='font-dosis mb-1 text-xl text-myblue font-semibold'>Misión</h3>
              <p className='text-gray-500 text-sm'>Difundir el evangelio que es la palabra de Dios, para el arrepentimiento y perdón de pecados en Jesucristo, edificando y fortaleciendo la fe de la iglesia de habla quechua y hispana alrededor del mundo e impactar a las sociedades con una perspectiva bíblica y Cristocéntrica para que lleguen a ser salvos.</p>
            </motion.article>
          </div>
          <div className='flex flex-wrap md:gap-10 items-center justify-center'>
            <figure className='w-[min(100%,300px)]'>
              <img className='w-full h-full object-fill' src={vision} alt='vision' />
            </figure>
            <motion.article
              className='bg-white w-full md:w-1/2 -mt-10 md:mt-0 rounded-md py-3 px-5 text-right shadow-lg'
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0, transition: { type: 'tween', duration: 1 } }}
              viewport={{ once: true }}
            >
              <h3 className='font-dosis mb-1 text-xl text-myblue font-semibold'>Visión</h3>
              <p className='text-gray-500 text-sm'>Ser una radio cristiana digital de más audiencia, para la población en general, tener una programación bíblica, educativa, cultural Cristocéntrica y llegue a ser un paradigma en la orientación espiritual, moral e intelectual de habla quechua e hispana en todo el mundo.</p>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
