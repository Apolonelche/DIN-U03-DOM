// List.stories.js
import React from 'react';
import List from '../components/List'; // Asegúrate de que la ruta de importación sea correcta

// --- Configuración Principal (Metadata) ---

/**
 * Metadata para Storybook sobre el componente List.
 * Define el título en la barra lateral de Storybook y el componente a utilizar.
 */
export default {
  title: 'Componentes/List',
  component: List,
  //tags: ['autodocs'], // Habilita la generación automática de documentación
  // Define los controles de argumentos a nivel global para todas las historias
  argTypes: {
    foto: {
      control: 'text',
      description: 'URL de la foto del intérprete.',
    },
    nombre: {
      control: 'text',
      description: 'Nombre completo del intérprete.',
    },
    esNota10: {
      control: 'boolean',
      description: 'Define si el intérprete está destacado (cambia el color del nombre a rojo).',
    },
    children: {
      control: 'text',
      description: 'Biografía o descripción del intérprete (contenido hijo del componente).',
    },
  },
  // Añade un decorador para centrar el componente en el lienzo (opcional)
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '300px', margin: '2em' }}>
        <Story />
      </div>
    ),
  ],
};


// --- Historias Individuales ---

// 1. Historia Base
/**
 * Historia para el estado base del componente List (no destacado).
 */
export const Default = {
  args: {
    foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Uma_Thurman_Cannes_2017_%28cropped%29.jpg/330px-Uma_Thurman_Cannes_2017_%28cropped%29.jpg',
    nombre: 'Jane Doe',
    esNota10: false,
    children: 'Actriz versátil conocida por sus papeles en cine independiente y series de comedia. Ha ganado múltiples premios por su trabajo en la industria.',
  },
};

// 2. Historia Destacada
/**
 * Historia para el componente List cuando esNota10 es true (destacado).
 */
export const Destacado = {
  args: {
    ...Default.args, // Hereda argumentos base
    foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Tom_Cruise-2428.jpg/500px-Tom_Cruise-2428.jpg',
    nombre: 'Tom Cruise',
    esNota10: true,
    children: 'Famoso actor y productor, reconocido por sus películas de acción de alto presupuesto y acrobacias. Es un ícono de la cultura pop.',
  },
};

// 3. Historia con Biografía Corta
/**
 * Historia para mostrar el componente con menos texto de biografía.
 */
export const BiografiaCorta = {
  args: {
    foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg/330px-TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg',
    nombre: 'Tom Hanks',
    esNota10: false,
    children: 'Tom Hanks es un actor estadounidense ganador del Óscar por interpretar a Forrest Gump.',
  },
};