export default function Card(props) {
    const dateStart = new Date(props.startTime * 1000).toDateString();
    const dateEnd = new Date(props.endTime * 1000).toDateString();

    return (
        <>
            <div className="card">
                <img src={`/public/${props.image}`} className="card-image" />
                <div className="card-details">
                    <p>
                        <span className="card-country">{props.country}</span>
                        <a href={props.mapsLink} target="_blank" className="card-maps-link">View on Google Maps</a>
                    </p>
                    <h2 className="card-title">{props.title}</h2>
                    <p><b>{dateStart} - {dateEnd}</b></p>
                    <p className="card-description">{props.description}</p>
                </div>
            </div>
            {props.showLine && <hr />}
        </>
    )
}