import { ICreateBackupDTO, IDates } from "../../dtos";
import { IBackupRepository } from "../IBackupCms";

class BackupRepository implements IBackupRepository {
  update: (dates: IDates, idStore: string) => void;
  findStore: () => Promise<void>;
  list: () => Promise<void>;
  findDate: () => Promise<void>;
  create: (props: ICreateBackupDTO) => void;
}

export { BackupRepository };
