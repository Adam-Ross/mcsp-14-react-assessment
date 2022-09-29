import {useState} from 'react'

const TodoInput = () => {

    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(text)
        setText('')
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* tie the value of the input to the LOCAL state */}
            <input type="text" value={text} onChange={handleChange} />
            <input type="submit" />
        </form>
    )
}

export default TodoInput