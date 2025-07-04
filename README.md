## 🧭 Guía Práctica de Git y Control de Versiones

### 📌 Índice de Contenidos
1. Introducción a Git
2. `git status` y `git status -s`
3. `git add` y área de preparación
4. `git commit`, `-m` y `-a -m`
5. `git log` y `git log --oneline`
6. `git clone`
7. `git remote add/set-url/remove`
8. `git push` y `git push --set-upstream`
9. `git pull`
10. `git fetch` y `git fetch --all`
11. `git branch`, `-r`, `-a`, `-D`
12. `git checkout`
13. `git switch`
14. `git merge` y resolución de conflictos
15. Actividad práctica con ramas

---

### 1. Introducción a Git
Git es un sistema de control de versiones distribuido que permite a múltiples desarrolladores trabajar en un proyecto de forma simultánea, segura y organizada.

---

### 2. `git status -s`
Muestra el estado actual del repositorio de forma resumida.
- `M`: Modificado
- `A`: Añadido
- `??`: No rastreado
- `UU`: Conflicto de fusión

Colores:
- **Verde**: En el área de preparación
- **Rojo**: Modificado, pero no añadido

---

### 3. `git add`
Prepara archivos para ser confirmados (committed).
- `git add <archivo>`
- `git add .` (todos los cambios nuevos o modificados)

---

### 4. `git commit`
- `git commit -m "mensaje"`: Confirma los cambios añadidos con un mensaje.
- `git commit -a -m "mensaje"`: Añade automáticamente todos los archivos rastreados modificados y luego crea el commit.

---

### 5. `git log` y `git log --oneline`
- `git log`: Muestra historial detallado de commits.
- `git log --oneline`: Muestra una vista resumida con SHA corto y mensaje del commit.

---

### 6. `git clone <url>`
Clona un repositorio remoto a tu máquina local en un nuevo directorio.

---

### 7. `git remote`
- `git remote add origin <url>`: Asocia tu repositorio local con un repositorio remoto.
- `git remote set-url origin <nueva-url>`: Cambia la URL del remoto.
- `git remote remove origin`: Elimina el enlace con el remoto.

---

### 8. `git push`
Envía tus commits locales al repositorio remoto.
- `git push`: Envía a la rama predeterminada
- `git push --set-upstream origin master`: Para enlazar la rama local con la remota en la primera vez.

📌 Nota: La terminal mostrará la URL de destino y confirmará la subida.

---

### 9. `git pull`
Descarga y fusiona cambios desde el repositorio remoto a tu rama local actual.

🧠 Nota: Ejecutar `git pull` mostrará la descarga de objetos y el mensaje de éxito.

---

### 10. `git fetch` y `git fetch --all`
- `git fetch`: Descarga actualizaciones desde un remoto sin aplicar cambios.
- `git fetch --all`: Hace lo mismo con **todos** los remotos configurados.

📌 No existe `git pull --all`. Git no permite fusiones múltiples automáticas.

---

### 11. `git branch`
- `git branch`: Lista ramas locales.
- `git branch -r`: Lista ramas remotas.
- `git branch -a`: Lista locales y remotas.
- `git branch <nombre>`: Crea una nueva rama.
- `git branch -D <nombre>`: Elimina una rama local de forma forzada.

⚠️ Para eliminar una rama, primero debes cambiarte a otra rama distinta.

---

### 12. `git checkout`
- `git checkout <rama>`: Cambia a una rama existente.
- Si la rama no existe localmente pero sí en el remoto, Git la descargará automáticamente y cambiará a ella.

---

### 13. `git switch`
Alternativa moderna a `checkout` para manejar ramas.
- `git switch <rama>`: Cambia a una rama existente.
- `git switch -c <nueva-rama>`: Crea y cambia a una nueva rama.

---

### 14. `git merge <rama>`
Fusiona otra rama con la actual.
- Si no hay conflictos, se realiza automáticamente.
- Si hay conflictos, deberás resolverlos manualmente.

#### Resolución de conflictos:
1. Verifica con `git status -s` (marcados como `UU`)
2. Abre los archivos y resuelve entre los bloques:
```txt
<<<<<<< HEAD
(código de la rama actual)
=======
(código de la otra rama)
>>>>>>> rama-a
```
3. Guarda los cambios
4. Ejecuta `git add <archivo>`
5. Finaliza con `git commit`

---

