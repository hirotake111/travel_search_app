import { render } from "@testing-library/react";
import LeftColumn from "./LeftColumn";

// mock components
jest.mock("../search/Filter/Filter");
jest.mock("../List/List");

it("should render Filter and list", () => {
  const { getByLabelText } = render(<LeftColumn />);
  expect(getByLabelText("filter")).toBeTruthy();
});
