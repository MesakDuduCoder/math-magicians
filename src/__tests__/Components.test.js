import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from '../components/Home';
import Header from "../components/Header";
import Calculator from "../components/Calculator";
import renderer from "react-test-renderer";
import Quotes from "../components/Quotes";
import Display from "../components/Display";
import { MemoryRouter } from "react-router-dom";

describe('Operations should be as below', () => {
    it("renders correctly", () => {
      const calulator = renderer
        .create(<Calculator/>)
        .toJSON();
      expect(calulator).toMatchSnapshot();
    });

    it("renders correctly", () => {
      const quotes = renderer
        .create(<Quotes/>)
        .toJSON();
      expect(quotes).toMatchSnapshot();
    });

    it("renders correctly", () => {
      const display = renderer
        .create(<Display/>)
        .toJSON();
      expect(display).toMatchSnapshot();
    });

    it("renders correctly", () => {
      const home = renderer
        .create(<Home/>)
        .toJSON();
      expect(home).toMatchSnapshot();
    });
    
    it("renders correctly", () => {
      const header = renderer
        .create(
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        )
        .toJSON();
      expect(header).toMatchSnapshot();
    });

    it("will test user interaction", () => {
      render(<Calculator/>);

      userEvent.click(screen.getByTestId("7"));
    
      expect(screen.getByTestId("display")).toHaveTextContent("7");

    });
})