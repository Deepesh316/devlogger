import Logger from "./index";

describe("Logger", () => {
  it("has info method", () => {
    expect(() => {
      Logger.info("info");
    }).not.toThrow();
  });

  it("has debug method", () => {
    expect(() => {
      Logger.debug("debug");
    }).not.toThrow();
  });

  it("has trace method", () => {
    expect(() => {
      Logger.trace("trace");
    }).not.toThrow();
  });
  it("has userInfo method", () => {
    expect(() => {
      Logger.userInfo("userInfo");
    }).not.toThrow();
  });

  it("has warn method", () => {
    expect(() => {
      Logger.warn("warn");
    }).not.toThrow();
  });

  it("has fatal method", () => {
    expect(() => {
      Logger.fatal("fatal");
    }).not.toThrow();
  });
});
