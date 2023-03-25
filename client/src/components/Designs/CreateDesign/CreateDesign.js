import { useContext } from "react"

import { DesignsContext } from "../../../contexts/DesignsContext";
import { useForm } from "../../../hooks/useForm";

export const CreateDesign = () => {
    const { onCreateDesignSubmit } = useContext(DesignsContext);
    const {values, changeHandler, onSubmit} = useForm({
        name: '',
        price: '',
        imageUrl: '',
        shape: '',
        description: '',
    }, onCreateDesignSubmit);

    return (
        <section className="section py-5">
            <div className="row py-5">
                <form id="create" className="col-md-9 m-auto" onSubmit={onSubmit}>
                    <div className="container">
                        <h1 className="h1">Create Design</h1>

                        <div className="col py-3">
                            <div className="form-group mb-3">
                                <label htmlFor="design-name">Name:</label>
                                <input onChange={changeHandler} value={values.name} className="form-control mt-2" type="text" name="name" placeholder="Enter design name..." />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="price">Price:</label>
                                <input onChange={changeHandler} value={values.price} className="form-control mt-2" type="number" name="price" min="1" placeholder="10 BGN" />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="design-img">Image:</label>
                                <input onChange={changeHandler} value={values.imageUrl} className="form-control mt-2" type="text" name="imageUrl" placeholder="Upload a photo..." />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="design-shape">Shape:</label>
                                <input onChange={changeHandler} value={values.shape} className="form-control mt-2" type="text" name="shape" placeholder="Enter design shape..." />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="description">Description:</label>
                                <textarea onChange={changeHandler} value={values.description} className="form-control mt-2" name="description"></textarea>
                            </div>

                        </div>

                        <div className="col">
                            <button className="btn btn-success btn-lg px-3" type="submit">Create Design</button>
                        </div>

                    </div>
                </form>
            </div>
        </section>
    );
};