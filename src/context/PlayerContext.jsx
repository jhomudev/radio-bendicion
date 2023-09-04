import { createContext, useRef, useState } from 'react'

export const PlayerContext = createContext()

export default function PlayerProvider ({ children }) {
  const [isPlay, setIsPlay] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [isMuted, setIsMuted] = useState(false)

  const isFirstPlay = useRef(true)
  const audio = useRef()

  function toggleMuted () {
    setIsMuted(!isMuted)
  }

  function changeVolume (e) {
    const newVolume = e.target.value
    setVolume(newVolume)
    if (isPlay) {
      audio.current.muted = false
      audio.current.volume = newVolume
      setIsMuted(audio.current.volume === 0)
    }
  }

  function togglePlay () {
    if (isFirstPlay.current) {
      isFirstPlay.current = false
      audio.current.play()
    }
    setIsPlay(!isPlay)
  }

  return (
    <PlayerContext.Provider value={{
      isPlay,
      volume,
      isMuted,
      audio,
      toggleMuted,
      changeVolume,
      togglePlay
    }}
    >
      {children}
    </PlayerContext.Provider>
  )
}
