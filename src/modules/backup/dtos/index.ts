interface IDates {
  [key: string]: {
    templateName: string;
    html: string;
    placeholder?: {
      type: string;
      content: string;
    }[];
  }[];
}

interface ICreateBackupDTO {
  storeName: string;
  id?: string;
  avatar?: string;
  dates: IDates[];
}

export { ICreateBackupDTO };
