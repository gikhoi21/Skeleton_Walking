const { checkLogin } = require("./login");

test("Đăng nhập đúng", () => {
    expect(checkLogin("admin", "123")).toBe(true);
});

test("Sai username", () => {
    expect(checkLogin("user", "123")).toBe(false);
});

test("Sai password", () => {
    expect(checkLogin("admin", "456")).toBe(false);
});

test("Sai cả username và password", () => {
    expect(checkLogin("user", "456")).toBe(false);
});
