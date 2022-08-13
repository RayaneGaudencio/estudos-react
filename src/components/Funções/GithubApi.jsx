import { useState } from "react"

export const GithubApi = () => {
    const [ name, setName ] = useState('')
    const [ user, setUser ] = useState(null)

    function searchUser(event, user) {
        event.preventDefault()

        fetch(`https://api.github.com/search/users?q=${user}`)
            .then(response => response.json())
            .then(users => setUser(users.items))

            setName('')
    }

    return <div>
            <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="pesquisar por usuário..."
            />
            <button
            onClick={(e) => searchUser(e, name)}>Pesquisar</button>
            {user && user.map((user) => (
                <ul>
                    <li key={user.id}>
                        <p>{user.login}</p>
                        <div>
                            <a href={user.html_url}>{user.html_url}</a>
                        </div>
                    </li>
                    <img src={user.avatar_url} alt="Imagem de perfil do usuário no github"/>
                </ul>
            ))}
    </div>
}
