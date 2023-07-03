import UniqueEntityId from "../../../@seedwork/domain/value-objects/unique-entity-id-vo";
import { Category, CategoryProperties } from "./category";

describe("Category Unit Test", () => {

    test("id field", () => {
        type categoryData = {props: CategoryProperties; id?: UniqueEntityId}; 
        const data: categoryData[] = [
           {props: {name: "movie"}},
           {props: {name: "movie"}, id: null },
           {props: {name: "movie"}, id: undefined },
           {props: {name: "movie"}, id: new UniqueEntityId()}, 
        ];
        data.forEach(i => {
            const category = new Category(i.props, i.id as any);
            expect(category.id).not.toBeNull;
            expect(category.id).toBeInstanceOf(UniqueEntityId);

        });

    });
    

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

        category = new Category({
            name: "Movie",
            description: "description",
        });
        expect(category.props).toMatchObject({
            name: "Movie",
            description: "description"

        });

        category = new Category({
            name: "Movie",
            is_active: false,
        })
        expect(category.props).toMatchObject({
            name: "Movie",
            is_active: false,
        })

        
        category = new Category({
            name: "Movie",
            create_at
        })
        expect(category.props).toMatchObject({
            name: "Movie",
            create_at
        })

    })
});

