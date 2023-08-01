export default class Base {
    private readonly name;
    constructor(name: string) {
        this.name = name;
    }
    public log() {
        return this.name;
    }
}
