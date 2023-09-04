import { Card, CardHeader, CardBody } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import genres from '../../data/genres'

function ProgramationSection () {
  return (
    <section className='section-site bg-mygray py-10 sm:py-20'>
      <div className='container px-5 mx-auto'>
        <div className='text-section'>
          <h2
            className='text-xl font-dosis uppercase font-semibold mb-2'
            data-aos='fade-right'
            data-aos-offset='300'
            data-aos-easing='ease-in-sine'
          >
            Disfruta de <span className='text-myorange'>nuestra Programación</span>
          </h2>
          <p
            className='text-gray-500'
            data-aos='fade-left'
            data-aos-easing='ease-in-sine'
            data-aos-duration='1000'
          >Nuestra emisora transmite desde las 4:00 am hasta las 9:00 pm. Tenemos una programación pensada para todo público cristiano, incluyendo programación infantil hasta juvenil y folcklorica, además de mensajes de la palabra de Dios. Disfrute de esta programación y que su vida se llene de la bendición del Señor a traves de nuestra señal.
          </p>
        </div>
        <br />
        <div className='container px-2 mx-auto grid gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'>
          {
            genres.map(genre => (
              <Card key={genre.id} data-aos='zoom-in-down' data-aos-duration='1000' className='py-4 bg-white w-full shadow-lg hover:!translate-x-1 hover:!translate-y-1 transition-transform duration-100'>
                <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
                  <p className='text-tiny uppercase font-bold'>Programación</p>
                  <small className='text-default-500 line-clamp-1'>{genre.hour}</small>
                  <h4 className='font-bold text-sm uppercase'>{genre.title}</h4>
                </CardHeader>
                <CardBody className='w-full overflow-visible py-2 px-4 grid place-items-center'>
                  <Image
                    isZoomed
                    alt={genre.descri}
                    className='w-full object-cover rounded-xl'
                    src={genre.image}
                  />
                </CardBody>
              </Card>
            ))
          }
        </div>
      </div>
    </section>
  )
}
export default ProgramationSection
