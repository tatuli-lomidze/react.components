import '../App.css'; 

const Card = ({title, image, characters, description, action}) => {
    return (
    <div className='card'>
        <h1 className='title'>{title}</h1>
        <img src={image} alt="props.title" className="card-image" />
        {characters.map((character, index) => (
    <h3 key={index} className='character'>{character}</h3>
))}        
        <p>{description}</p>

        <button onClick={ () => action(title, characters)} className='btn'>see more</button>
    </div>
    )
}

export default Card