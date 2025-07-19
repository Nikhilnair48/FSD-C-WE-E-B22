import GrandChild from "./Grandchild";

function Child({ user }) {
    return (
        <div>
            <h2>Child component</h2>
            <GrandChild user={user} />
        </div>
    )
}
export default Child;