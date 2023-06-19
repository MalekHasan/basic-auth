const basic=require("../src/auth/middleware/basic")
describe("Testing Server bsaic auth",()=>{
    let req={
        headers: {
        authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=', // base64 encoded "username:password"
      },
      body: {},
    };
    let res={};
    let next=jest.fn();
    test("Test next",()=>{
        basic(req,res,next);
        expect(next).toHaveBeenCalled()
    })
})
