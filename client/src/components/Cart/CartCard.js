import { useContext, useEffect, useState } from "react";

import { CartContext } from "../../contexts/CartContext";
import * as designsService from "../../services/designsService";

export const CartCard = ({
    _id,
    designId,
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

    //TODO: Try to make it wotk, now its not
    const onChange = async () => {
        await onCartEdit(_id, itemQuantity);
    }

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
                    {/* //TODO: Implement quantity change and when adding the same item to + the quantity, not creating new */}
                    <button onClick={() => setItemQuantity(itemQuantity - 1)} className="btn btn-success px-2">
                        <i className="fas fa-minus"></i>
                    </button>

                    <input onChange={onChange} min="0" name="quantity" value={itemQuantity} className="form-control" style={{ width: '50px' }} />

                    <button onClick={() => setItemQuantity(itemQuantity + 1)} className="btn btn-success px-2">
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </td>

            <td className="align-middle">
                <p className="mb-0" >{design.price}</p>
            </td>

            {/* TODO: Maybe add remove button for a item */}
            <td className="align-middle">
                <button onClick={() => onCartDelete(_id)} className="btn btn-success px-2">
                    <i className="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    );
};