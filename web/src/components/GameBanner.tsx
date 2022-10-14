interface GameBannerProps {
  imagePath: string,
  name: string,
}

const GameBanner = (props: GameBannerProps) => {
  return (
    <a href="" className='relative rounded-lg overflow-hidden'>
      <img src={props.imagePath} alt="" />

      <div className='pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
        <strong className='font-bold text-white block'>{props.name}</strong>
      </div>
    </a>
  )
}

export default GameBanner;
