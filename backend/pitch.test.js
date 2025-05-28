// __tests__/auth.test.js
const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("./app");
const User = require("./models/User");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await User.deleteMany();
});

describe("Auth Routes", () => {
  it("should register a new user", async () => {
    const res = await request(app)
      .post("/api/auth/signup")
      .send({
        username: "kabir123",
        displayName: "Kabir Dharshaan",
        email: "kabir@example.com",
        password: "securepassword",
        role: "pitcher"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("User created successfully");
  });

  it("should not register with missing fields", async () => {
    const res = await request(app).post("/api/auth/signup").send({
      username: "kabir123"
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("All fields are required");
  });

  it("should login an existing user", async () => {
    const hashedPassword = await require("bcryptjs").hash("securepassword", 10);
    await User.create({
      username: "kabir123",
      displayName: "Kabir Dharshaan",
      email: "kabir@example.com",
      password: hashedPassword,
      role: "pitcher"
    });

    const res = await request(app).post("/api/auth/login").send({
      email: "kabir@example.com",
      password: "securepassword"
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Login successful");
    expect(res.body.user).toHaveProperty("email", "kabir@example.com");
  });

  it("should return error for invalid login", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: "nonexistent@example.com",
      password: "wrong"
    });

    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe("User not found");
  });
});

it("should return error for incorrect password", async () => {
  const hashedPassword = await require("bcryptjs").hash("securepassword", 10);
  await User.create({
    username: "kabir123",
    displayName: "Kabir Dharshaan",
    email: "kabir@example.com",
    password: hashedPassword,
    role: "pitcher"
  });

  const res = await request(app).post("/api/auth/login").send({
    email: "kabir@example.com",
    password: "wrongpassword"
  });

  expect(res.statusCode).toBe(400);
  expect(res.body.message).toBe("Invalid credentials");
});
