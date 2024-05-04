import ErrorType from "./Error";

class Verify {
  async isTrue(option: Boolean, error: string, code?: number) {
    if (option === false) {
      const errorType = new ErrorType(error, code ? code : 404)
      throw new Error(errorType.string())
    }
  }

}

export default Verify