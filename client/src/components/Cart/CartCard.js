import { useContext, useEffect, useState } from "react";

import { CartContext } from "../../contexts/CartContext";
import * as designsService from "../../services/designsService";

export const CartCard = ({
    _id,
    designId,
    designPrice,
    quantity,
    category,
}) => {
    const {onCartDelete, onCartEdit} = useContext(CartContext);
    const [design, setDesign] = useState({});
    const [itemQuantity, setItemQuantity] = useState(quantity);

    useEffect(() => {
        designsService.getOne(designId)
            .then(result => {
                setDesign(result);
            })
    }, [designId]);

    const onChange = async (e) => {
        const value = Number(e.target.value)
        setItemQuantity(value);
        await onCartEdit(_id, value);
    };

    return (
        <tr>
            <th scope="row">
                <div className="d-flex align-items-center">
                    <img src={design.imageUrl} className="img-fluid rounded-3"
                        style={{ width: '120px' }} alt={design.name} />
                    <div className="flex-column ms-4">
                        <p className="mb-2">{design.name}</p>
                        <p className="mb-2">{category}</p>
                    </div>
                </div>
            </th>

            <td className="align-middle">
                <p className="mb-0" >{design.shape}</p>
            </td>

            <td className="align-middle">
                <div className="d-flex flex-row">
                    <input onChange={(e) => onChange(e)} type="number" value={itemQuantity} className="form-control" style={{ width: '70px' }} />
                </div>
            </td>

            <td className="align-middle">
                <p className="mb-0" >{designPrice * quantity}</p>
            </td>

            <td className="align-middle">
                <button onClick={() => onCartDelete(_id)} className="btn btn-success px-2">
                    <i className="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    );
};