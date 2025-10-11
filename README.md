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

citapp/

--- app.js              
--- package.json    
+-- public/
----- index.html     
----- citas.html 
----- pacientes.html   
---- css/
------- styles.css   
------- citas.css  
------- pacientes.css  
---- js/
------- main.js   
------- citas.js 
------- pacientes.js 
---- img/
----+-- CitApp.jpg


---

⚙️ Instalación y ejecución

1. Clonar el repositorio:

git clone https://github.com/FURPS/citapp_frontend.git
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
