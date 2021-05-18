function Bag ({price, bestseller, image, name}) {
    return (
    <article>

        <span>{bestseller? "Best seller":"New collection"}</span>
        <img src={image} alt={name}/>
        <p>The {name} bag</p>
        <h4>€{price},-</h4>
    </article>
    )
}

export default Bag;