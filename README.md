# 🏥 Evaluación de Estadios Avanzados en EIP

Aplicación web progresiva (PWA) moderna y profesional para la evaluación predictiva de estadios avanzados en Enfermedad Inflamatoria Pélvica.

## ✨ Novedades v2.0

### 🆕 Características Nuevas
- **✅ Criterios de Exclusión Integrados**: Sistema de verificación previo con 8 criterios clínicos validados
- **🎨 Interfaz Completamente Rediseñada**: Diseño moderno, profesional e intuitivo
- **📱 Navegación por Tabs**: Flujo de trabajo mejorado (Exclusión → Evaluación)
- **🎯 Feedback Visual Mejorado**: Animaciones suaves y transiciones profesionales
- **📊 Cards Interactivas**: Diseño tipo tarjeta para mejor legibilidad
- **🌈 Sistema de Colores Actualizado**: Gradientes modernos y paleta profesional

## 📊 Características

- **Validación científica**: Basada en estudio con AUC-ROC de 0.93
- **8 criterios de exclusión** para identificar pacientes no elegibles
- **9 factores de riesgo** evaluables con sistema de puntuación validado
- **3 categorías de riesgo** con recomendaciones clínicas específicas
- **Funciona offline** después de la primera carga
- **Instalable** como app nativa en móviles y escritorio
- **Diseño responsive** optimizado para uso clínico en cualquier dispositivo

## 🚫 Criterios de Exclusión

La escala NO debe aplicarse si la paciente presenta:

1. **Embarazo confirmado o sospecha de embarazo ectópico**
   - La EIP durante el embarazo requiere manejo especializado

2. **Periodo postparto o postaborto reciente (< 6 semanas)**
   - Endometritis puerperal tiene protocolos específicos

3. **Sepsis severa o shock séptico**
   - Requiere manejo urgente en UCI

4. **Signos de peritonitis generalizada o abdomen agudo quirúrgico**
   - Indicación quirúrgica de emergencia

5. **Inmunosupresión severa**
   - VIH con CD4<200, quimioterapia activa

6. **Otra infección intraabdominal concomitante**
   - Apendicitis, diverticulitis, etc.

7. **Cirugía abdominal o pélvica en las últimas 4 semanas**
   - Complicaciones postquirúrgicas

8. **Neoplasia pélvica conocida**
   - Ovario, endometrio, cérvix

## 📱 Instalación como PWA

### En Android (Chrome/Edge):

1. Abre la app en el navegador
2. Toca el menú (⋮) → "Agregar a pantalla de inicio" o "Instalar app"
3. Confirma la instalación
4. La app aparecerá con su icono en tu pantalla

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

## 🎯 Uso del Sistema

### Paso 1: Verificación de Criterios de Exclusión

- Revise los 8 criterios de exclusión
- Marque cualquier criterio que esté presente
- Si hay criterios marcados, el sistema indicará que la paciente NO es elegible
- Si no hay criterios, podrá continuar a la evaluación

### Paso 2: Evaluación de Factores de Riesgo

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

#### 🟢 Riesgo Bajo (0-7 puntos)
- **Probabilidad**: 8-12% de Estadio III/IV
- **Acción**: Alta temprana con seguimiento ambulatorio
- **Tratamiento**: Antibioticoterapia oral
- **Seguimiento**: Control en 24-48 horas

#### 🟡 Riesgo Moderado (8-12 puntos)
- **Probabilidad**: 35-60% de Estadio III/IV
- **Acción**: Hospitalización inmediata
- **Tratamiento**: Antibióticos IV de amplio espectro
- **Monitoreo**: Evaluación cada 24 horas
- **Considerar**: Cirugía si no hay mejoría en 48-72h

#### 🔴 Riesgo Alto (≥13 puntos)
- **Probabilidad**: 82-95% de Estadio III/IV
- **Acción**: URGENTE - Evaluación quirúrgica inmediata
- **Tratamiento**: Antibióticos IV + Cirugía
- **Monitoreo**: UCI o cuidados intermedios
- **Procedimiento**: Laparoscopia/laparotomía

## 🔬 Validación Científica

### Métricas de Desempeño

