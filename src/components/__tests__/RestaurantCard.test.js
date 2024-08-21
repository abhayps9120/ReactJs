import {render , screen} from "@testing-library/react"
import Rest from "../Rest"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

test("Should Render RestCARD COMP WITH PROPS dATA" , () => {
    render(<Rest resData={MOCK_DATA}/>)

    const check = screen.getByText("Chinese Wok")
     expect(check).toBeInTheDocument();
})