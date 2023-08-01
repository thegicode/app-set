import Base from "../../scripts/first/Base";

const base = new Base("a");

test("log name", () => {
    expect(base.log()).toBe("a");
});
