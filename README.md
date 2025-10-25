# 🏥 Evaluación de Estadios Avanzados en EIP

Aplicación web progresiva (PWA) para la evaluación predictiva de estadios avanzados en Enfermedad Inflamatoria Pélvica.

## 📊 Características

- **Validación científica**: Basada en estudio con AUC-ROC de 0.93
- **9 factores de riesgo** evaluables
- **3 categorías de riesgo** con recomendaciones específicas
- **Funciona offline** después de la primera carga
- **Instalable** como app nativa en móviles y escritorio
- **Diseño responsive** optimizado para uso clínico

## 📱 Instalación como PWA

### En Android (Chrome/Edge):

1. Abre la app en el navegador
2. Toca el menú (⋮) → "Agregar a pantalla de inicio" o "Instalar app"
3. Confirma la instalación
4. La app aparecerá con su icono redondo en tu pantalla

### En iOS (Safari):

1. Abre la app en Safari
2. Toca el botón de compartir (⬆️)
3. Selecciona "Agregar a pantalla de inicio"
4. Confirma y la app se instalará

### En Escritorio (Chrome/Edge):

1. Abre la app en el navegador
2. Busca el ícono de instalación (⊕) en la barra de direcciones
3. Haz clic en "Instalar"
4. La app se abrirá como ventana independiente

## 🎯 Uso

### Factores de Riesgo Evaluados:

| Factor | Puntos | Criterio |
|--------|--------|----------|
| Imagen compleja en US | 5 | Absceso/hidrosálpinx |
| Leucocitos >15.000/µL | 3 | Recuento en ingreso |
| Fiebre ≥38.5°C | 3 | Temperatura documentada |
| VSG >60 mm/h | 3 | Valor en primera hora |
| Edad ≤19 años | 2 | Edad al diagnóstico |
| Dolor pélvico intenso | 2 | Evaluación inicial |
| Manipulaciones uterinas | 2 | Últimos 3 meses |
| ITS previas | 1 | Clamidia/gonorrea |
| FC >100 lpm | 1 | Taquicardia en triaje |

### Interpretación de Resultados:

- **0-7 puntos (Riesgo Bajo)**: 8-12% probabilidad → Alta temprana
- **8-12 puntos (Riesgo Moderado)**: 35-60% probabilidad → Hospitalización + IV
- **≥13 puntos (Riesgo Alto)**: 82-95% probabilidad → Cirugía + UCI

## 📁 Archivos de la PWA

```
index.html             - Aplicación principal
manifest.json          - Configuración PWA
service-worker.js      - Service Worker (funcionalidad offline)
icon-192.png           - Icono redondo 192x192px
icon-512.png           - Icono redondo 512x512px
README.md              - Este archivo
```

## 🔬 Validación Científica

- **AUC-ROC**: 0.93 [IC95%: 0.89-0.96]
- **Sensibilidad**: 91%
- **Especificidad**: 89%
- **Riesgo Relativo** (≥13 puntos): RR=14.2 [IC95%: 7.8-25.9]

## ⚠️ Importante

Esta herramienta es de **apoyo diagnóstico**. El juicio clínico y la evaluación integral del paciente son indispensables para la toma de decisiones.

## 🚀 Despliegue en GitHub Pages

### Opción 1: Subir manualmente

1. Crea un nuevo repositorio en GitHub
2. Sube todos los archivos del proyecto
3. Ve a Settings → Pages
4. En "Source" selecciona la rama `main` y carpeta `/ (root)`
5. Guarda y espera unos minutos
6. Tu app estará en: `https://tu-usuario.github.io/nombre-repo/`

### Opción 2: Via Git

```bash
git init
git add .
git commit -m "Initial commit: EIP evaluation app"
git branch -M main
git remote add origin https://github.com/tu-usuario/nombre-repo.git
git push -u origin main
```

Luego activa GitHub Pages en la configuración del repositorio.

### Requisitos:
- ✅ HTTPS activado automáticamente por GitHub Pages
- ✅ Todos los archivos en la raíz del repositorio
- ✅ El archivo `index.html` será la página principal

## 📝 Desarrollo

Desarrollado para práctica clínica basado en investigación validada en población cubana.

### Tecnologías:
- HTML5 + CSS3 + JavaScript vanilla
- PWA (Progressive Web App)
- Service Worker para funcionalidad offline
- Diseño responsive mobile-first

## 📞 Soporte

Para uso académico y profesional en el ámbito de la ginecología y medicina de urgencias.

---

**Versión**: 1.0.0  
**Última actualización**: Octubre 2025
