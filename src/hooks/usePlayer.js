import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

function usePlayer () {
  const {
    isPlay,
    volume,
    isMuted,
    audio,
    toggleMuted,
    changeVolume,
    togglePlay
  } = useContext(PlayerContext)

  return {
    isPlay,
    volume,
    isMuted,
    audio,
    toggleMuted,
    changeVolume,
    togglePlay
  }
}
export default usePlayer
