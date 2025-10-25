# 📝 Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/lang/es/).

## [1.0.0] - 2025-10-25

### ✨ Agregado
- Aplicación web progresiva (PWA) completa para evaluación de EIP
- Sistema de puntuación basado en 9 factores de riesgo validados
- Estratificación en 3 categorías de riesgo (Bajo, Moderado, Alto)
- Recomendaciones clínicas específicas por categoría
- Iconos redondos personalizados (192x192 y 512x512)
- Funcionalidad offline mediante Service Worker
- Diseño responsive mobile-first
- Información de validación científica (AUC-ROC: 0.93)
- Gradiente morado/rosa en el tema visual
- Representación anatómica estilizada en el header

### 🔬 Validación
- Sensibilidad: 91%
- Especificidad: 89%
- AUC-ROC: 0.93 [IC95%: 0.89-0.96]
- Riesgo Relativo (≥13 pts): RR=14.2 [IC95%: 7.8-25.9]

### 📚 Documentación
- README.md completo con instrucciones de uso
- DEPLOY.md con guía paso a paso para GitHub Pages
- CONTRIBUTING.md con lineamientos para colaboradores
- LICENSE con MIT y disclaimer médico
- Templates de issues para GitHub

### 🎨 Diseño
- Interfaz moderna y profesional
- Animaciones suaves en interacciones
- Sistema de checkboxes personalizados
- Tarjetas de factores interactivas
- Resultados con código de colores por riesgo
- Vista previa de iconos

### 🔐 Seguridad
- Sin recolección de datos personales
- Sin conexión a servidores externos
- Funciona completamente en el navegador
- Sin cookies ni tracking

---

## Formato del Changelog

### Tipos de cambios
- **✨ Agregado** para nuevas funcionalidades
- **🔄 Cambiado** para cambios en funcionalidades existentes
- **❌ Deprecado** para funcionalidades que se eliminarán pronto
- **🗑️ Eliminado** para funcionalidades eliminadas
- **🐛 Arreglado** para corrección de bugs
- **🔒 Seguridad** para vulnerabilidades corregidas

[1.0.0]: https://github.com/tu-usuario/evaluacion-eip/releases/tag/v1.0.0
