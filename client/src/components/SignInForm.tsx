import { Flex, Heading, Input, Link, Stack, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export type ISignInFormProps = unknown

const SignInForm: React.FC<ISignInFormProps> = () => {
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        navigate("/home")
    }

    return (
        <Flex flexDir={"column"} justifyContent={"start"} alignItems={"center"}
        h={"610px"} w={"900px"}
        textAlign={"center"}
        bg={"#909E9660"}
        borderRadius={"20px"}>
            <Flex flexDir={"column"} justifyContent={"center"} alignItems={"center"} gap={"20px"}
            mt={"30px"}>
                <Heading fontSize={"64px"} fontWeight={"700"} mb={"5px"}>sign in</Heading>
                <Text color={"black"} fontSize={"24px"}>
                    Don't have an account ?
                    <Link href="/register"
                    ml={"5px"}
                    color={"black"}>
                        Sign up
                    </Link>
                </Text>
                <form onSubmit={handleSubmit}>
                    <Stack gap={12}>
                            <Input type="email"
                            h={"100px"} w={"690px"}
                            color={"black"} fontSize={"32px"}
                            bg={"#D9D9D9"}
                            borderColor={"#D9D9D9"} borderRadius={"20px"}
                            placeholder="email"
                            _placeholder={{
                                textAlign: "center",
                                color: "black"
                            }}/>
                            <Input type="password"
                            h={"100px"} w={"690px"}
                            color={"black"} fontSize={"32px"}
                            bg={"#D9D9D9"}
                            borderColor={"#D9D9D9"} borderRadius={"20px"}
                            placeholder="mot de passe"
                            _placeholder={{
                                textAlign: "center",
                                color: "black"
                            }}/>
                    </Stack>
                    <button type="submit" style={{display: "none"}}></button>
                </form>
            </Flex>
        </Flex>
    )
}

export default SignInForm