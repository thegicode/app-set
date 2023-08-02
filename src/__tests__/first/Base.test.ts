import Base from "../../scripts/pages/first/Base";

const base = new Base("a");

test("log name", () => {
    expect(base.log()).toBe("a");
});
