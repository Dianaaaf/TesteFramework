
fetch("https://jsonplaceholder.typicode.com/todos")
.then(resultado => resultado.json())
.then(todos =>{
    const table = document.querySelector("#table03 tbody")
    table.innerHTML = todos.map(todo => {
        return `
        <tr>
            <td> ${todo.id} </td>
            <td> ${todo.userId} </td>
            <td> ${todo.title} </td>
            <td> ${todo.completed} </td>
        </tr>
        `
    }).join('')
})