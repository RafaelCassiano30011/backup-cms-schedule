import { CreateBackupUseCase } from "./CreateBackupUseCase";

class CreateBackupController {
  async handle(req: Request) {
    // const { name, description } = req.body;
    // const createCategoryUserCase = container.resolve(CreateCategoryUseCase);
    // await createCategoryUserCase.execute({ name, description });

    new CreateBackupUseCase();
  }
}

export { CreateBackupController };
