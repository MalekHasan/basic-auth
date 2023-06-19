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
            password: '123'
        });
        expect(result.status).toBe(201);
     }); 
})
describe("Testing Server signin endpoint",()=>{
    // let req={
    //     headers: {
    //     authorization: 'Basic bWFsZWs6MTIz', // base64 encoded "username:password"
    //   },
    //   body: {},
    // }
    test("Test Wrong path ",async ()=>{
       const result=await request.post("/sign");
       expect(result.status).toBe(404)
    })
        // test("Test sign in",async ()=>{
        //     const result =await request.post("/signin").send({
        //         username:"malek",
        //         password:"123"
        //     })
        //     expect(result.status).toBe(200)

        // })

})


afterAll(async () => {
    await db.drop();
});