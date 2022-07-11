import React from "react";
import Home from "../pages/Home/Home";
import OurGrafs from "../pages/OurGrads/OurGrads";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("This suit is to test the Body component", () => {
  test("Snapshot of Body", () => {
    const { asFragment } = render(<Home title="hello world" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("finding title", () => {
    const { asFragment } = render(<OurGrafs year="2022" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
