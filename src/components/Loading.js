const Loading = ({ show }) => {
    // loading before success fetch response
    return (
            (show ? <div className="loading-container"><div className="loader"></div></div> : "")
    )
}

export default Loading
