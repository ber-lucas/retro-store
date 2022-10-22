import * as DialogPrimitive from '@radix-ui/react-dialog';
import { CreateModalGame } from './CreateModalGame';

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

interface GameBannerProps {
  title: string,
  about: string,
  bannerUrl: string,
  tag: string,
  trailer: string,
  userReviews: number,
  specifications: string,
  price: number
}

const GameBanner = (props: GameBannerProps) => {
  return (
    <Dialog>
      <DialogTrigger className='relative rounded-lg overflow-hidden'>
        <img src={props.bannerUrl} alt="" />

        <div className='pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
          <strong className='font-bold text-white block'>{props.title}</strong>
        </div>
      </DialogTrigger>
      <CreateModalGame 
      title={props.title}
      about={props.about}
      bannerUrl={props.bannerUrl} 
      tag={props.tag}
      trailer={props.trailer}
      userReviews={props.userReviews}
      specifications={props.specifications}
      price={props.price}
      />
    </Dialog>
  )
}

export default GameBanner;
