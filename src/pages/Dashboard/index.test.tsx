import { render, screen } from "@testing-library/react";
import Dashboard from "./index";
import { loadDataPokemon } from "../../services/PokeomServices";
import { faker } from "@faker-js/faker";
import { useNavigate } from "react-router-dom";

const mockFetchData = vi.fn(loadDataPokemon).mockImplementation(async () => {
  return [
    {
      id: 1,
      name: "Pikachu",
      image: faker.image.urlPlaceholder(),
      type: "Electric",
    },
    {
      id: 2,
      name: "Charmander",
      image: faker.image.urlPlaceholder(),
      type: "Fire",
    },
  ];
});

const navigateMock = vi.fn()

describe("Testa o componente Dashboard", () => {
  vi.mock('react-router-dom', () => {
    return{
      useNavigate(){
        return navigateMock;
      }
    }
  })
  test("Deve haver um título 'Dashboard'", async () => {
    render(<Dashboard loadDataPokemon={mockFetchData} />);
    const title = await screen.findByRole("heading");

    expect(title).toHaveTextContent("Dashboard");
  });

  test("Devem haver cards de pokemons", async () => {
    render(<Dashboard loadDataPokemon={mockFetchData} />);
    const item = await screen.findAllByRole("listitem");

    expect(item).toHaveLength(2);
  });

  test("Deve haver um pikachu na lista", async () => {
    render(<Dashboard loadDataPokemon={mockFetchData} />);

    const pikachu = await screen.findByText("Pikachu");
    expect(pikachu).toBeInTheDocument()
  })
});
