import Base from "../../../src/scripts/pages/first/Base";
// import Base from "@src/pages/first/Base";

const base = new Base("a");

test("log name", () => {
    expect(base.log()).toBe("a");
});
