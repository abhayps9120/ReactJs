import {render , screen} from "@testing-library/react"
import Contact from "../Contactus"
import "@testing-library/jest-dom";

test("Should Conatact us Render " , () => {
    render(<Contact/>);

    const input = screen.getAllByRole("textbox");
    //Assertion
    expect(input.length).not.toBe(3);
})

