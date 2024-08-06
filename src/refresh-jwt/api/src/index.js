const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
const { expressjwt } = require("express-jwt");

const secret = "secret";
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(
  expressjwt({ secret: secret, algorithms: ["HS256"] }).unless({
    path: ["/api/login"],
  })
);

app.post("/api/login", function (req, res) {
  const userInfo = req.body;
  if (userInfo.username !== "admin" || userInfo.password !== "123456") {
    return res.send({
      status: 400,
      message: "Login succeeded",
    });
  }

  const token = jwt.sign({ username: userInfo.username }, secret, {
    expiresIn: "10s",
  });
  const refresh_token = jwt.sign({ username: userInfo.username }, secret, {
    expiresIn: "7d",
  });

  res.send({
    status: 200,
    message: "Login succeeded",
    token,
    refresh_token,
  });
});

app.get("/api/refresh-token", (req, res) => {
  const { username } = jwt.verify(
    req.headers.authorization.split(" ")[1],
    secret
  );

  const token = jwt.sign({ username }, secret, {
    expiresIn: "10s",
  });
  const refresh_token = jwt.sign({ username }, secret, {
    expiresIn: "7d",
  });
  res.send({
    status: 200,
    message: "Refresh token successfully",
    token,
    refresh_token,
  });
});

app.get("/api/list", (req, res) => {
  res.send({
    list: [
      {
        goods: "meat",
        price: 12,
      },
    ],
    total: 1,
  });
});

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.send({
      status: 401,
      message: "Invalid token",
    });
  }
  res.send({ status: 500, message: "unknown error" });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
});
