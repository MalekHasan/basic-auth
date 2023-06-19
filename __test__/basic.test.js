const basic=require("../src/auth/middleware/basic")
describe("Testing Server bsaic auth",()=>{
    let req={};
    let res={};
    let next=jest.fn();
    test("Test next",()=>{
        basic(req,res,next);
        expect(next).toHaveBeenCalled()
    })
})