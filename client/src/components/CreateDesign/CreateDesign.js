import { useState } from "react"

export const CreateDesign = ({
    onCreateDesignSubmit,
}) => {
    const [values, setValues] = useState({
        name: '',
        price: '',
        imageUrl: '',
        shape: '',
        description: '',
    });

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onCreateDesignSubmit(values);
    };

    return (
        <section className="section py-5">
            <div className="row py-5">
                <form id="create" className="col-md-9 m-auto" onSubmit={onSubmit}>
                    <div className="container">
                        <h1 className="h1">Create Design</h1>

                        <div className="col py-3">
                            <div className="form-group mb-3">
                                <label htmlFor="design-name">Name:</label>
                                <input onChange={onChangeHandler} className="form-control mt-2" type="text" name="name" placeholder="Enter design name..."/>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="price">Price:</label>
                                <input onChange={onChangeHandler} className="form-control mt-2" type="number" name="price" min="1" placeholder="10 BGN"/>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="design-img">Image:</label>
                                <input onChange={onChangeHandler} className="form-control mt-2" type="text" name="imageUrl" placeholder="Upload a photo..."/>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="design-shape">Shape:</label>
                                <input onChange={onChangeHandler} className="form-control mt-2" type="text" name="shape" placeholder="Enter design shape..."/>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="description">Description:</label>
                                <textarea onChange={onChangeHandler} className="form-control mt-2" name="description"></textarea>
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