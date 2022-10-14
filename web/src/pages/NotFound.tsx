import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="h-[100vh] flex justify-center text-white bg-main">
            <main className="flex gap-28 items-center box-border ">
                <div className="flex flex-col items-center">
                    <img src="black-hole.svg" alt="Buraco Negro"/>
                </div>

                <div className="flex flex-col my-auto max-w-[23rem]">
                    <img width={225} src="Logo.svg" alt="logo com degrade" />

                    <div className="flex flex-col gap-2 mt-6">
                        <h1 className="text-8xl font-bold text-[#e55757]">
                            404...
                        </h1>

                        <strong className="text-3xl text-white/90">
                            ERROR 404: Not Found
                        </strong>
                    </div>

                    <div className="mt-12 flex flex-col gap-2">
                        <strong className="text-[#04d361]">
                            SISTEMA RESPONDE:
                        </strong>

                        <p>
                            Acho que você chegou ao limite do site. A
                            página que você requisitou não foi encontrada.
                        </p>
                    </div>

                    <button onClick={() => navigate('/')} className="mt-10 max-w-[235px] h-16 bg-red-500 hover:bg-red-600 rounded font-bold text-sm">
                        RETORNAR A HOME
                    </button>
                </div>
            </main>
        </div>
    )
}

export default NotFound;