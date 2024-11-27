

function HomePage(){
    return (
        <div className="flex flex-col justify-center items-center h-screen overflow-hidden ">
          <div className="bg-zinc-800 p-6 rounded-lg shadow-lg w-96 text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Gestión de Citas</h1>
            <p className="text-zinc-300 mb-6">
              Bienvenido a nuestra aplicación para la gestión de citas. Aquí podrás registrarte, iniciar sesión y llevar un control eficiente de tus citas con clientes. Diseñada específicamente para optimizar el trabajo en talleres mecánicos.
            </p>
            <ul className="text-left text-zinc-300 mb-6">
              <li>✅ Registro de usuarios</li>
              <li>✅ Inicia sesión para acceder a tu cuenta</li>
              <li>✅ Administra tus citas con tus cliente</li>
            </ul>
          </div>
        </div>
    );
}

export default HomePage