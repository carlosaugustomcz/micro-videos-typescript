import InvaliUuidError from "../../../errors/invalid-uuid-erro";
import UniqueEntityId from "../unique-entity-id-vo"

describe("UniqueEntityId Unit test", () =>{

    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate'); // veriica se passou pela class

    it("should throw error when uuis is invalid", () =>{
        // const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate') // veriica se passou pela class
        expect(() => new UniqueEntityId("fake id")).toThrow(new InvaliUuidError());
        expect(validateSpy).toHaveBeenCalled(); // testa quantas vezes foi passado pela função
    });

    it("should accept a uuid passed in constructor", () =>{
        const uuid = "9c6e4670-84b1-4975-8ba2-f0f1a6a05b5b";
        const vo = new UniqueEntityId(uuid); 
        // const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate') // veriica se passou pela class
        expect(vo.value).toBe(uuid);
        expect(validateSpy).toHaveBeenCalled(); // testa quantas vezes foi passado pela função
    });

    it("should accept a uuid null in constructor", () =>{
        const vo = new UniqueEntityId(); 
        // const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate') // veriica se passou pela class
        expect(vo.value).toBeTruthy;
        expect(validateSpy).toHaveBeenCalled(); // testa quantas vezes foi passado pela função

    });
});