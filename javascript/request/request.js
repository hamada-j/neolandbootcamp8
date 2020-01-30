var url = 'https://jsonplaceholder.typicode.com/posts';
var seccionBlog = document.getElementById('blog');

var pedido = new XMLHttpRequest();

//abrir el canal de comunicación 

pedido.open('GET', url, true);

//envio del pedido

pedido.send();

//estar atentos al estado del pedido

pedido.addEventListener('readystatechange', cargarArchivo);


function cargarArchivo(e) {
    if (e.target.readyState == 4 && e.target.status == 200) {
        //seguro tengo el pedido.
        var texto = e.target.responseText;

        var listaPosts = JSON.parse(texto);

        console.log(listaPosts);

    }
}


function pintar(pListaPosts) {
    console.log(pListaPosts);
    for (post of pListaPosts) {

        var article = document.createElement('article');
        var h2 = document.createElement('h2');
        var p = document.createElement('p');

        var titulo = document.createTextNode(post.title);
        var contenido = document.createTextNode(post.body);
        article.id = post.id;

        p.appendChild(contenido);
        h2.appendChild(titulo);

        article.appendChild(h2);
        article.appendChild(p);

        seccionBlog.appendChild(article);
    }
}