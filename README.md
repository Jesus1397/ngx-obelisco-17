# Introducción

NgxObelisco es una libreria de Angular basado en el sistema de diseño Obelisco y en componentes para los productos digitales de la ciudad de Buenos Aires.

## Sistema de Diseño Obelisco

---

Es el sistema de diseño para productos digitales del Gobierno de la Ciudad de Buenos Aires; una guía de recursos y herramientas creada para los ciudadanos/as.

Obelisco busca brindar soluciones de diseño tanto a áreas internas como externas de Gobierno, poniendo el foco en la accesibilidad y los estándares de usabilidad para lograr una experiencia ideal para las personas usuarias.

## Cómo usar NgxObelisco

---

NgxObelisco se distribuye por medio del [paquete publicado en npm](https://www.npmjs.com/package/ngx-obelisco). Es recomendable usar este sistema para definir la versión a usar y poder actualizarla fácilmente.

### Instalación

Para instalarlo en un proyecto que ya usa npm, hay que ejecutar:

```bash
npm install ngx-obelisco-17
```

### Requerimientos

**Node.js**: Se recomienda utilizar la versión ^18.X.X.

**Angular**: Este proyecto requiere Angular 17. Asegúrate de tener Angular 17.X.X instalado globalmente o especificado en tu proyecto.

> **Importante**  
> Revisá las [versiones y herramientas aceptadas](https://asijira-confluence.buenosaires.gob.ar/display/ASI/Versiones++y+Herramientas+aceptadas+por+la+ASI) por la **Agencia de Seguridad Informática (ASI)** del Gobierno de la Ciudad antes de elegir una versión de estas dependencias.

## Importar módulos

---

Además de importar componente por componente como por ejemplo:

```js
import { OAccessModule } from "ngx-obelisco-17/access";
import { OAlertModule } from "ngx-obelisco-17/alert";
```

Ó Puedes usar este que trae todos los módulos:

```js
import { NgxObeliscoModule } from "ngx-obelisco-17/ngx-obelisco";
```

## Iconografía

---

### Boxicons

Obelisco utiliza la librería de **Boxicons** que se puede instalar de las siguientes maneras:

Utilizando el paquete npm:

```bash
npm install boxicons
```

Importando en el archivo angular.json de la siguiente manera:

```json
"styles": [
  "src/styles.scss",
  "node_modules/boxicons/css/boxicons.min.css"
]
```

Para utilizarlas con su CDN podemos hacerlo de la siguiente forma:

```html
<link
  href="https://unpkg.com/boxicons
    @2.1.4/css/boxicons.min.css"
  rel="stylesheet"
/>
```

### Material Icons Rounded

Obelisco utiliza la librería de **Material Icons Rounded** que se puede instalar de las siguientes maneras:

Utilizando el paquete npm:

```bash
npm install material-icons@latest
```

Para utilizarlas con su CDN podemos hacerlo de la siguiente forma:

```html
<link
  href="https://fonts.googleapis.com/icon?
    family=Material+Icons+Round"
  rel="stylesheet"
/>
```

## Tipografía

---

Obelisco requiere las tipografías **Nunito** y **Open sans** disponibles en google fonts, para utilizarlas con su CDN podemos hacerlo de la siguiente forma:

```html
<link
  href="https://fonts.googleapis.com/css2?
    family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
  rel="stylesheet"
/>

<link
  href="https://fonts.googleapis.com/css2?
    family=Nunito:wght@300;400;600;700&display=swap"
  rel="stylesheet"
/>
```

## Javascript

---

Como NgxObelisco está construido sobre Obelisco y Bootstrap 4, [debemos tener esas dependencias](https://getbootstrap.com/docs/4.6/getting-started/introduction/#js).

```html
<script
  src="https://cdn.jsdelivr.net/npm/jquery@3.5.1
        /dist/jquery.slim.min.js"
  integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/
        zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
  crossorigin="anonymous"
><script/>

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2
        /dist/js/bootstrap.bundle.min.js"
  integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/
        2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
  crossorigin="anonymous"
><script/>
```

## Mantenimiento y colaboración

---

El mantenimiento y desarrollo de Obelisco lo hace el equipo de la Dirección General de Canales Digitales, pero lo utilizan tanto equipos de gobierno como proveedores externos.

Para agilizar y hacer más transparente el proceso, cualquier persona puede contribuir con alguna de estas acciones:

1. Pedir un caso de uso nuevo: Si estás trabajando con NgxObelisco y tenés un caso de uso que no está contemplado, o ninguno de los componentes que existen se adapta bien a la necesidad.
2. Reportar un error o mejora técnica: Si encontrás un error en alguno de los componentes o alguna mejora que impacte en la usabilidad, accesibilidad o rendimiento.
3. Aportar con código: Si pediste un caso nuevo o reportaste un error y querés colaborar con el código, explicá en el issue que vas a estar trabajando en eso.

Para más detalles, consultá nuestra guía [Contribuir con NgxObelisco](https://github.com/gcba/ngx-obelisco-17/blob/main/CONTRIBUTING.md).
