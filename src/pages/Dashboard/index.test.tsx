import { render, screen } from "@testing-library/react"
import Dashboard from "./index"

describe("Testa o componente Dashboard", () => {
    test("Deve haver um título 'Dashboard'", async () => {
        render(<Dashboard />)
        const title = await screen.findByRole("heading");

        expect(title).toHaveTextContent("Dashboard");
    })
})