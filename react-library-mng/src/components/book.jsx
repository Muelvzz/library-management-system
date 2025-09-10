export default function Book(props) {
    return (
        <>
            <article className="book">
                <div>
                    <img src={`${props.src}`} alt={props.alt} />
                </div>
                <div className="book-content">
                    <h1 className="book-title">{props.name}</h1>
                    <p>{props.author}</p>
                    <p>{props.text}</p>
                </div>
            </article>
        </>
    )
}