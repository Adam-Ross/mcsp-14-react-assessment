import {useState} from 'react'
const TodoInput = () => {

    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(text)
        // be able to log out the input value when submitted.
        // research controlled components / forms withing react
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }



    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange}/>
            <input type="submit" />
        </form>
    )
}

export default TodoInput