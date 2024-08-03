export default function Card(props) {
    return (
        <div className="card">
            <img src={`../../public/${props.image}`} className="card-image" />
            <div className="card-details">
                <p>
                    <span className="card-country">{props.country}</span>
                    <span className="card-maps-link">View on Google Maps</span>
                </p>
                <h2 className="card-title">{props.title}</h2>
                <p><b>Date is here</b></p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}