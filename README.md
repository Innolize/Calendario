# Calendario

Calendario semanal con la funcionalidad de agregar, modificar y eliminar eventos. También podes invitar otros usuarios que estén en la base de datos

## Instalación

Instalar dependencias

```bash
-npm install
```

## Como utilizar

1- Todos tus eventos se guardan en una base de datos local corriendo el siguiente comando:
```bash
json-server --watch db.json
```
podes ver todo su contenido en http://localhost:3000/

2- Corre el comando http-serve -c-1 para ver la pagina en el navegador

```bash
http-serve -c-1
```

## Testeo

Esta aplicación esta testeada con cypress, podes verlo corriendo el siguiente script en el terminal:

```bash
npm run cypress-dev
```
corriendo el archivo testCalendario.js