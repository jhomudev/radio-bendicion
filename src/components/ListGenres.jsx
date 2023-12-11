import { Card, CardHeader, CardBody } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import genres from '../data/genres'
import { motion } from 'framer-motion'

function ListGenres () {
  return (
    <motion.div className='container px-2 mx-auto grid gap-5 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'>
      {
        genres.map((genre, id) => (
          <Card
            aria-label={genre.title}
            as={motion.div}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { type: 'spring', delay: id * 0.2 } }}
            whileHover={{ x: 5, y: -5 }}
            viewport={{ once: true }}
            key={genre.id}
            shadow='md'
            className='py-4 bg-white w-full'
          >
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
              <p className='text-tiny uppercase font-bold'>Programación</p>
              <time className='text-sm text-default-500 line-clamp-1'>{genre.hour}</time>
              <strong className='font-bold text-sm uppercase'>{genre.title}</strong>
            </CardHeader>
            <CardBody className='w-full overflow-visible py-2 px-4 grid place-items-center'>
              <Image
                className='w-full object-cover rounded-xl'
                src={genre.image}
                alt={genre.descri}
              />
            </CardBody>
          </Card>
        ))
      }
    </motion.div>
  )
}
export default ListGenres
