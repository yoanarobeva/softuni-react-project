import { useState } from "react";
import { useContext } from 'react';

import { CartContext } from "../../../contexts/CartContext";

export const DetailsForm = ({
    design,
}) => {
    const { onCartSubmit } = useContext(CartContext);
    const [isCategorySelected, setIsCategorySelected] = useState(false);
    const [isQuantityDisabled, setIsQuantityDisabled] = useState(false);
    const [values, setValues] = useState({
        category: '',
        quantity: 1,
    });

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onClickCategory = (value) => {

        setValues(state => ({ ...state, category: value }));
        setIsCategorySelected(true);
    };

    const onClickQuantity = (value) => {
        value = Number(value);

        if (values.quantity === 0 && value < 0) {
            return setIsQuantityDisabled(true);
        } else {
            setIsQuantityDisabled(false);
        }

        setValues(state => ({ ...state, quantity: state.quantity + value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        await onCartSubmit({ designId: design._id, designPrice:  design.price, ...values });
    };

    return (
        <div className="mt-5">
            {/* //TODO Implement add to cart function (submitting the form) */}
            <form action="" method="GET" onSubmit={onSubmit}>
                <input type="hidden" name="product-title" value="Activewear" />
                <div className="row">
                    <div className="col-auto">
                        <ul className="list-inline pb-3">
                            <li className="list-inline-item">Category :
                                <input onChange={onChangeHandler} type="hidden" name="category" value={values.category} />
                            </li>
                            <li className="list-inline-item"><button type="button" onClick={() => onClickCategory('code')} className="btn btn-success btn-size" disabled={isCategorySelected}>Code</button></li>
                            <li className="list-inline-item"><button type="button" onClick={() => onClickCategory('earrings')} className="btn btn-success btn-size" disabled={isCategorySelected}>Earrings</button></li>
                            <li className="list-inline-item"><button type="button" onClick={() => onClickCategory('necklace')} className="btn btn-success btn-size" disabled={isCategorySelected}>Necklace</button></li>
                            <li className="list-inline-item"><button type="button" onClick={() => onClickCategory('broche')} className="btn btn-success btn-size" disabled={isCategorySelected}>Broche</button></li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <ul className="list-inline pb-3">
                            <li className="list-inline-item text-right">
                                Quantity:
                                <input onChange={onChangeHandler} type="hidden" name="quantity" value={values.quantity} />
                            </li>
                            <li className="list-inline-item"><button type="button" onClick={() => onClickQuantity('-1')} className="btn btn-success" disabled={isQuantityDisabled}>-</button></li>
                            <li className="list-inline-item"><span className="badge bg-secondary">{values.quantity}</span></li>
                            <li className="list-inline-item"><button type="button" onClick={() => onClickQuantity('1')} className="btn btn-success btn-size">+</button></li>
                        </ul>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-success btn-lg" name="submit" value="addtocard">Add To Cart</button>
                </div>
            </form>

        </div>
    );
};