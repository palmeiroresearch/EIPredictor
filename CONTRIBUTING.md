# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a este proyecto! Esta herramienta está diseñada para mejorar la práctica clínica en el diagnóstico de EIP.

## 🎯 Cómo contribuir

### Reportar bugs 🐛
Si encuentras un error:
1. Ve a la pestaña **Issues**
2. Crea un nuevo issue con:
   - Descripción clara del problema
   - Pasos para reproducirlo
   - Navegador y dispositivo usado
   - Capturas de pantalla si es posible

### Sugerir mejoras 💡
Para proponer nuevas características:
1. Abre un issue con la etiqueta "enhancement"
2. Describe la funcionalidad que propones
3. Explica por qué sería útil clínicamente

### Contribuir código 👨‍💻

#### Setup del proyecto
```bash
# Clona el repositorio
git clone https://github.com/TU-USUARIO/evaluacion-eip.git
cd evaluacion-eip

# Abre index.html en tu navegador
# (No requiere build ni dependencias)
```

#### Proceso de contribución
1. **Fork** el repositorio
2. Crea una **rama** para tu feature: `git checkout -b feature/nueva-funcionalidad`
3. Haz tus cambios
4. **Prueba** en diferentes navegadores (Chrome, Safari, Firefox)
5. **Commit** con mensajes descriptivos: `git commit -m "Add: nueva funcionalidad X"`
6. **Push** a tu fork: `git push origin feature/nueva-funcionalidad`
7. Abre un **Pull Request** describiendo los cambios

#### Estándares de código
- ✅ JavaScript vanilla (sin frameworks)
- ✅ Comentarios en español para lógica médica
- ✅ Código limpio y legible
- ✅ Responsive design (mobile-first)
- ✅ Accesibilidad web (WCAG 2.1)

## 📚 Validación clínica

### ⚠️ Importante
Cualquier cambio en los criterios diagnósticos, puntajes o algoritmos debe:
1. **Estar respaldado por evidencia científica**
2. **Incluir referencias bibliográficas**
3. **Ser revisado por profesionales de la salud**

### Proponer cambios clínicos
Si quieres modificar aspectos médicos:
1. Abre un issue explicando el cambio
2. Adjunta referencias de estudios peer-reviewed
3. Espera la revisión de colaboradores médicos

## 🧪 Testing

Antes de hacer un PR, verifica:
- ✅ La app funciona en modo offline (después de primera carga)
- ✅ Los cálculos son correctos con casos de prueba
- ✅ Los iconos se muestran correctamente
- ✅ Es responsive en móviles (< 480px)
- ✅ No hay errores en la consola del navegador

### Casos de prueba mínimos:
```
Caso 1 (Riesgo Bajo):
- Dolor pélvico intenso: 2 pts
- ITS previas: 1 pt
- Total: 3 pts → Riesgo Bajo

Caso 2 (Riesgo Moderado):
- Leucocitos >15,000: 3 pts
- Fiebre ≥38.5°C: 3 pts
- Edad ≤19 años: 2 pts
- Total: 8 pts → Riesgo Moderado

Caso 3 (Riesgo Alto):
- Imagen compleja US: 5 pts
- Leucocitos >15,000: 3 pts
- Fiebre ≥38.5°C: 3 pts
- VSG >60: 3 pts
- Total: 14 pts → Riesgo Alto
```

## 📝 Documentación

Al agregar features, actualiza:
- README.md si cambia funcionalidad principal
- Comentarios en el código
- Este archivo si cambia el proceso de contribución

## 🏥 Colaboradores médicos

Este proyecto valora especialmente la participación de:
- Ginecólogos/as
- Médicos/as de urgencias
- Estudiantes de medicina en rotación
- Investigadores en enfermedades infecciosas

## 📜 Código de conducta

- 🤝 Respeto y profesionalismo en todas las interacciones
- 💬 Comunicación constructiva y amable
- 🎯 Enfoque en mejorar la atención clínica
- 🔬 Compromiso con la evidencia científica

## 📧 Contacto

Para discusiones más amplias o colaboraciones:
- Abre un issue de tipo "Discussion"
- O contacta al mantenedor del proyecto

## 🙏 Agradecimientos

Toda contribución será reconocida en el README del proyecto.

---

¿Tienes dudas? ¡Abre un issue y pregunta!
