import Item from './Item';

const List = (props) => {
    let rows = [];
    props.repos.map((repo, index) => rows.push(<Item key={index} repo={repo} />))
    return (
        <div className="list-group">
            {rows}
        </div>)
}

export default List;
