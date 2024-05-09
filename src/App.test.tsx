import { render, screen } from "@testing-library/react"
import App from "./App"

describe("Testing App component", () => {
    test("Must have a title in the center", async () => {
        render(<App />)
        const title = await screen.findByRole('heading')

        expect(title).toBeInTheDocument();
    })
})