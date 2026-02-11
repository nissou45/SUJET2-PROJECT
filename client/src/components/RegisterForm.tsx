import { Button, Flex, Input, Stack } from "@chakra-ui/react"
import { useState } from "react"

export type IRegisterFormProps = unknown

const RegisterForm: React.FC<IRegisterFormProps> = () => {
    const [nom, setNom] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [verifPassword, setVerifPassword] = useState<string>("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (password === verifPassword) {
            try {
                const res: Response = await fetch("http://localhost:3000/users/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        nom,
                        email,
                        password
                    })
                })
    
                const data = await res.json()
                
                if (res.ok) {
                    localStorage.setItem("token", data.token)
                    window.location.href = "/home"
                } else {
                    alert(data.message)
                }
            } catch (err) {
                console.error("FETCH ERROR", err);
            }
        } else {
            alert("Vos mots de passes ne corresspondent pas")
            setPassword('')
            setVerifPassword('')
        }
    }

    return (
        <Flex justifyContent={"center"} alignItems={"center"}
        h={"700px"} w={"850px"}
        textAlign={"center"}
        bg={"#909E9660"}
        borderRadius={"20px"}>            
            <form onSubmit={handleSubmit}>
                <Stack gap={10}>
                    <Input type="text" value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    h={"100px"} w={"690px"}
                    color={"black"} fontSize={"32px"}
                    bg={"#D9D9D9"}
                    borderColor={"#D9D9D9"} borderRadius={"20px"}
                    placeholder="nom complet"
                    _placeholder={{
                        textAlign: "center",
                        color: "black"
                    }}/>
                    <Input type="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    h={"100px"} w={"690px"}
                    color={"black"} fontSize={"32px"}
                    bg={"#D9D9D9"}
                    borderColor={"#D9D9D9"} borderRadius={"20px"}
                    placeholder="email"
                    _placeholder={{
                        textAlign: "center",
                        color: "black"
                    }}/>
                    <Input type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    h={"100px"} w={"690px"}
                    color={"black"} fontSize={"32px"}
                    bg={"#D9D9D9"}
                    borderColor={"#D9D9D9"} borderRadius={"20px"}
                    placeholder="mot de passe"
                    _placeholder={{
                        textAlign: "center",
                        color: "black"
                    }}/>
                    <Input type="password" value={verifPassword}
                    onChange={(e) => setVerifPassword(e.target.value)}
                    h={"100px"} w={"690px"}
                    color={"black"} fontSize={"32px"}
                    bg={"#D9D9D9"}
                    borderColor={"#D9D9D9"} borderRadius={"20px"}
                    placeholder="confirmer mot de passe"
                    _placeholder={{
                        textAlign: "center",
                        color: "black"
                    }}/>
                    <Button type="submit"
                    fontSize={"40px"} fontWeight={"700"}
                    bg={"transparent"}>
                        Create account
                    </Button>
                </Stack>
            </form>
        </Flex>
    )
}

export default RegisterForm