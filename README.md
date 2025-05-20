# NoCountry - Panel de Seguimiento de Equipos

## Descripción
Panel de visualización para empresas que permite monitorear equipos de desarrollo en simulaciones laborales de NoCountry. Ofrece visualizaciones interactivas en 3D, métricas de rendimiento y opciones de contratación.

## Características
- Visualización 3D interactiva de equipos
- Múltiples vistas: 3D, Grid, Lista
- Métricas de rendimiento por equipo y miembro
- Selección de equipos para contratación
- Análisis de soft skills

## Tecnologías
- Next.js
- TypeScript
- Tailwind CSS
- Three.js / React Three Fiber
- Framer Motion

## Estructura del Proyecto
- `/app`: Páginas principales de la aplicación
- `/features`: Funcionalidades organizadas por dominio
  - `/3d-view`: Componentes para la visualización 3D
  - `/dashboard`: Componentes del dashboard principal
  - `/grid-view`: Vista en cuadrícula de equipos
  - `/list-view`: Vista en lista de equipos
  - `/teams`: Gestión de equipos y miembros
- `/shared`: Componentes, utilidades y tipos compartidos

## Instalación
```bash
npm install
npm run dev