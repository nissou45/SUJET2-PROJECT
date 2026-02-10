import { Box, Text, Heading } from "@chakra-ui/react"

export type IHomePageProps = unknown

const HomePage: React.FC<IHomePageProps> = () => {
    return (
        <>
            <Box id="Head" display={"block"}
            textAlign={"center"}>
                <Heading size={"2xl"}>
                    Sujet2
                </Heading>
                <Text as={"p"}
                fontSize={"16px"} color={"#b4b4b4"}>
                    Hackathon équipe 1
                </Text>
            </Box>
            <Box id="homeComposent"></Box>
        </>
    )
}

export default HomePage