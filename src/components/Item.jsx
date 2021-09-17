const Item = (props) => {
    return (
        <div>
            <h2>{props.repo.name}</h2>
            <small>{new Date(Date.parse(props.repo.created_at)).toLocaleDateString()}</small>
            <p>{props.repo.description}</p>
            <a rel="noreferrer" href={props.repo.html_url} target="_blank">{props.repo.html_url}</a>
        </div>
    )
}

export default Item;