import { expect } from "chai";
import { TSOR_SLICE } from "../src/TSOR_SLICE";

import { ExampleItem1Type } from "./TestTypes";

describe("TSOR Store", () => {
  it("can create an slice", () => {
    const routeKey = "exampleItem" as const;
    const slice = new TSOR_SLICE<typeof routeKey, ExampleItem1Type, any>(
      "exampleItem"
    );
    expect(slice.routeKey).to.equal(routeKey);
    expect(slice.selectors.selectAll).to.be.a("function");
    expect(slice.reducer).to.be.a("function");
  });
});
