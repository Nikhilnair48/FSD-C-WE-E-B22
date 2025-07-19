
function Child(props) {
    const { onSend } = props;

    const sendData = () => {
        onSend("Hello from Child!");
    }

    return (
        <div>
            <h2>Child Component</h2>
            <button onClick={sendData}>Send data to parent</button>
        </div>
    )
}

export default Child;