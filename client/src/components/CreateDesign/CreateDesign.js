export const CreateDesign = () => {
    return (
        <section className="section py-5">
            <div className="row py-5">
                <form id="create" className="col-md-9 m-auto">
                    <div className="container">
                        <h1 className="h1">Create Design</h1>

                        <div className="col py-3">
                            {/* TODO: Change input fields */}
                            <div className="form-group mb-3">
                                <label htmlFor="leg-title">Legendary title:</label>
                                <input className="form-control mt-2" type="text" name="title" placeholder="Enter game title..."/>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="category">Category:</label>
                                <input className="form-control mt-2" type="text" name="category" placeholder="Enter game category..."/>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="levels">MaxLevel:</label>
                                <input className="form-control mt-2" type="number" name="maxLevel" min="1" placeholder="1"/>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="game-img">Image:</label>
                                <input className="form-control mt-2" type="text" name="imageUrl" placeholder="Upload a photo..."/>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="summary">Summary:</label>
                                <textarea className="form-control mt-2" name="summary"></textarea>
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