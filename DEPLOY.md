# 🚀 Guía Rápida - Deploy en GitHub Pages

## Pasos para subir a GitHub:

### 1️⃣ Crear repositorio en GitHub
- Ve a https://github.com/new
- Nombre sugerido: `evaluacion-eip`
- Marca como **público** (Pages no funciona en repos privados gratuitos)
- **NO** inicialices con README (ya tienes uno)

### 2️⃣ Subir archivos

**Opción A - Desde la web:**
1. En tu nuevo repo, click en "uploading an existing file"
2. Arrastra todos estos archivos:
   - index.html
   - manifest.json
   - service-worker.js
   - icon-192.png
   - icon-512.png
   - README.md
   - .gitignore
3. Commit changes

**Opción B - Desde Git:**
```bash
# En la carpeta con los archivos
git init
git add .
git commit -m "Initial commit: EIP evaluation PWA"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/evaluacion-eip.git
git push -u origin main
```

### 3️⃣ Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Click en **Settings** (⚙️)
3. En el menú izquierdo, click **Pages**
4. En "Source" selecciona:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**
6. Espera 1-2 minutos

### 4️⃣ ¡Listo!
Tu app estará en:
```
https://TU-USUARIO.github.io/evaluacion-eip/
```

## 📱 Probando la PWA

1. Abre la URL en tu móvil
2. En Android/Chrome: Menú → "Instalar app"
3. En iOS/Safari: Compartir → "Agregar a pantalla de inicio"

## 🔄 Para actualizar

Simplemente sube los archivos nuevamente o:
```bash
git add .
git commit -m "Update: descripción del cambio"
git push
```

GitHub Pages se actualizará automáticamente en 1-2 minutos.

## ⚠️ Problemas comunes

**La app no carga:**
- Verifica que todos los archivos estén en la raíz
- Espera 2-3 minutos después de activar Pages
- Prueba en modo incógnito

**Los iconos no aparecen:**
- Verifica que icon-192.png y icon-512.png estén subidos
- Limpia la caché del navegador

**El service worker no funciona:**
- GitHub Pages usa HTTPS automáticamente ✅
- Verifica la consola del navegador (F12) para errores

## 📊 Ver estadísticas

En Settings → Pages verás:
- URL de tu sitio
- Estado del deployment
- Última actualización

---

**¿Necesitas ayuda?**
Revisa el [README.md](README.md) principal para más información.
