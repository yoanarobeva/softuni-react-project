import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as cartService from '../../services/cartService';

export const DetailsForm = ({
    designId,
    setCart,
}) => {
    const navigate = useNavigate();
    const [isCategorySelected, setIsCategorySelected] = useState({
        code: false,
        earrings: false,
        necklace: false,
        broche: false,
    });

    const [isQuantityDisabled, setIsQuantityDisabled] = useState(false);

    const [values, setValues] = useState({
        category: [],
        quantity: 0,
    });

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onChangeCategory = (value) => {

        setValues(state => ({ ...state, category: [...state.category, value] }));
        setIsCategorySelected(state => ({ ...state, [value]: !isCategorySelected[value] }));

    };

    const onChangeQuantity = (value) => {
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

        const newCartItem = await cartService.create({ designId, ...values });

        //TODO: update cart state
        setCart(state => [...state, newCartItem]);

        navigate('/cart');

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
                            <li className="list-inline-item"><button type="button" onClick={() => onChangeCategory('code')} className="btn btn-success btn-size" disabled={isCategorySelected.code}>Code</button></li>
                            <li className="list-inline-item"><button type="button" onClick={() => onChangeCategory('earrings')} className="btn btn-success btn-size" disabled={isCategorySelected.earrings}>Earrings</button></li>
                            <li className="list-inline-item"><button type="button" onClick={() => onChangeCategory('necklace')} className="btn btn-success btn-size" disabled={isCategorySelected.necklace}>Necklace</button></li>
                            <li className="list-inline-item"><button type="button" onClick={() => onChangeCategory('broche')} className="btn btn-success btn-size" disabled={isCategorySelected.broche}>Broche</button></li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <ul className="list-inline pb-3">
                            <li className="list-inline-item text-right">
                                Quantity:
                                <input onChange={onChangeHandler} type="hidden" name="quantity" value={values.quantity} />
                            </li>
                            <li className="list-inline-item"><button type="button" onClick={() => onChangeQuantity('-1')} className="btn btn-success" disabled={isQuantityDisabled}>-</button></li>
                            <li className="list-inline-item"><span className="badge bg-secondary">{values.quantity}</span></li>
                            <li className="list-inline-item"><button type="button" onClick={() => onChangeQuantity('1')} className="btn btn-success btn-size">+</button></li>
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