
fetch("https://jsonplaceholder.typicode.com/albums")
.then(resultado => resultado.json())
.then(albuns =>{
    const table = document.querySelector("#table02 tbody")
    table.innerHTML = albuns.map(album => {
        return `
        <tr>
            <td> ${album.id} </td>
            <td> ${album.userId} </td>
            <td> ${album.title} </td>
        </tr>
        `
    }).join('')
})