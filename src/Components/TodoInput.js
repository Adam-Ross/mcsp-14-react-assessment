const TodoInput = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        // be able to log out the input value when submitted.
        // research controlled components / forms withing react
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <input type="submit" />
        </form>
    )
}

export default TodoInput