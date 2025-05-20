# 🧩 Panel de Seguimiento de Equipos | No Country - Prueba Técnica Frontend

Este proyecto fue desarrollado como parte del proceso de selección de No Country para el rol de **Front-end Developer**.  
Consiste en una pantalla funcional donde una empresa puede visualizar los equipos participantes de una simulación laboral, con una interfaz intuitiva y alineada al branding de la plataforma.

---

## 🚀 Tecnologías utilizadas

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS v4**
- **Shadcn/ui** (para modales y componentes base)
- Arquitectura **feature-first**
- Datos simulados en archivos `.ts`

---

## 📸 Funcionalidades principales

- **Tabs navegables** por cada equipo entregado.
- Visualización individual de cada miembro:  
  Foto, nombre, rol y ubicación geográfica.
- Métricas clave por equipo:  
  Participación, asistencia y cantidad de mensajes (texto + íconos).
- Botón **"Ver Insights"** que abre un modal con:
  - Preview card de cada miembro.
  - Selección dinámica de 1 a 5 equipos.
  - Cálculo de precio total según cantidad.
  - CTA destacado **"Comprar"** (no funcional).

---

## 📁 Estructura del proyecto

```bash
src/
│
├── app/                     # Rutas Next.js
│   └── page.tsx            # Entrada principal
│
├── features/               # Dominio por funcionalidad
│   └── teams/              # Lógica y componentes del panel
│       ├── components/     
│       ├── hooks/
│       ├── types.ts
│       └── data.ts         # Datos mock
│
├── shared/                 # Componentes y estilos reutilizables
│   ├── components/
│   └── utils/
│
└── styles/
    └── globals.css
```

---

## 🧠 Decisiones técnicas

- Se usó **arquitectura feature-first** para escalar fácilmente por dominio.
- **Tipado estricto** con TypeScript para evitar errores en tiempo de compilación.
- **Shadcn/ui** fue elegido para componer la interfaz con modales accesibles y personalizables.
- Los **datos mock** están tipados y desacoplados del UI, permitiendo simular escenarios sin necesidad de backend.
- El precio total se calcula usando lógica funcional pura, siguiendo principios de **Clean Code**.
- La aplicación es totalmente **responsive**, pensada para usabilidad en desktop y mobile.

---

## 🧪 Instalación local

```bash
pnpm install
pnpm dev
```

Abrí `http://localhost:3000` para ver el proyecto en ejecución.

---

## 📱 Responsividad

La interfaz se adapta correctamente a pantallas móviles, tablet y desktop. Se priorizó una experiencia de usuario fluida y legible en todos los tamaños.

---

## 📦 Estado del proyecto

✔️ Funcional  
✔️ Documentado  
✔️ Responsive  
✔️ Código modular y mantenible  
✔️ Listo para evaluación 🚀

---

## 📧 Contacto

Alejandro Luna – [alejandrodevfullstack@gmail.com](mailto:alejandrodevfullstack@gmail.com)