"use strict"
const {db}=require("../src/auth/models/index")
const {app}=require("../src/server")
const supertest=require("supertest")
const request=supertest(app)

beforeAll(async () => {
    await db.sync();
});
describe("Testing Server signup endpoint",()=>{
    test("Test Wrong path ",async ()=>{
       const result=await request.get("/sign");
       expect(result.status).toBe(404)
    })
    test("Test signup ",async ()=>{
        const result=await request.post("/signup").send({
            username: 'malek',
            password: '1234'
        });
        expect(result.status).toBe(201);
     });
     test("Test signup with duplicate data",async ()=>{
        const result=(await request.post("/signup")).send({
            username: 'malek',
            password: '1233'
        });
        expect(result.status).toBe(201)})
 

})
describe("Testing Server signin endpoint",()=>{
    test("Test Wrong path ",async ()=>{
       const result=await request.get("/sign");
       expect(result.status).toBe(404)
    })
    test("Test signin ",async()=>{
        const result=await request.post("/signin").send()
        expect(result.status).toBe(201);
     });
     test("Test signin with wrong data",async ()=>{
        const result=(await request.post("/signin"))
        expect(result.status).toBe(200)
     })
})


afterAll(async () => {
    await db.drop();
});