import { Category } from "./category";

describe("Category Tests", () => {

    test("category name", () => {

        const category = new Category("Movie");
        expect(category.name).toBe("Movie1");
    })
});

