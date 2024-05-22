
class ClsTask {
    id: string
    text: string
    done: boolean

    constructor (id: string = "", text: string = "", done: boolean = false) {
        this.id = id
        this.text = text
        this.done = done
    }
}