import Body from "../Body"
import { render , screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import MOCK_DATA from "../mocks/mockResList.json"
import { BrowserRouter } from "react-router-dom";
import { fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("should render the Search in Body Comp" , async () => {

    await act(async () => (render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>
))
    );

    const searchbtn= screen.getByRole("button" , {name : "Search"})

    const searchInput = screen.getByTestId("9528")

    fireEvent.change(searchInput , { target : { value : "burger"}});

    fireEvent.click(searchbtn);
    
    const cards = screen.getAllByTestId("resCard")

    expect(cards.length).toBe(1);

    expect(searchbtn).toBeInTheDocument();
})

it("should render the top rated on Body Comp" , async () => {

    await act(async () => (render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>
))
    );

    

    const toprated = screen.getByRole("button" , {name : "Top Rated Restauants"})
    
    expect(toprated).toBeInTheDocument();

    fireEvent.click(toprated);

    const cardbyFilter = screen.getAllByTestId("resCard")

    expect(cardbyFilter.length).toBe(3);
    

 
})