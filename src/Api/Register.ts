
interface RegisterProps{
    login: String;
    password: String;
    email: String;
}
const Register = ({ login, password ,email}: RegisterProps): boolean => {
    // add register logic here
    console.log(login , password, email);

    return true;
}
export default Register;