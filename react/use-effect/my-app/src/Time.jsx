const Time = ({time}) => {
    return (
        <div>{time.toLocaleTimeString()}</div>
    )
}

export default Time