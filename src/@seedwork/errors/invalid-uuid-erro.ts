
export default class InvaliUuidError extends Error {
    constructor( message?: string) {
        super( message || "ID must be a valid UUID"  );
        this.name = "InvaliUuidError";


    }
}