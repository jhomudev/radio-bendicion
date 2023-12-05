import React from 'react'

export const PlayerContext = React.createContext()

export default function PlayerProvider ({ children }) {
  const [isPlay, setIsPlay] = React.useState(false)
  const [volume, setVolume] = React.useState(0.5)
  const [isMuted, setIsMuted] = React.useState(false)

  const isFirstPlay = React.useRef(true)
  const audio = React.useRef()

  function toggleMuted () {
    setIsMuted(!isMuted)
  }

  const changeVolume = (volume) => setVolume(volume)

  const togglePlay = () => {
    if (isFirstPlay.current) {
      isFirstPlay.current = false
      audio.current.play()
    }
    setIsPlay(!isPlay)
  }

  React.useEffect(() => {
    setIsMuted(volume === 0)
    audio.current.volume = !isPlay ? 0 : volume
  }, [volume])

  React.useEffect(() => {
    audio.current.muted = isMuted
  }, [])

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
