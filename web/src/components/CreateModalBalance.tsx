import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginContext } from '../Context/LoginContext';

export function CreateModalBalance () {
    const {register, handleSubmit} = useForm()
    const { addBalance } = useContext(LoginContext)

    const handleAddBalance = async (data:any) => {
        addBalance(data)
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30rem] shadow-lg shadow-black/25'>            
                <Dialog.Title className="text-white font-black text-4xl">Adicionar Saldo</Dialog.Title>
                <form onSubmit={handleSubmit(handleAddBalance)} className='mt-8 flex flex-col gap-4'>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor='balance' className="text-white text-base font-normal">
                            Informe qual será o novo saldo:
                            </label>
                            <input
                            {...register('balance')}
                            className="bg-zinc-900 h-12 rounded pl-4 text-white"
                            placeholder="0,00"
                            type="number"
                            name="balance"
                            id="balance"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end items-center gap-5">
                        <Dialog.Close type="button" className="bg-[#71717A] hover:bg-[#62626a] text-white text-base font-semibold h-12 w-28 rounded-md">
                            Cancelar
                        </Dialog.Close>
                        <button className="bg-[#22C55E] hover:bg-[#199a48] text-white text-base font-semibold h-12 w-[170px] rounded-md flex items-center justify-center gap-3">
                            Confirmar
                        </button>
                    </div>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    );
};

export default CreateModalBalance;
