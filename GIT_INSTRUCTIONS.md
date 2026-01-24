# Guía de Publicación (Git Push)

Actualmente tu repositorio local `byhijar-web` está conectado a:
👉 `https://github.com/byhijar/byhijar-web.git`

## Paso 1: Confirmar Repositorio
Si ese URL es correcto, salta al **Paso 2**.

Si necesitas cambiarlo (por ejemplo, si creaste un repo nuevo o es otro link), ejecuta:
```bash
git remote set-url origin https://github.com/TU_USUARIO/TU_NUEVO_REPO.git
```

## Paso 2: Guardar cambios y subir (Push)
Ejecuta estos comandos en tu terminal dentro de la carpeta `byhijar-web`:

1.  **Verificar estado** (deberías ver los cambios de eliminación de Firebase y el link actualizado):
    ```bash
    git status
    ```

2.  **Preparar archivos**:
    ```bash
    git add .
    ```

3.  **Guardar commit** (Mensaje descriptivo):
    ```bash
    git commit -m "chore: remove firebase, align with netlify, fix dulzuras link"
    ```

4.  **Subir a GitHub**:
    ```bash
    git push origin main
    ```
    *(Nota: Si tu rama se llama `master`, usa `git push origin master`)*.

---

## Verificación Final
Una vez hecho el push:
1.  Netlify debería detectar el cambio automáticamente.
2.  Espera 1-2 minutos.
3.  Revisa `byhijar.cl` en modo incógnito.
4.  Ve a la sección "Proyectos" y prueba el link de "Dulzuras Nicky Nicole". Debería ir a `dulzurasnicky.cl`.
