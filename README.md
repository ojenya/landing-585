# Инструкция
Для того, чтобы все заработало можно просто скачать файлы и заменить index.js, routes.js, в папке Components добавить папку Landing и поместить туда оставшиеся 2 файла.

Либо: 

1. Зайти в index.js и добавить:

```
import Landing from "./components/Landing/Landing";

...
<Switch>
 ...
 <Route exact path={routes.landing} component={Landing} />
</Switch>
```

2. Зайти в constant/routes.js и добавить:

```
landing: "/landing",
```
 
3. в папке Components добавить папку Landing и поместить туда оставшиеся 2 файла.

PS В Landing.js уже подключен Landing.css(это твой main.min.css) 

PSS осталось разобраться со статикой(svg,ttf ..)

PSSS Закрой все <input .... />, <img ... />, "class=" замени на "className="
