function checkLogin(username, password) {
    return username === "admin" && password === "1234";
}

if (typeof document !== "undefined") {
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const result = document.getElementById("result");

        if (checkLogin(username, password)) {
            result.textContent = "Đăng nhập thành công!";
        } else {
            result.textContent = "Sai tài khoản hoặc mật khẩu!";
        }
    });
}

module.exports = { checkLogin };
