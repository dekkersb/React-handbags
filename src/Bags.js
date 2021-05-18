function Bag ({price, tag, image, name}) {
    return (
    <article>
        <span>{tag}</span>
        <img src={image} alt={name}/>
        <p>The {name} bag</p>
        <h4>€{price},-</h4>
    </article>
    )
}

export default Bag;