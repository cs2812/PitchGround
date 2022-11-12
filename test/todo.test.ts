import request from "supertest"
import {app} from "../src/index"
import {test , expect} from "@jest/globals"

test("Test add todo in data",async()=>{
    await request(app).post("/todo")
    .send({
        todo:"test",
        status:false
    })
    .expect(201)
})

test("Test todo get", async () => {
    await request(app).get("/todo")
    .expect(201)
  });