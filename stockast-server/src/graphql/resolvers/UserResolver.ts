import { Arg, Query, Resolver } from "type-graphql";
import { User } from "../../entities/User";
import { getRepository } from "typeorm";
import { AppDataSource } from "../../config/database";

@Resolver()
export class UserResolver {
  private userRepository = AppDataSource.getRepository(User);

  @Query(() => User)
  async user(@Arg("id") id: string): Promise<User | null> {
    return {
        
    };
  }
}
