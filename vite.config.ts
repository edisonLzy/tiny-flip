import { defineConfig, mergeConfig } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const resolveFromRoot = (p: string) =>{
  const dirname = path.dirname(fileURLToPath(import.meta.url))
  return  path.join(dirname,p)
}

const baseConfig = defineConfig({
   resolve: {
    alias: [
      {
        find:'@', replacement: resolveFromRoot('src')
      }
    ]
   }
})

// https://vitejs.dev/config/
export default defineConfig(({command})=>{
  if(command === 'serve'){
    return mergeConfig(baseConfig,defineConfig({
      root : resolveFromRoot('website'),
   }))
  }else{
    return mergeConfig(baseConfig,defineConfig({
      build: {
        outDir: resolveFromRoot('dist'),
        emptyOutDir: true,
        lib: {
          entry: resolveFromRoot('src/index.ts'),
          formats: ['es','umd'],
          name: 'flip',
          fileName:'index'
        }
      }
   }))
  }
})
