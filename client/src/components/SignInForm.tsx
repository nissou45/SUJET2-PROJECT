import React, { useState } from "react";
import { Flex, Heading, Input, Link, Stack, Text } from "@chakra-ui/react";

export interface IData {
  nom: string,
  email: string,
  password_hash: string,
  vault_salt: string,
  role: string,
  is_verified: boolean,
  verify_token: string,
  reset_token: string,
  create_at: Date,
  update_at: Date
}

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("EMAIL =", email);
    console.log("PASSWORD =", password);

    try {
      const res: Response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();
      
      console.log("LOGIN RESPONSE 👉", data);
      
      if (res.ok) {
        localStorage.setItem("token", data.token);
        window.location.href = "/home";
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("FETCH ERROR", err);
    }
  };

  return (
    <Flex
      flexDir={"column"}
      justifyContent={"start"}
      alignItems={"center"}
      h={"610px"}
      w={"900px"}
      textAlign={"center"}
      bg={"#909E9660"}
      borderRadius={"20px"}
    >
      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"20px"}
        mt={"30px"}
      >
        <Heading fontSize={"64px"} fontWeight={"700"} mb={"5px"}>
          sign in
        </Heading>

        <Text color={"black"} fontSize={"24px"}>
          Don't have an account ?
          <Link href="/register" ml={"5px"} color={"black"}>
            Sign up
          </Link>
        </Text>

        <form onSubmit={handleSubmit}>
          <Stack gap={12}>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              h={"100px"}
              w={"690px"}
              color={"black"}
              fontSize={"32px"}
              bg={"#D9D9D9"}
              borderColor={"#D9D9D9"}
              borderRadius={"20px"}
              placeholder="email"
              _placeholder={{ textAlign: "center", color: "black" }}
            />

            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              h={"100px"}
              w={"690px"}
              color={"black"}
              fontSize={"32px"}
              bg={"#D9D9D9"}
              borderColor={"#D9D9D9"}
              borderRadius={"20px"}
              placeholder="mot de passe"
              _placeholder={{ textAlign: "center", color: "black" }}
            />
          </Stack>

          <button type="submit" hidden />
        </form>
      </Flex>
    </Flex>
  );
};

export default SignInForm;
