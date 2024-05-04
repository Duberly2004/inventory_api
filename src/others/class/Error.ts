class ErrorType{
    message:string
    statusCode:number
    constructor(message:string,statusCode:number){
        this.message = message
        this.statusCode = statusCode
    }
    string(){
        return JSON.stringify({message:this.message,statusCode:this.statusCode})
    }
    json(){
        return JSON.parse(this.string())
    }
}
export default ErrorType