function ErrorMessage(props) {
    const { message } = props;
    return (
        <div style={{ color: "red", margin: "1rem 0", textAlign: "center" }}>
            {message}
        </div>
    );
}

export default ErrorMessage;
