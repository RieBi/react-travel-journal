import globePicture from "../assets/globe.svg"

export default function Header() {
    return (
        <div className="header">
            <div className="title">
                <img className="title-image" src={globePicture} />
                <p>my travel journal.</p>
            </div>
        </div>
    )
}