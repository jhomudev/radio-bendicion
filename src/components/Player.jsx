import { msm, urlStreamRadio } from '../data/media'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import usePlayer from '../hooks/usePlayer'
import { useEffect } from 'react'

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

  useEffect(() => {
    audio.current.volume = isPlay ? volume : 0
  }, [isPlay])

  useEffect(() => {
    audio.current.muted = isMuted
  }, [isMuted])

  return (
    <>
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        data-aos-easing='ease'
        className='relative flex flex-col items-center w-[min(100%,400px)] px-0 sm:px-7'
      >
        <div className='w-[85%] bg-myorange py-2 pb-3 rounded-lg grid place-items-center text-mygray'>
          <strong className='font-dosis uppercase text-xl'> Radio bendición</strong>
          <span className='text-sm  leading-tight'>Palmapampa - Samugari</span>
        </div>
        <div className='relative z-10 bg-white border-2 border-myorange w-full -mt-2 py-3 px-5 grid place-items-center gap-3 rounded-lg'>
          <div className={`${isPlay && 'animate-spin-slow'} relative w-56 h-56 sm:w-64 sm:h-64 border-2 border-myorange shadow-xl rounded-full overflow-hidden grid place-items-center transition-all duration-500`}>
            <img
              src={msm}
              className='absolute w-full h-full aspect-video object-fill'
              alt='gospel'
            />
            <span className='bg-white border-2 border-myorange p-4 rounded-full z-10' />
          </div>
          <div className='mediaplayer -mt-16 z-20 backdrop-blur-sm bg-myorange/50 shadow-sm px-4 py-3 rounded-md flex items-center justify-center gap-2'>
            <button onClick={togglePlay} className='grid place-items-center text-white hover:text-myorange text-3xl'>
              <FontAwesomeIcon icon={isPlay ? faPause : faPlay} />
            </button>
            <div className='volume w-20 flex items-center gap-1'>
              <button onClick={toggleMuted} className='grid place-items-center text-white hover:text-myorange text-sm'>
                <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeHigh} />
              </button>
              <input
                type='range'
                className='w-full h-1 rounded-full bg-blue-100 appearance-none '
                max='1'
                min='0'
                value={volume}
                step={0.1}
                onChange={changeVolume}
              />
            </div>
          </div>
        </div>
        <audio
          ref={audio}
          src={urlStreamRadio}
          className='hidden'
          controls
        />
      </div>
    </>
  )
}
export default Player
