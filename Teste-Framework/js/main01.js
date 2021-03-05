
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(resultado => resultado.json())
    .then(postagens =>{
        const table = document.querySelector("#table01 tbody")
        table.innerHTML = postagens.map(postagem => {
            return `
            <tr>
                <td> ${postagem.id} </td>
                <td> ${postagem.userId} </td>
                <td> ${postagem.title} </td>
                <td> ${postagem.body} </td>
            </tr>
            `
        }).join('')
})