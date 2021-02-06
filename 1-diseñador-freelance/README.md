# FrontEnd Store


> [FrontEnd Store WEB: http://127.0.0.1:5500](http://127.0.0.1:5500)

## Tecnologias

- [Normalize](https://necolas.github.io/normalize.css/8.0.1/normalize.css).
- [Google Fonts](https://fonts.google.com/).
- [BEM](http://getbem.com/)




### BEM (Bloque Elemento Modificador)

- Es una forma de organizar las clases para un uso eficaz.   
- De esta forma seleccionamos solo por clases.   
- cada clase tiene un nombre unico usando la tecnica de BEM.

```html
<body>
    <header class="header">
        <a href="index.html">
            <img class="header__logo" src="img/logo.png" alt="Logotipo">
        </a>
    </header>
    <nav class="navegacion">
        <a class="navegacion__enlace" href="index.html">Tienda</a>
        <a class="navegacion__enlace navegacion__enlace--activo" href="nosotros.html">Nosotros</a>
    </nav>

    <main class="contenedor">
        <h1>Nosotros</h1>

    </main>

    <footer class="footer">
        <p class="footer__texto">
            FrontEnd Store - &copy;Todos los derechos reservados 2021
        </p>
    </footer>
</body>
```