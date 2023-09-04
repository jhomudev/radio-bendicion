import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@nextui-org/button'
import Carousel from './../Carousel'
import Player from './../Player'
import usePlayer from '../../hooks/usePlayer'

function HomeSection () {
  const { isPlay, togglePlay } = usePlayer()
  return (
    <section className='section-site grid place-items-center -mt-[80px]'>
      <Carousel />
      <main className='container relative z-20 mx-auto px-3 w-full h-screen flex flex-col lg:flex-row gap-5 lg:gap-10 items-center justify-center'>
        <div className='content text-center'>
          <h1 className='text-mygray text-4xl font-bold uppercase font-dosis'>Somos <strong className='text-mygold'>radio bendición 90.5 fm</strong></h1>
          <h2 className='text-mypink text-xl font-bold uppercase font-kumbh'>Samugari</h2>
          <p className='text-mygray font-kumbh'>La radio que te bendice y edifica tu espíritu.</p>
          <p className='text-mygray italic'>"Aclamad con júbilo al SEÑOR, toda la tierra; prorrumpid y cantad con gozo, cantad alabanzas." Salmos 98:4</p>
          <br />
          <Button variant='solid' size='lg' color='secondary' onPress={togglePlay}><FontAwesomeIcon icon={isPlay ? faPause : faPlay} /> Play</Button>
        </div>
        <Player />
      </main>
    </section>
  )
}
export default HomeSection
