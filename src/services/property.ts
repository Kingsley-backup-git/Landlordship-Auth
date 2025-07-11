import { userInstance } from "@/utils/axios"

export class PropertyService {

createProperty = async (values:FormData)=> {
try {
const res = await userInstance.post("api/property/create",values, {headers : {'Content-Type' : "multipart/form-data"}})
console.log(res)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (error:any) {
throw Error(error?.error)
}
}
}