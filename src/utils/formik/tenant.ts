import { InviteProps } from "@/types/tenant/props";
import { useFormik } from "formik";
import * as Yup from 'yup';

export default function Validator(doSendInvite: (values: InviteProps)=> void, propertyId:string) {
const formik = useFormik({
    initialValues : {
        email: ""
    },
    validationSchema : Yup.object().shape({
        email: Yup.string().required("Email is required").email("Must be an email")
    }),
onSubmit : (values)=> {
doSendInvite({email : values.email, id : propertyId})
}
})

return {
    formik
}
}
