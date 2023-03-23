import { useEffect, useState } from "react";

import { useService } from "../../hooks/useService";
import { designsServiceFactory } from "../../services/designsService";

export const CartCard = ({
    designId,
    quantity,
    category,
}) => {
    const [design, setDesign] = useState({});
    const designsService = useService(designsServiceFactory);

    useEffect(() => {
        designsService.getOne(designId)
            .then(result => {
                setDesign(result);
            })
    }, [designId]);

    const onChangeHandler = () => {

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
                    <button className="btn btn-success px-2">
                        <i className="fas fa-minus"></i>
                    </button>

                    <input onChange={onChangeHandler} min="0" name="quantity" value={quantity} className="form-control" style={{ width: '50px' }} />

                    <button className="btn btn-success px-2">
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </td>

            <td className="align-middle">
                <p className="mb-0" >{design.price}</p>
            </td>
        </tr>
    );
};