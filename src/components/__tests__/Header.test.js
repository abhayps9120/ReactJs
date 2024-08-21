import { fireEvent , render ,screen} from "@testing-library/react"
import Header from "../Header"
import { appStore } from "../../../utils/appStore";
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should Load Header Comp with a Login Button" , () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    )

    const loginBtn = screen.getByRole("button" , {name : "Login"});
    expect(loginBtn).toBeInTheDocument();
})

it("Should Load Header Comp with a Login Button" , () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    )

    const login = screen.getByRole("button" , {name : "Login"});
    fireEvent.click(login)
    const logout = screen.getByText("Logout");
    expect(logout).toBeInTheDocument();
})