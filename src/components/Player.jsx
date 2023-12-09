import { logoRadio, urlStreamRadio } from '../data/media'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import usePlayer from '../hooks/usePlayer'
import { useEffect } from 'react'
import { Slider } from '@nextui-org/slider'
import { Button } from '@nextui-org/button'
import { motion } from 'framer-motion'

function Player () {
  const {
    isPlay,
    volume,
    isMuted,
    audio,
    toggleMuted,
    changeVolume,
    togglePlay
  } = usePlayer()

  const handleChangeVolume = (value) => {
    changeVolume(value)
  }

  useEffect(() => {
    audio.current.volume = isPlay ? volume : 0
    audio.current.muted = isMuted
  }, [isPlay, isMuted])

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0, transition: { type: 'spring' } }}
        viewport={{ once: true }}
        className='relative flex flex-col items-center w-[min(100%,400px)] px-0 sm:px-7'
      >
        <div className='w-[85%] bg-white py-2 pb-3 rounded-lg grid place-items-center text-myblue'>
          <strong className='font-dosis uppercase text-xl'> Radio bendición 90.5 FM</strong>
          <span className='text-sm leading-tight'>Palmapampa - Samugari</span>
        </div>
        <div className='relative z-10 bg-white shadow-[10px_4px_6px_10px] shadow-black/10 w-full -mt-2 py-3 px-5 grid place-items-center gap-3 rounded-lg'>
          <div className=' relative w-56 h-56 sm:w-64 sm:h-64 border-2 border-myblue shadow-xl rounded-full overflow-hidden grid place-items-center transition-all duration-500'>
            <img
              src={logoRadio}
              className='absolute w-full h-full aspect-video object-fill'
              alt='radio bendicion samugari logo'
            />
            <span className='bg-white border-2 border-myblue p-4 rounded-full z-10' />
          </div>
          <div className='w-full -mt-16 z-20 backdrop-blur-sm bg-myblue/50 shadow-sm px-4 py-1 rounded-md flex items-center justify-center gap-5'>
            <Button
              aria-label='Reproducir o pausar radio'
              size='lg'
              variant='light'
              className='w-16 h-w-16 data-[hover]:bg-foreground/10 text-white'
              radius='full'
              isIconOnly
              onPress={togglePlay}
              disableAnimation
            >
              <FontAwesomeIcon size='2x' icon={isPlay ? faPause : faPlay} />
            </Button>
            <Slider
              aria-label='volumen'
              size='md'
              color='foreground'
              step={0.01}
              maxValue={1}
              minValue={0}
              defaultValue={volume}
              hideThumb
              classNames={{
                filler: 'bg-white'
              }}
              startContent={
                <button aria-label='mutear' className='text-white' onClick={toggleMuted}><FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeHigh} /></button>
              }
              onChange={handleChangeVolume}
            />
          </div>
        </div>
        <audio
          aria-hidden
          ref={audio}
          src={urlStreamRadio}
          hidden
          controls
        />
      </motion.div>
    </>
  )
}
export default Player
