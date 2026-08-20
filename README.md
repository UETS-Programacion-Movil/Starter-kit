# 📱 Starter-Kit Oficial UETS (Expo SDK 54)

Bienvenido a la plantilla oficial y guía didáctica para **Programación Móvil — 3° Bachillerato Técnico Salesiano (UETS)**.

Este Starter-Kit no solo está preconfigurado con las herramientas más modernas para el desarrollo multiplataforma, sino que incluye una **aplicación interactiva de guía** que te enseñará las bases de cómo está configurado el proyecto.

## 🛠️ Tecnologías Incluidas
- **[Expo SDK 54](https://docs.expo.dev/)**: Framework principal para React Native.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipado estático y seguridad de código.
- **[NativeWind v4](https://www.nativewind.dev/)**: Maquetación usando clases de Tailwind CSS nativamente.
- **[Expo Router](https://docs.expo.dev/router/introduction/)**: Enrutamiento basado en archivos (File-based routing).

---

## 🚀 Inicio Rápido (Guía Interactiva)

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo (Modo Túnel):**
   ```bash
   npx expo start --tunnel -c
   ```
   > El uso de `--tunnel` es altamente recomendado en redes institucionales (como la UETS) para evitar bloqueos de puertos y asegurar la conexión con tu dispositivo.

3. **Escanear y Aprender:**
   - Descarga **Expo Go** en tu celular (iOS/Android).
   - Escanea el código QR generado en la terminal.
   - Sigue los 4 pasos interactivos dentro de la aplicación para aprender sobre NativeWind, clonado y configuración.

---

## 🧹 Reiniciar el Proyecto (Empezar a programar)

Una vez que hayas terminado de leer la guía didáctica interactiva en tu celular y entiendas cómo funciona, querrás **empezar tu propia aplicación desde cero**.

Para limpiar la guía educativa y obtener un proyecto en blanco (¡conservando la configuración de Tailwind CSS!), ejecuta:

```bash
npm run reset-project
```

Este comando moverá la carpeta `app/` actual a `app-example/` y te dejará un entorno completamente limpio y listo para que programes tu aplicación UETS.

---

## 📂 Estructura Principal

- `app/`: Contiene todas las pantallas y layouts de tu aplicación (Expo Router).
- `assets/`: Imágenes, iconos y fuentes.
- `components/ui/`: Componentes reutilizables de interfaz gráfica pre-estilizados.
- `global.css`: Configuración base de Tailwind CSS y NativeWind.

---

## 📖 Recursos Oficiales
- ⚡ **Expo**: [docs.expo.dev](https://docs.expo.dev)
- 🎨 **NativeWind**: [nativewind.dev](https://www.nativewind.dev)
- 🔀 **Expo Router**: [docs.expo.dev/router/introduction](https://docs.expo.dev/router/introduction/)
