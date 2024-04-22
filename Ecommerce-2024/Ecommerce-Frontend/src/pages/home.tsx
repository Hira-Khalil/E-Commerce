import { Link } from "react-router-dom"
import ProductCard from "../components/product-card";
const Home = () => {
    const addtoCartHandler = () => { };

    return (
        <div className="home">

            <section></section>
            <h1>Latest Products
                <Link to="/search" className="findmore">More</Link>
            </h1>

            <main>
                <ProductCard
                    productId="abc"
                    name="Macbook"
                    price={4545}
                    stock={435}
                    handler={addtoCartHandler}
                    photo="https://m.media-amazon.com/images/I/619L9jf3-rL._AC_SL1500_.jpg"
                />
            </main>
        </div>
    )
}

export default Home