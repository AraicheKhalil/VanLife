import { useNavigation , Form , redirect , useActionData, useLoaderData} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"
const warning = <FontAwesomeIcon icon={faTriangleExclamation} />
import { loginUser } from "../api"

export async function Action({request}){
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const data = await loginUser({ email, password })
    try {
        localStorage.setItem("loggedin", true)
        // console.log(data)
        return redirect("/host")
    } catch (err) {
        return err.message
    }
    
    // return null
}

export  function Loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export default function Login() {

    const errorMessage = useActionData()
    const navigation = useNavigation()
    const message = useLoaderData()
    console.log(message)

    return (
        <div className="login-container py-10  bg-orange-100">
            {message &&<div className="reminder text-gray-700 "><span className="text-red-600 mr-1">{warning}</span>{message}</div>}
            {errorMessage &&<div className="reminder text-gray-700 "><span className="text-red-600 mr-1">{warning}</span>{errorMessage}</div>}
            <h1 className="font-bold text-3xl leading-10 mt-4 mb-8">Sign in to your account</h1>
            <Form method="post" id="form"  className="login-form pb-4">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    
                />
                <button disabled={navigation.state === "submitting"}>
                    {navigation.state === "submitting" ? "Logging in..." : "Log in"}
                </button>
            </Form>
        </div>
    )

}