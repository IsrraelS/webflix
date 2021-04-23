/*mport { render } from "@testing-library/react"
import { useState, setState } from "react"
import Store from "../store/Store.js"


const ProductList= () => {

    const [state, setState] = useState([
    { id: 1, name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
    { id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
    { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" }
    ])


    return (
        <div className="cntPrincipal">
            {state.map((product) => 
                <div key={product.id}>
                    <img src={product.image}></img>
                    <span>
                        {product.name}
                    </span>
                    <span>
                        {product.price}
                    </span>
                    <button onClick={() => addToCart(product)}>Add</button>
                </div>
            )}
        </div>
    )
}

const addToCart = (product) => {

    Store.dispatch({
        type:"ADD_TO_CART",
        product

    })
}

export default ProductList;*/