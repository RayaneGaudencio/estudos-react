import { useState } from "react"
import styles from './GithubApi.module.css'

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


    return <div className={styles.wrapper}>
            <header>
                <label>
                    Nome do usuário
                    <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="pesquisar por usuário..."
                    />
                <button
                onClick={(e) => searchUser(e, name)}>Pesquisar</button>
                </label>
            </header>
            {user && user.map((user) => (
                    <div className={styles.userContainer}>
                        <ul>
                            <li key={user.id}>
                                <p>{user.login}</p>
                            </li>
                        </ul>
                        <img src={user.avatar_url} alt="Imagem de perfil do usuário no github"/>
                        <a href={user.html_url}>{user.html_url}</a>
                    </div>
            ))}
    </div>
}
