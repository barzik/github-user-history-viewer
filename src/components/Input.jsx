const Input = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const text = event.target.text.value;
        props.handleSubmit(text);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="text"
                type="text"
                placeholder="הקלידו שם של משתמש בגיטהאב, למשל barzik ולחצו על אנטר"
            />
        </form>);
}

export default Input;
