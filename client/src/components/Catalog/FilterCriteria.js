export const FilterCriteria = () => {
    return (
        <div className="row">
                            
            <div className="col-md-6 pb-4">
                <div className="d-flex">
                    {/* TODO: Implement filter criteria */}
                    <select className="form-control">
                        <option>A to Z</option>
                        <option>Price</option>
                        <option>Newest</option>
                    </select>
                </div>
            </div>
        </div>
    );
};