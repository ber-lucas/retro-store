import { Minus, Plus } from "phosphor-react";

import * as Dialog from '@radix-ui/react-dialog';
import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import axios from "axios";

interface GameBannerProps {
  id: string,
  title: string,
  about: string,
  bannerUrl: string,
  tag: string,
  trailer: string,
  userReviews: number,
  specifications: string,
  price: number,
}

export function CreateModalGameProfile(props:GameBannerProps) {
  const { auth } = useContext(LoginContext)

  const deleteGame = async () => {
    await axios.post(`http://localhost:3333/user/${auth}/game/${props.id}/delete`)
      .then(response => response.data)
      .then(response => {
        localStorage.setItem('user', JSON.stringify(response))

        return location.reload()
      })
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-14 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] h-[620px] shadow-lg shadow-black/25 overflow-y-scroll">
        <Dialog.Title className="text-3xl font-black text-center">{props.title}</Dialog.Title>

          <div className="mt-8 flex flex-col justify-between items-center">
            <img className="h-33 w-32 md:object-center" src={props.bannerUrl}/>
             <ol className="list-decimal mt-4">
                <li>{props.about}</li>
                <li>{props.tag}</li>
                <li>{props.specifications}</li>
             </ol>
            <body className="mt-4">
              <iframe width="360" height="240" src={props.trailer} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </body>
          </div>
          <footer className="mt-4 flex justify-center gap-x-32">
              <Dialog.Close
                type="button"
                className="align-baseline bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
              >
                Cancelar
              </Dialog.Close>
              
              <button
                onClick={() => deleteGame()}
                className="justify-center gap-2 bg-red-500 rounded-md font-semibold flex items-center w-52 h-12 hover:bg-red-600"
              >
                <Minus size={24}/>
                Deletar
              </button>
          </footer>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
