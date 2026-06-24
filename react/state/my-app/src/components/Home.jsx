import Item from './Item';

export default function Home({ store, shouldDiscount }) {
    return (
        <div className="home-page">
            <h2>Store</h2>
            <div className="items-list">
                {store.map((product) => (
                    <Item
                        key={product.item}
                        name={product.item}
                        price={shouldDiscount ? product.price * (1 - product.discount) : product.price}
                    />
                ))}
            </div>
        </div>
    );
}
