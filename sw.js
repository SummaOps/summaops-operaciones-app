# SummaOps Operaciones — Producción v20

Esta carpeta contiene la versión PWA lista para publicar en GitHub Pages.

## Qué incluye

- `index.html`: aplicación principal.
- `manifest.json`: configuración PWA para instalación en desktop/mobile.
- `sw.js`: service worker para cache y carga rápida.
- `assets/`: íconos y marca SummaOps.
- `.nojekyll`: evita problemas de publicación en GitHub Pages.

## Estado actual

Esta versión funciona como app PWA con datos locales del navegador (`localStorage`).

Sirve para:

- probar en laptop;
- probar en celular;
- instalar desde Chrome/Edge/Safari cuando esté publicada con HTTPS;
- validar producto con clientes piloto.

Todavía no incluye:

- login real;
- usuarios reales;
- permisos reales;
- base de datos compartida en la nube.

Eso se agrega en la siguiente etapa con Firebase Free.


## v21
Corrección funcional: botones + Nuevo caso y + Cliente vuelven a abrir sus formularios modales.
