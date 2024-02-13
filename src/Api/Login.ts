
interface LogingProps{
    login: String;
    password: String;
}
const Login = ({ login, password }: LogingProps): boolean => {
        // add login logic here
    console.log(login , password);

    return true;
}
export default Login;