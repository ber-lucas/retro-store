const CreateModalLogin = () => {
  return (
    <div>
      <div className="h-[40vh] flex flex-col justify-center items-center gap-1">
        <h1 className="text-white text-5xl">Login</h1>
      </div>
      <div className="h-[20vh] flex flex-col items-center gap-1">
        <h1 className="text-white text-5xl">Email</h1>
        <h2 className="shadow-lg m-10 text-black text-3xl">fulano@email.com</h2>
      </div>
      <div className="h-[20vh] flex flex-col items-center gap-1">
        <h1 className="text-white text-5xl">Senha</h1>
        <h2 className="box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), text-black m-10 text-3xl">
          *******
        </h2>
      </div>
      <div className="flex justify-end items-center gap-10">
        <button className="bg-zinc-500 text-white text-5xl rounded">
          Cancelar
        </button>
        <button className="bg-red-500 text-white text-5xl rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default CreateModalLogin;
