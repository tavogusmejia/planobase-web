import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

/**
 * El arnés de pruebas.
 *
 * **Por qué Vitest y no otro.** El proyecto ya es ESM (`"type": "module"`),
 * TypeScript estricto y con dos alias de ruta —`@/` y `@content/`—. Vitest lo
 * ejecuta tal cual, sin un paso de transpilación que configurar y sin un
 * segundo `tsconfig` que mantener al día. Con `node --test` habría que resolver
 * los alias a mano y compilar antes; con Jest, añadir `ts-jest` o `babel` y un
 * mapeo de módulos que se desincroniza del `tsconfig` en cuanto alguien añade
 * un alias.
 *
 * Aquí solo se prueba **lógica pura**: el cálculo de franjas, la firma del
 * sello, el formato y la caducidad de la atribución. Nada de componentes ni de
 * Supabase, que es donde una prueba cuesta más de lo que atrapa.
 */

const raiz = (ruta: string) => fileURLToPath(new URL(ruta, import.meta.url))

export default defineConfig({
  test: {
    // Solo lo de `tests/`. `src/` no contiene pruebas y no debe recorrerse.
    include: ['tests/**/*.test.ts'],
    // Node por defecto; el archivo que necesita `window` lo pide con
    // `@vitest-environment happy-dom` en su primera línea.
    environment: 'node',
    // Las pruebas del sello escriben en `process.env` y las de atribución en
    // `localStorage`. Cada archivo en su propio entorno evita que se pisen.
    isolate: true,
  },
  resolve: {
    alias: {
      /* Los mismos alias que `tsconfig.json`. Se escriben aquí y no con un
         complemento que los lea del `tsconfig`, para no añadir una dependencia
         más por dos líneas; si aparece un tercer alias, se añade en los dos
         sitios. */
      '@': raiz('./src'),
      '@content': raiz('./content'),
      /* `server-only` es un paquete centinela: su `index.js` lanza siempre, y
         solo bajo la condición de resolución `react-server` —la que aplica Next
         al compilar un Server Component— se resuelve a un módulo vacío. Vitest
         no aplica esa condición, así que se apunta al mismo archivo vacío que
         usaría Next. No es un simulacro: es literalmente el módulo que el
         paquete publica para ese caso. */
      'server-only': raiz('./node_modules/server-only/empty.js'),
    },
  },
})
