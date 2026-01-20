# Netlify Go Live Checklist (byhijar.cl)

Este documento guía el paso a producción ("Go Live") real en Netlify para el dominio `byhijar.cl`.
Sigue estos pasos para solucionar cualquier ambigüedad de configuración.

## 1. Validación de Conexión (Repo & Branch)

1.  Log into **Netlify Dashboard**.
2.  Busca el sitio asociado a `byhijar.cl`.
3.  Ve a **Site configuration > Build & deploy > Continuous Deployment**.
4.  **Repository**: Asegúrate que apunte a este repo (`byhijar-web` o el nombre correcto).
5.  **Production branch**: Debe decir `main` (o `master` si es el caso).
6.  Si apunta a otro lado:
    *   Click "Edit settings" -> "Link to a different repository".

## 2. Configuración de Environment Variables (CRÍTICO)

El formulario de contacto ahora **requiere obligatoriamente** estas variables. Si faltan, el botón de enviar se deshabilita automáticamente.

Ve a **Site configuration > Environment variables** y agrega:

| Key | Value (Ejemplo / Notas) |
| :--- | :--- |
| `VITE_RECAPTCHA_SITE_KEY` | Tu llave real de Google reCAPTCHA v2 (No uses la de test `6LeIx...` en prod) |
| `VITE_EMAILJS_SERVICE_ID` | ID de tu servicio EmailJS (ej. `service_xxxx`) |
| `VITE_EMAILJS_TEMPLATE_ID` | ID de tu template EmailJS (ej. `template_xxxx`) |
| `VITE_EMAILJS_PUBLIC_KEY` | Tu Public Key de EmailJS (ej. `user_xxxx` o hash largo) |

> [!WARNING]
> Si alguna variable falta, el usuario verá un mensaje rojo "Error de Configuración" en la web.

## 3. Forzar Update & Deploy (Clean Cache)

Después de poner las variables, es **obligatorio** redeplegar para que Vite las "incruste" en el build.

1.  Ve a la pestaña **Deploys**.
2.  Click en **"Trigger deploy"** -> **"Clear cache and deploy site"**.
3.  Espera a que termine (aprox 1-2 mins).
4.  Si falla, mira el log. Debe decir `Success` al final.

## 4. Verificación en Producción

Una vez que termine el deploy, abre `https://www.byhijar.cl` (o la URL de Netlify) en una **pestaña Incógnito**.

### Checklist Visual
- [ ] **Formulario**: ¿Aparece el formulario sin alertas rojas?
- [ ] **Botón**: ¿El botón dice "Enviar mensaje ahora" (y NO "Falta configuración...")?
- [ ] **Captcha**: ¿Se ve el widget de "No soy un robot"?
    *   *Si sale un error gris en el captcha*: La `VITE_RECAPTCHA_SITE_KEY` no corresponde al dominio. Revisa la config de Google reCAPTCHA admin.

### Checklist Funcional
1.  Abre la consola del navegador (`F12` -> Console).
2.  Llena el form con datos de prueba.
3.  Dale click al Captcha.
4.  Dale "Enviar".
5.  **Resultado Esperado**:
    *   Mensaje verde: "¡Gracias por tu mensaje!..."
    *   Verificar tu correo: Deberías recibir el lead.

### Debugging (Si algo falla)
Si el botón está bloqueado o sale error:
1.  Mira la consola (`F12`).
2.  Busca advertencias que digan `⚠️ [Config Check] Missing environment variables: [...]`.
    *   Ahí te dirá exactamente cuál falta.
3.  Si dice que usas "Test Key", cambia la variable en Netlify.

## 5. Arquitectura (Referencia)

- **Build Command**: `npm run build`
- **Publish Dir**: `dist`
- **Routing**: `netlify.toml` maneja los redirects SPA (`/*` -> `/index.html`).
- **Validación Hardcoded**: `Contacto.jsx` hace chequeo estricto de variables al cargar.
