import * as DialogPrimitive from '@radix-ui/react-dialog';
import { CreateModalGame } from './CreateModalGame';

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

interface GameBannerProps {
  imagePath: string,
  name: string,
}

const GameBanner = (props: GameBannerProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <button className='relative rounded-lg overflow-hidden'>
          <img src={props.imagePath} alt="" />

          <div className='pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>{props.name}</strong>
          </div>
        </button>
        <CreateModalGame imagePath="/game-1.png" name="League of Legends"/>
      </DialogTrigger>
    </Dialog>
  )
}

export default GameBanner;
