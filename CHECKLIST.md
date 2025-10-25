# ✅ Checklist Pre-Deploy

Verifica estos puntos antes de subir a GitHub Pages:

## 📁 Archivos Esenciales
- [x] `index.html` - Archivo principal
- [x] `manifest.json` - Configuración PWA
- [x] `service-worker.js` - Funcionalidad offline
- [x] `icon-192.png` - Icono estándar
- [x] `icon-512.png` - Icono alta resolución
- [x] `README.md` - Documentación principal

## 📝 Documentación
- [x] `DEPLOY.md` - Guía de despliegue
- [x] `CONTRIBUTING.md` - Guía para contribuidores
- [x] `LICENSE` - Licencia MIT + disclaimer médico
- [x] `CHANGELOG.md` - Historial de versiones

## 🔧 Configuración GitHub
- [x] `.gitignore` - Archivos a ignorar
- [x] `.github/ISSUE_TEMPLATE/bug_report.md` - Template bugs
- [x] `.github/ISSUE_TEMPLATE/feature_request.md` - Template features

## 🧪 Testing Local

### Funcionalidad básica:
- [ ] Abrir `index.html` en el navegador
- [ ] Verificar que todos los factores aparecen (9 total)
- [ ] Probar cálculo con 0 factores → sin resultado
- [ ] Probar cálculo riesgo bajo (1-7 pts)
- [ ] Probar cálculo riesgo moderado (8-12 pts)  
- [ ] Probar cálculo riesgo alto (≥13 pts)

### Casos de prueba específicos:

**Caso 1 - Riesgo Bajo (3 puntos)**
- [ ] Seleccionar: Dolor pélvico intenso (2pts)
- [ ] Seleccionar: ITS previas (1pt)
- [ ] Verificar resultado: "Riesgo Bajo" en verde
- [ ] Verificar: "8-12% probabilidad"
- [ ] Verificar recomendación: "Alta temprana"

**Caso 2 - Riesgo Moderado (10 puntos)**
- [ ] Seleccionar: Leucocitos >15,000 (3pts)
- [ ] Seleccionar: Fiebre ≥38.5°C (3pts)
- [ ] Seleccionar: Dolor pélvico intenso (2pts)
- [ ] Seleccionar: Manipulaciones uterinas (2pts)
- [ ] Verificar resultado: "Riesgo Moderado" en amarillo
- [ ] Verificar: "35-60% probabilidad"
- [ ] Verificar recomendación: "Hospitalización + IV"

**Caso 3 - Riesgo Alto (14 puntos)**
- [ ] Seleccionar: Imagen compleja US (5pts)
- [ ] Seleccionar: Leucocitos >15,000 (3pts)
- [ ] Seleccionar: Fiebre ≥38.5°C (3pts)
- [ ] Seleccionar: VSG >60 mm/h (3pts)
- [ ] Verificar resultado: "Riesgo Alto" en rojo
- [ ] Verificar: "82-95% probabilidad"
- [ ] Verificar recomendación: "Cirugía + UCI"

### Responsive Design:
- [ ] Probar en móvil (< 480px)
- [ ] Probar en tablet (480-768px)
- [ ] Probar en desktop (> 768px)
- [ ] Verificar que los iconos se ven correctamente

### PWA:
- [ ] Abrir Chrome DevTools → Application → Manifest
- [ ] Verificar que el manifest carga correctamente
- [ ] Verificar iconos en el manifest
- [ ] Application → Service Workers → verificar registro
- [ ] Probar instalación (botón + en barra de direcciones)

### Navegadores:
- [ ] Chrome/Edge (Windows/Mac/Android)
- [ ] Firefox
- [ ] Safari (macOS/iOS)

## 🚀 GitHub Pages

### Antes de subir:
- [ ] Todos los archivos están en la raíz
- [ ] No hay archivos sensibles (.env, etc)
- [ ] Los nombres de archivos son correctos
- [ ] El .gitignore está configurado

### Después de subir:
- [ ] Repositorio es público
- [ ] GitHub Pages está activado (Settings → Pages)
- [ ] Branch: main, Folder: / (root)
- [ ] Esperar 2-3 minutos
- [ ] Visitar la URL: `https://usuario.github.io/repo/`

## 🔍 Verificación Post-Deploy

En la URL de GitHub Pages:
- [ ] La app carga correctamente
- [ ] Los iconos se muestran
- [ ] Los cálculos funcionan
- [ ] El service worker se registra (F12 → Console)
- [ ] Se puede instalar como PWA
- [ ] Funciona offline (después de primera carga)

## 📱 Testing en Dispositivos Reales

### Android:
- [ ] Abrir en Chrome
- [ ] Instalar como app
- [ ] Verificar icono redondo en launcher
- [ ] Abrir app instalada
- [ ] Probar funcionalidad

### iOS:
- [ ] Abrir en Safari
- [ ] Agregar a pantalla de inicio
- [ ] Verificar icono redondo
- [ ] Abrir app desde home
- [ ] Probar funcionalidad

## 🎉 ¡Listo para Deploy!

Si todos los checkboxes anteriores están marcados, ¡tu proyecto está listo para ser publicado!

## 🔄 Próximos Pasos

1. Crear repositorio en GitHub
2. Subir archivos (ver DEPLOY.md)
3. Activar GitHub Pages
4. Compartir URL con colegas
5. Recopilar feedback
6. Iterar y mejorar

---

**Fecha de verificación**: _________________

**Verificado por**: _________________
