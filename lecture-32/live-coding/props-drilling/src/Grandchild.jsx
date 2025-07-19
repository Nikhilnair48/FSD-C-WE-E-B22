function GrandChild({ user }) {
    return (
        <div>
            <h3>Grandchild component</h3>
            <p>Name: {user.name}</p>
            <p>Type: {user.type}</p>
        </div>
    )
}

export default GrandChild;