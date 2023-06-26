import { Category } from "./category";

describe("Category Unit Test", () => {

    test("Constructor of Category", () => {
        const create_at = new Date();
        let category = new Category({
            name: "Movie",
            description: "some description",
            is_active: true,
            create_at,

        });
        expect(category.props).toStrictEqual({
            name: "Movie",
            description: "some description",
            is_active: true,
            create_at,

        });

    })
});

