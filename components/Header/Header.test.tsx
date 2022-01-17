import { render } from "@testing-library/react";

import Header from "./Header";

it("should display text", () => {
  const { container } = render(<Header />);
  expect(container.textContent).toBe("Travel Advisor Search");
});
