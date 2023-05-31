import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import Details from "./Details"
import { AuthContext } from "../../../contexts/AuthContext";
import { LovesContext } from "../../../contexts/LovesContext";
import { DesignsContext } from "../../../contexts/DesignsContext";

const design = {
    "_id": "design_1",
    "name": "Lynx",
    "price": 15,
    "imageUrl": "/assets/img/designs/design_1.jpg",
    "shape": "circle",
    "description": "Czech Republic proposal; a fictional substance in the novel Továrna na absolutno by Karel Čapek.", 
    "_ownerId": "60f0cf0b-34b0-4abd-9769-8c42f830dffc",
    "_createdOn": 1679590793539 
};

// global.fetch = jest.fn(() => 
//     Promise.resolve({
//         json: () => Promise.resolve(design)
//     })
// );

beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(() => 
        Promise.resolve({
            json: () => Promise.resolve(design)
        })
    );
});

it('Should render fetched design details', async () => {
    render(
        <AuthContext.Provider value={{isAdmin: false, isAuthenticated: false, userId: null}}>
            <DesignsContext.Provider value={{onDeleteClick: "nothing"}}>
                <LovesContext.Provider value={[]}>
                    <Details />
                </LovesContext.Provider>
            </DesignsContext.Provider>
        </AuthContext.Provider>
    );

    const element = await screen.findByText(design.name);

    expect(element).toBeInTheDocument();
});
