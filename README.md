🦷 CitApp

CitApp es una aplicación web para la gestión de citas odontológicas y el registro de pacientes en una clínica dental.
Este proyecto forma parte del proceso de aprendizaje de Frontend y desarrollo web, combinando HTML, CSS, JavaScript y Node.js (Express) para crear una aplicación funcional y modular.


---

🚀 Estado del proyecto

🟢 Versión 1.0.0 – “Base Frontend”

Esta primera versión permite:

Registrar, listar y eliminar citas odontológicas.

Registrar, listar y eliminar pacientes.

Guardar la información localmente usando LocalStorage.

Servir la aplicación con un servidor Node (Express) local.

Navegación entre páginas básicas (Inicio, Citas, Pacientes).



---

🧱 Estructura del proyecto

citiapp/
│
├── app.js                 # Servidor Node con Express
├── package.json           # Configuración de dependencias y scripts
│
├── public/
│   ├── index.html         # Página de inicio
│   ├── citas.html         # Módulo de gestión de citas
│   ├── pacientes.html     # Módulo de gestión de pacientes
│   │
│   ├── css/
│   │   ├── styles.css     # Estilos generales
│   │   ├── citas.css      # Estilos específicos de citas
│   │   └── pacientes.css  # Estilos específicos de pacientes
│   │
│   ├── js/
│   │   ├── main.js        # Scripts generales
│   │   ├── citas.js       # Lógica de citas
│   │   └── pacientes.js   # Lógica de pacientes
│   │
│   └── img/
│       └── logo.png       # Logotipo o recursos gráficos
│
└── node_modules/          # Dependencias (generadas automáticamente)


---

⚙️ Instalación y ejecución

1. Clonar el repositorio:

git clone https://github.com/usuario/citiapp.git
cd citiapp


2. Instalar dependencias:

npm install


3. Ejecutar el servidor:

npm start


4. Abrir en el navegador:

http://localhost:3000




---

🧩 Tecnologías utilizadas

Tecnología	Uso principal

HTML5	Estructura de las páginas
CSS3	Estilos y diseño responsivo
JavaScript (Vanilla)	Lógica del lado del cliente
Node.js + Express	Servidor local y manejo de rutas
LocalStorage	Persistencia de datos en el navegador



---

📦 Funcionalidades actuales

📅 Módulo de Citas

Registro de citas (nombre, fecha, hora, motivo)

Listado dinámico de citas

Eliminación de registros

Persistencia con LocalStorage


👨‍⚕️ Módulo de Pacientes

Registro de pacientes (nombre, documento, teléfono, correo)

Validación de duplicados

Listado dinámico

Eliminación de registros

Persistencia con LocalStorage



---

🔮 Próxima versión (v2.0)

[ ] Conectar pacientes y citas (selección de paciente al agendar cita)

[ ] Añadir edición de registros

[ ] Implementar base de datos real (MongoDB o Firebase)

[ ] Mejorar la interfaz con alertas y modales

[ ] Migrar a un entorno moderno con Vite o React/Vue



---

👨‍💻 Autor

Hugo Martínez
Tecnólogo en Análisis y Desarrollo de Software
📍 Colombia
📧 [GMAIL: zteblladel9@gmail.com]


---

🪪 Licencia

Este proyecto se distribuye con fines educativos y de aprendizaje.
Puede ser utilizado, modificado y mejorado libremente con la debida atribución al autor original.


---