- **AUC-ROC**: 0.93 [IC95%: 0.89-0.96] - Excelente discriminación
- **Sensibilidad**: 91% - Detecta 91% de casos reales
- **Especificidad**: 89% - Excluye 89% de no casos
- **VPP**: 78% - Cuando clasifica alto riesgo, 78% son realmente Estadio III/IV
- **VPN**: 95% - Cuando clasifica bajo riesgo, 95% son realmente Estadio I/II

### Calibración

- **Hosmer-Lemeshow**: χ² = 8.32; p = 0.402
- Buena calibración (p > 0.05)
- Las probabilidades predichas coinciden con las observadas

### Riesgo Relativo

- **≥13 puntos**: RR = 14.2 [IC95%: 7.8-25.9]
- Incremento dramático del riesgo en categoría alta

## 🎨 Características de Diseño

### Interfaz Moderna
- **Gradientes suaves**: Transiciones visuales profesionales
- **Cards interactivas**: Feedback visual al hover y selección
- **Animaciones fluidas**: Transiciones suaves entre estados
- **Iconografía clara**: Emojis y símbolos para mejor comprensión

### UX Optimizada
- **Flujo guiado**: Proceso paso a paso intuitivo
- **Validación en tiempo real**: Retroalimentación inmediata
- **Estados visuales claros**: Diferenciación por colores semánticos
- **Responsive design**: Adaptable a todos los dispositivos

### Accesibilidad
- **Alto contraste**: Legibilidad óptima
- **Tamaños adecuados**: Botones y áreas táctiles grandes
- **Feedback táctil**: Animaciones al interactuar
- **Mobile-first**: Optimizado para uso en dispositivos móviles

## 📁 Estructura del Proyecto

```
index.html             - Aplicación principal (v2.0)
manifest.json          - Configuración PWA
service-worker.js      - Service Worker (funcionalidad offline)
icon-192.png           - Icono 192x192px
icon-512.png           - Icono 512x512px
README.md              - Este archivo
```

## ⚠️ Importante

### Limitaciones
- Esta herramienta es de **apoyo diagnóstico**
- El **juicio clínico** es indispensable
- No reemplaza la evaluación médica completa
- Validada en población cubana

### Uso Apropiado
- ✅ Como guía para estratificación inicial
- ✅ Para documentación de criterios de riesgo
- ✅ Como apoyo en decisiones de hospitalización
- ❌ No para autoevaluación por pacientes
- ❌ No como único criterio de manejo

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
git commit -m "Deploy: EIP evaluation app v2.0"
git branch -M main
git remote add origin https://github.com/tu-usuario/nombre-repo.git
git push -u origin main
```

Luego activa GitHub Pages en la configuración del repositorio.

## 📝 Desarrollo

### Tecnologías
- HTML5 + CSS3 moderno (variables CSS, gradientes, animaciones)
- JavaScript vanilla (sin dependencias)
- PWA (Progressive Web App)
- Service Worker para funcionalidad offline
- Diseño responsive mobile-first

### Características Técnicas
- **CSS Variables**: Sistema de diseño consistente
- **Flexbox & Grid**: Layouts modernos y flexibles
- **Animaciones CSS**: Transiciones suaves
- **Media Queries**: Adaptabilidad responsive
- **localStorage**: Persistencia opcional (futuro)

## 📞 Uso Académico

Desarrollado para práctica clínica y educación médica en:
- Ginecología y obstetricia
- Medicina de urgencias
- Residencias médicas
- Pregrado de medicina

## 📚 Referencias

**Estudio Original:**
- Cohorte de desarrollo: N=403 pacientes
- Validación externa: AUC-ROC 0.92
- Población: Pacientes cubanas con EIP
- Periodo: 2020-2024

## 🔄 Changelog

### v2.0.0 (Actual)
- ✨ Agregados 8 criterios de exclusión clínicos
- 🎨 Rediseño completo de la interfaz
- 📱 Sistema de navegación por tabs
- 🎯 Mejoras en UX y accesibilidad
- 📊 Cards interactivas modernas
- 🌈 Nuevo sistema de colores y gradientes

### v1.0.0
- Versión inicial con 9 factores de riesgo
- Sistema básico de cálculo
- Diseño original

---

**Versión**: 2.0.0  
**Última actualización**: Noviembre 2025  
**Licencia**: MIT + Disclaimer Médico

---

**Desarrollado con 💜 para mejorar la atención de pacientes con EIP**
