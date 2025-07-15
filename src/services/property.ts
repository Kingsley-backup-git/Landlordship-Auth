import { InviteProps } from "@/types/tenant/props"
import { userInstance } from "@/utils/axios"
type PaginatedPropertyResponse = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[]; // or a more specific type like `Property[]` if you have one
  hasMore: boolean;
}

export class PropertyService {

createProperty = async (values:FormData)=> {
try {
const res = await userInstance.post("api/property/create",values, {headers : {'Content-Type' : "multipart/form-data"}})
console.log(res)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (error:any) {
    console.log(error?.error)
throw Error(error?.error)
}
}

getAllProperties = async()=> {
    try {
 const res = await userInstance.get("api/property/all")

    return res?.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        throw Error(error?.error)
    }
   
}

getPaginatedProperties = async(page:number): Promise<PaginatedPropertyResponse>=> {
    try {
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 const res = await userInstance.get<PaginatedPropertyResponse>(`api/property/search?page=${page}&limit=${5}`)

    return res as unknown as PaginatedPropertyResponse
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        throw Error(error?.error)
    }
   
}

sendInvite = async(values : InviteProps)=> {
    try {
 const res = await userInstance.post(`api/tenant/invite/${values.id}`, {email : values.email})
console.log(res)
    return res
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        throw Error(error?.error)
    }
}
}