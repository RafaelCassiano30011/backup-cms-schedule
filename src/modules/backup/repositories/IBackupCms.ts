import { ICreateBackupDTO, IDates } from "../dtos";

interface IBackupRepository {
  findStore: () => Promise<void>;
  list: () => Promise<void>;
  findDate: () => Promise<void>;
  create: (props: ICreateBackupDTO) => void;
  update: (dates: IDates, idStore: string) => void;
}

export { IBackupRepository };
