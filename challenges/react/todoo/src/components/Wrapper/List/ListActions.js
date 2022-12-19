const ListActions = () => {
    return (
        <nav className="list-actions">
            <p className="counter">5 items left</p>
            <div className="actions">
                <button className="active">All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <button>Clear Completed</button>
        </nav>
    )
} 

export default ListActions;