import { Button, Flex, Input, Stack } from "@chakra-ui/react"

export type IRegisterFormProps = unknown

const RegisterForm: React.FC<IRegisterFormProps> = () => {
    return (
        <Flex justifyContent={"center"} alignItems={"center"}
        h={"700px"} w={"850px"}
        textAlign={"center"}
        bg={"#909E9660"}
        borderRadius={"20px"}>            
            <form action={"/home"} method="POST">
                <Stack gap={10}>
                    <Input 
                    h={"100px"} w={"690px"}
                    color={"black"} fontSize={"32px"}
                    bg={"#D9D9D9"}
                    borderColor={"#D9D9D9"} borderRadius={"20px"}
                    placeholder="nom complet"
                    _placeholder={{
                        textAlign: "center",
                        color: "black"
                    }}/>
                    <Input 
                    h={"100px"} w={"690px"}
                    color={"black"} fontSize={"32px"}
                    bg={"#D9D9D9"}
                    borderColor={"#D9D9D9"} borderRadius={"20px"}
                    placeholder="email"
                    _placeholder={{
                        textAlign: "center",
                        color: "black"
                    }}/>
                    <Input 
                    h={"100px"} w={"690px"}
                    color={"black"} fontSize={"32px"}
                    bg={"#D9D9D9"}
                    borderColor={"#D9D9D9"} borderRadius={"20px"}
                    placeholder="mot de passe"
                    _placeholder={{
                        textAlign: "center",
                        color: "black"
                    }}/>
                    <Input 
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