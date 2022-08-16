import { useState } from 'react'

const Form2 = () => {

    const [ name, setName ] = useState({ value: ''})

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleInputChange = (event) => {
        setName(event.target.value)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text"
                name="name"
                value={name.value}
                onChange={(event) => handleInputChange(event)} />
            </label>
            <input type="submit" value="Enviar" />
        </form>
        {name.value}
    </div>
  )

}

export default Form2
