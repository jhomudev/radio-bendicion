import { useEffect, useRef, useState } from 'react'
import { palma1, palma2, palma3 } from '../data/media'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const imagesSlider = [
  { id: 1, img: palma1 },
  { id: 2, img: palma2 },
  { id: 3, img: palma3 }
]

function Carousel () {
  const carousel = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const carouselNode = carousel.current
    const imgNode = carouselNode.querySelectorAll('.slider_item')[currentIndex]
    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  function scrollToImage (direction) {
    if (direction === 'prev') {
      const isFirstSlide = currentIndex === 0
      const newIndex = isFirstSlide ? imagesSlider.length - 1 : currentIndex - 1
      setCurrentIndex(newIndex)
    } else {
      const isLastSlide = currentIndex === imagesSlider.length - 1
      if (!isLastSlide) {
        setCurrentIndex(prevState => prevState + 1)
      } else {
        setCurrentIndex(0)
      }
    }
  }

  function goToSlide (index) {
    setCurrentIndex(index)
  }

  return (
    <>
      <div className='slider_container w-full h-full absolute left-0 top-0'>
        <button onClick={() => { scrollToImage('prev') }} className='absolute left-2 sm:left-5 top-[48%] z-30 text-gray-200 hover:text-myblue hover:bg-mygray rounded-full px-3 py-2 flex justify-center items-center'><FontAwesomeIcon icon={faChevronLeft} /></button>
        <button onClick={() => { scrollToImage('next') }} className='absolute right-2 sm:right-5 top-[48%] z-30 text-gray-200 hover:text-myblue hover:bg-mygray rounded-full px-3 py-2 flex justify-center items-center'><FontAwesomeIcon icon={faChevronRight} /></button>
        <div className='slider w-full h-full overflow-hidden'>
          <ul ref={carousel} className='flex w-[300%] h-full'>
            {
            imagesSlider.map(item => (
              <li key={item.id} className='slider_item w-full'>
                <img className='w-full h-full object-cover sm:object-fill object-center brightness-[40%]' src={item.img} alt='palmapampa samugari' />
              </li>
            ))
          }
          </ul>
        </div>
        <div className='flex gap-3 text-white absolute z-30 bottom-4 left-[50%] translate-x-[-50%]'>
          {
            imagesSlider.map((item, id) => {
              const isThisSlide = currentIndex === id
              return (
                <button
                  key={item.id}
                  onClick={() => { goToSlide(id) }}
                  className={`p-1 rounded-full ${isThisSlide ? 'bg-mygreen' : 'bg-white'} hover:bg-mygreen`}
                />
              )
            })
          }
        </div>
      </div>
    </>
  )
}
export default Carousel
