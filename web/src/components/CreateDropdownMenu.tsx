import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { List, Storefront, UserCircle } from "phosphor-react";
import { useNavigate } from 'react-router-dom';

const CreateDropdownMenu = () => {
    const navigate = useNavigate();

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger title='Menu de Navegação' className="w-10 h-10 rounded-full bg-red-500 flex justify-center items-center                                                                                                                                                                                   ">
                <List size={24} weight={"bold"} color={'#fff'} />
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal >
                <DropdownMenu.Content 
                className='w-52 pb-4 pt-1 bg-[#2A2632] text-white rounded shadow-2xl flex flex-col'
                
                >
                    <DropdownMenu.Arrow />
                    
                    <DropdownMenu.Label className='mx-auto pb-1 font-black text-white/90'>
                        Navegação
                    </DropdownMenu.Label>

                    <DropdownMenu.Separator className='h-[1px] mb-1 bg-orange-400/50 mx-1'/>

                    <DropdownMenu.Group className='pl-6 pr-3 flex flex-col gap-1'>
                        <DropdownMenu.Item title='Profile' onClick={() => {navigate('/profile')}} className='flex justify-between items-center hover:cursor-pointer'>
                            Perfil
                            <UserCircle size={22} />
                        </DropdownMenu.Item>
                        
                        <DropdownMenu.Item title='Store' onClick={() => {navigate('/store')}} className='flex justify-between items-center hover:cursor-pointer'>
                            Loja
                            <Storefront size={22} />
                        </DropdownMenu.Item>
                    </DropdownMenu.Group>

                    <DropdownMenu.Separator className='h-[1px] mt-1 bg-orange-400/50 mx-1'/>

                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}

export default CreateDropdownMenu;