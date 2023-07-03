import UniqueEntityId from '../../../@seedwork/domain/value-objects/unique-entity-id-vo';

export type CategoryProperties = {
name: string;
description?: string;
is_active?: boolean;
create_at?: Date;
}


export class Category {
    public readonly id: UniqueEntityId;

    constructor(public readonly props: CategoryProperties, id?: UniqueEntityId) {
        this.id = id || new UniqueEntityId();
        this.props.description = this.props.description;
        this.props.is_active = this.props.is_active ?? true;
        this.props.create_at = this.props.create_at ?? new Date();



    }

    get name(): string{
        return this.props.name;
    } 

    get description(): string | undefined{
        return this.props.description;
    } 

    private set description(value: string){
        this.props.description = value ?? null;
    }

    get is_active(): boolean | undefined{
        return this.props.is_active;
    }

    private set is_active(value: boolean){
        this.props.is_active = value ?? Boolean;
    }

    get create_at(): Date | undefined{
        return this.props.create_at;
    }

    private set create_at(value: Date){
        this.props.create_at = value ?? new Date();
    }

}