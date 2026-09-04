#!/usr/bin/env bash
# Marca carpetas para que Dropbox NO las sincronice.
# Correr desde la raíz del repo, y RE-CORRER cada vez que borres node_modules
# o hagas un pnpm install desde cero: el atributo vive en la carpeta y se pierde
# si la carpeta se borra y se vuelve a crear.
#
#   bash wix-migration/07-tooling/dropbox-ignore.sh
#
set -uo pipefail

TARGETS=(node_modules .next .turbo .vercel assets-originales)
# Descomenta la línea siguiente si prefieres que Dropbox tampoco toque el historial de git
# (recomendado si vas a hacer push a GitHub: GitHub es el respaldo del código).
# TARGETS+=(.git)

for t in "${TARGETS[@]}"; do
  if [ -e "$t" ]; then
    xattr -w com.dropbox.ignored 1 "$t" 2>/dev/null \
      && echo "ignorado por Dropbox: $t" \
      || echo "no se pudo marcar: $t"
  else
    echo "no existe todavia (se marcará luego): $t"
  fi
done

echo
echo "Verificación:"
for t in "${TARGETS[@]}"; do
  [ -e "$t" ] && printf "  %-20s %s\n" "$t" "$(xattr -p com.dropbox.ignored "$t" 2>/dev/null || echo '(sin marca)')"
done
