const request = require("supertest");
const app = require("../app");

describe("Hello DevOps API", () => {
    test("GET / should return Hello DevOps message", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toContain("Hello DevOps!");
    });
});