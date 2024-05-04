import { Response, Request } from "express";

export default async function returnError(req: Request, res: Response, error: any) {
    if (error) {
        if (error && error.message) {
            try {
                const errorJson = JSON.parse(error.message);
                if (errorJson.statusCode) {
                    return res.status(errorJson.statusCode).json({ error: errorJson.message });
                }
            } catch (e) {
                return res.sendStatus(500);
            }
        }
        return res.sendStatus(500);
    }
}

export const getMsgZodError=(field:String)=> `El campo [ ${field} ] es requerido`