import { render } from "@testing-library/react";

import MyApp from "../pages/_app";
import Home from "../pages/";

it("should render app", () => {
  const { container } = render(
    <MyApp pageProps={{}} Component={Home} router={{} as any} />
  );

  expect(container.firstChild).toBeTruthy();
});
