# Trabajo Practico 2 - Desarrollo de Software 2026. [![Netlify Status](https://api.netlify.com/api/v1/badges/3d933b1a-d483-4a4f-b01d-93234e7900bb/deploy-status)](https://app.netlify.com/projects/e0ezte9a/deploys)

## Contexto

El presente trabajo es producto de las actividades desarrolladas en el contexto de la cátedra Desarrollo de Software de la Universidad Tecnológica Nacional Facultad Regional San Francisco (UTN FRSFCO) en el marco del Plan de Estudios para la carrera Ingenieria en Sistemas de Información establecido por la Ordenanza Nº 1877 del Consejo Superior de la UTN.

## Resumen

El trabajo consistió en desarrollar una solución web utilizando React, aplicando conceptos fundamentales como la arquitectura basada en componentes, el manejo de estado mediante hooks y el flujo de datos a través de props.

En particular, se implementó la opción de "Fortaleza de Contraseña", la cual permite al usuario evaluar la seguridad de una clave ingresada y generar nuevas contraseñas seguras. La aplicación incluye validaciones en tiempo real, clasificación visual del nivel de seguridad y herramientas de generación configurables.

Durante el desarrollo se utilizaron componentes funcionales, inputs controlados y manejo de estado local con `useState`, garantizando una interfaz interactiva y dinámica. Además, se incorporaron buenas prácticas de diseño y estilos para lograr una experiencia de usuario clara y organizada.

## Clasificación de Contraseña

Se implementó un algoritmo para calcular el nivel de seguridad de una contraseña a partir de un sistema de políticas configurables. Cada política representa una regla de validación (por ejemplo: longitud mínima, uso de números o caracteres especiales) y aporta un puntaje ponderado al resultado final.

El proceso comienza aplicando cada política sobre la contraseña ingresada, generando un conjunto de resultados. A partir de estos resultados, se calcula un puntaje total (`score`) teniendo en cuenta la contribución de cada política según su peso, así como también un puntaje máximo posible (`maxScore`). Finalmente, se obtiene un valor normalizado (`normalizedScore`), que permite expresar la fortaleza de la contraseña de forma proporcional e independiente de la cantidad de políticas definidas.

Este enfoque modular permite extender fácilmente el sistema, agregando nuevas reglas de validación sin modificar la lógica principal del algoritmo, favoreciendo la escalabilidad y el mantenimiento del código.

## Políticas de Fortaleza

La evaluación de la contraseña se basa en un conjunto de políticas independientes, cada una encargada de validar un aspecto específico de la fortaleza. Estas políticas contribuyen al puntaje total mediante un sistema de pesos, priorizando aquellas características consideradas más relevantes.

Las políticas implementadas son:

- **Longitud de la contraseña (peso 4)**: Evalúa que la contraseña cumpla con una cantidad mínima de caracteres. Es uno de los factores más importantes, ya que una mayor longitud incrementa significativamente la resistencia ante ataques de fuerza bruta.

- **Uso de frases (peso 5)**: Detecta si la contraseña se construye como una passphrase (combinación de palabras). Este enfoque mejora tanto la seguridad como la memorabilidad, siendo la política con mayor peso dentro del sistema.

- **Uso de mayúsculas (peso 2)**: Verifica la inclusión de letras en mayúscula, aumentando la complejidad del conjunto de caracteres utilizados.

- **Uso de minúsculas (peso 2)**: Asegura la presencia de letras en minúscula, contribuyendo a la diversidad de la contraseña.

- **Uso de números (peso 2)**: Comprueba la inclusión de dígitos, lo cual incrementa el espacio de búsqueda en posibles ataques.

- **Uso de símbolos (peso 2)**: Evalúa la presencia de caracteres especiales, agregando un nivel adicional de complejidad.

- **Secuencias y repeticiones (peso 2)**: Penaliza patrones predecibles como secuencias (por ejemplo, "1234" o "abcd") o repeticiones de caracteres, que reducen significativamente la seguridad.

Este enfoque permite una evaluación equilibrada, donde no solo se considera la variedad de caracteres, sino también la estructura y calidad general de la contraseña. Además, la utilización de políticas desacopladas facilita la incorporación de nuevas reglas sin impactar en el resto del sistema.

## Stack Tecnológico

- React
- Vite
- Tailwindcss
- JavaScript

## Deploy

La aplicación se encuentra desplegada utilizando **Netlify**, lo que permite contar con una publicación continua y accesible desde la web.

El proceso de deploy se realizó a partir del repositorio, aprovechando la integración con Vite para generar una versión optimizada de producción.

Podés acceder a la aplicación desde el siguiente enlace:

👉 https://e0ezte9a.netlify.app/

Además, se configuró un flujo de despliegue automático, de modo que cada actualización en el repositorio se refleja en la versión publicada.
