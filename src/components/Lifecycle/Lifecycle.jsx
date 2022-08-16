import { useEffect, useState } from "react"
import './lifecycle.module.css'

export default function Lifecycle() {

    const [ number, setNumber ] = useState(0)
    const [ name, setName ] = useState('')

    useEffect(() => {
        console.log("Algum componente atualizou")
    }) // ativado toda vez que o componente é atualizado

    useEffect(() => {
        console.log("Apenas 1 vez")
    }, [])

    useEffect(() => {
        console.log("Némero atualizado")
    }, [number]) // ativado apenas na inicialização do componente

    useEffect(() => {
        console.log("Name atualizado")
    }, [name]) // chamado apenas uma vez (porque o name é atualizado uma única vez)

    return (
        <div>
            <h1>Lifecycle componentes</h1>
            {number}
            <button onClick={() => setNumber(number + 1)}>Somar</button>
            <p>Nome: {name}</p>
            <button onClick={() => setName("RAYANE")}>Alterar nome</button>
        </div>
    )
}
