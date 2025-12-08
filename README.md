# Clase: Testing Unitario con Jest

Repositorio completo con material de clase, slides y ejemplos prácticos sobre testing unitario usando Jest.

## 📁 Estructura del Proyecto

```
clase-testing-jest/
├── slides/              # Presentación de la clase (20 slides)
│   ├── 01-que-es-testing-unitario.md
│   ├── 02-por-que-testing-unitario.md
│   ├── ...
│   └── 20-errores-comunes.md
├── ejemplos/           # Ejemplos de código por tema
│   ├── 01-test-basico/
│   ├── 02-tests-asincronos/
│   ├── 03-mocks-funciones/
│   ├── 04-mocks-modulos/
│   ├── 05-spies/
│   ├── 06-hooks/
│   └── 07-snapshots/
├── config/             # Archivos de configuración
│   ├── jest.config.node.js
│   ├── jest.config.react.js
│   └── sonar-project.properties
└── README.md
```

## 📚 Contenido de la Clase

### Fundamentos
1. ¿Qué es el testing unitario?
2. ¿Por qué hacer testing unitario?
3. Tipos de Testing (Unit, Integration, E2E)
4. Unit Test vs Integration Test (Frontend)

### Jest
5. ¿Qué es Jest?
6. Instalación de Jest
7. Configuración básica en Node.js
8. Configuración básica en React
9. Estructura recomendada del proyecto

### Ejemplos Prácticos
10. Ejemplo de test unitario básico
11. Tests asíncronos con Jest
12. Mocks de funciones
13. Mocks de módulos
14. Uso de spies
15. Uso de hooks (before/after)
16. Snapshot Testing (Frontend)

### Herramientas y Buenas Prácticas
17. Cobertura de código con Jest
18. Integración con SonarQube (Frontend)
19. Buenas prácticas en testing unitario
20. Errores comunes en testing

## 🚀 Cómo usar este repositorio

### Ver las slides

Las slides están en la carpeta `slides/`. Cada archivo markdown contiene el contenido de una slide.

### Ejecutar los ejemplos

Cada carpeta en `ejemplos/` contiene un ejemplo completo y funcional:

```bash
# Navegar a un ejemplo
cd ejemplos/01-test-basico

# Instalar dependencias
npm install

# Ejecutar tests
npm test

# Modo watch
npm run test:watch

# Con cobertura
npm run test:coverage
```

### Ejemplos disponibles

- **01-test-basico**: Tests unitarios básicos con funciones matemáticas
- **02-tests-asincronos**: Tests con async/await, Promises y callbacks
- **03-mocks-funciones**: Cómo crear y usar mocks de funciones
- **04-mocks-modulos**: Cómo mockear módulos completos
- **05-spies**: Uso de spies para observar funciones
- **06-hooks**: Uso de beforeAll, afterAll, beforeEach, afterEach
- **07-snapshots**: Snapshot testing para componentes React

## 📦 Instalación

Este repositorio no requiere instalación global. Cada ejemplo tiene su propio `package.json` con las dependencias necesarias.

Para usar los ejemplos:

```bash
cd ejemplos/[nombre-ejemplo]
npm install
npm test
```

## 🛠️ Configuraciones

Las configuraciones de ejemplo están en `config/`:

- `jest.config.node.js`: Configuración para proyectos Node.js
- `jest.config.react.js`: Configuración para proyectos React
- `sonar-project.properties`: Configuración para SonarQube

## 📖 Recursos adicionales

- [Documentación oficial de Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [Jest Cheat Sheet](https://github.com/sapegin/jest-cheat-sheet)

## 📝 Notas

- Todos los ejemplos son funcionales y pueden ejecutarse independientemente
- Los tests están escritos siguiendo buenas prácticas
- Cada ejemplo incluye comentarios explicativos

