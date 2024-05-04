import bcrypt from 'bcrypt'

export const encriptPassword = async(password:string) =>  {
    const hash = await bcrypt.hash(password,10)
    if(hash) return hash
}

export const comparePassword = async(password:string,hash:string) => {
    return await bcrypt.compare(password,hash)
}