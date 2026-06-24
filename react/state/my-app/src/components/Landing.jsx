export default function Landing({ user, store }) {
    const mostExpensive = store.reduce((max, product) => {
        return product.price > max.price ? product : max;
    });
    return (
        <div>
            <div>Welcome, {user}. The hottest item in the store is {mostExpensive.item} for ${mostExpensive.price}</div>
            <hr />
        </div>
    );
}
