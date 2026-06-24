export default function Hudini({ show }) {
    return (
        <div>
            {show ? <div>Now you see me</div> : <div>Now you don't</div>}
        </div>
    );
}
