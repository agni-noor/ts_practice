interface TakePhoto{
    cameraMode:string
    filter:string
    burst:number
}
class Instagram implements TakePhoto{
    constructor(
        public cameraMode:string,
        public filter: string,
        public burst:number
    ){}
}
interface story{
    createStory():void
}
class Youtube implements TakePhoto,story{
    constructor(
        public cameraMode:string,
        public filter: string,
        public burst:number,
        public short:string
    ){}
    createStory(): void {
        console.log("Story created")
    }
}