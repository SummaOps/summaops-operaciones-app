# Paso a paso para publicar en GitHub Pages

## 1. Crear repositorio

1. Entrar a GitHub.
2. Crear un repositorio nuevo.
3. Nombre recomendado: `summaops-operaciones-app`.
4. Marcarlo como Public por ahora, salvo que tengas GitHub Pro/Team y quieras Pages privado.
5. Crear el repositorio.

## 2. Subir archivos

1. Entrar al repositorio.
2. Hacer clic en `Add file`.
3. Elegir `Upload files`.
4. Subir todo el contenido de esta carpeta, no el ZIP cerrado.
5. Confirmar con `Commit changes`.

La raíz del repositorio debe mostrar directamente:

- `index.html`
- `manifest.json`
- `sw.js`
- `assets/`
- `.nojekyll`

## 3. Activar GitHub Pages

1. Ir a `Settings`.
2. Entrar a `Pages`.
3. En `Build and deployment`, elegir:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
4. Guardar.

## 4. Esperar publicación

GitHub va a mostrar una URL parecida a:

`https://TU-USUARIO.github.io/summaops-operaciones-app/`

Puede demorar 1 a 3 minutos.

## 5. Probar en laptop

1. Abrir la URL.
2. Crear un cliente.
3. Crear un caso.
4. Cambiar idioma.
5. Exportar backup JSON.

## 6. Probar en celular

1. Abrir la misma URL desde el celular.
2. En Chrome Android: menú de tres puntos > `Agregar a pantalla principal` o `Instalar app`.
3. En iPhone Safari: compartir > `Agregar a inicio`.

## 7. Importante

Los datos siguen siendo locales por dispositivo hasta conectar Firebase.

Eso significa:

- lo que cargues en la laptop no aparece automáticamente en el celular;
- para pasar datos manualmente, usar backup JSON;
- para datos compartidos, hay que avanzar a Firebase.
