import Page from "@/app/page";
import { render } from "@testing-library/react";

describe("Page component", () => {
  it("renders LandingPage and HomeSection components", () => {
    const { getByText } = render(<Page />);

    expect(getByText("Content of LandingPage")).toBeDefined();
    expect(getByText("Content of HomeSection")).toBeDefined();
  });
});
