import { Request, Response } from "express";
import { CreateUserDto } from "../dto/CreateUser.dto";
import { User } from "../types/user";

export function getUsers(request: Request, response: Response) {
  console.log("Aqui");

  response.send({ users: [{ name: "breno" }] });
}

export function getUserById(request: Request, response: Response) {
  response.send({ name: "breno", id: request.params.id });
}

export function createUser(
  request: Request<{}, {}, CreateUserDto>,
  response: Response<User>
) {
  response.status(201).send({
    id: 1,
    email: "email@example.com",
    username: "breno",
  });
}
