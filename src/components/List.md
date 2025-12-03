# 🎬 Componente `List` (Tarjeta de Intérprete)

El componente `List` es una **tarjeta de elemento de lista** diseñada para mostrar la información principal de un intérprete de cine o actor, incluyendo su foto, nombre y una breve biografía.

## Características Principales

* **Visualización de Datos:** Muestra la foto, el nombre y la biografía del intérprete.
* **Destacado:** Permite resaltar visualmente al intérprete si está asociado a una película destacada (`esNota10`).
* **Accesibilidad (A11y):** Implementa atributos como `tabIndex` y `aria-label`, y oculta la biografía en el `figcaption` para mejorar la experiencia con lectores de pantalla (utilizando la clase `sr-only`).
* **Estilo Moderno:** Utiliza clases de Tailwind CSS para un diseño *flex* apilado, esquinas redondeadas, sombra sutil y efecto *hover*.

## Props (Propiedades)

| Nombre | Tipo | Requerido | Descripción |
| :--- | :--- | :--- | :--- |
| `foto` | `string` | Sí | URL de la imagen del intérprete. |
| `nombre` | `string` | Sí | Nombre completo del intérprete. |
| `esNota10` | `boolean` | No | Indica si el intérprete debe ser visualmente **destacado**. Si es `true`, el nombre cambia de color. |
| `children` | `React.ReactNode` | No | Contenido de la biografía o descripción del intérprete (se renderiza dentro de un `<p>`). |

## Estructura del Componente

El componente renderiza un elemento HTML `<article>` que contiene:

1.  **`<figure>` (Imagen):** Contiene la foto del intérprete (`<img>`).
    * Usa `alt` para la accesibilidad (`alt="Foto de [nombre]"`).
    * Incluye un `<figcaption>` oculto (`sr-only`) con la biografía (`props.children`) para mejorar la lectura por parte de lectores de pantalla.
2.  **`<header>` (Nombre):** Contiene el nombre del intérprete en un `<h2>`.
    * Si `esNota10` es `true`, el texto del `<h2>` se renderiza en **rojo** y se añade un texto adicional (`– Intérprete en película destacada`).
3.  **`<p>` (Biografía):** Muestra el contenido de `props.children