export class Shelf {
  cupboard: {
    id: number;
    title: string;
  };
  device: {
    createdAt: string;
    macAddress: string;
    title: string;
    uuid: string;
  };
  id: number;
  sectors: [
    {
      id: number;
      reader: {
        id: string;
        title: string;
      };
      shelf: {
        id: number;
        title: string;
      };
      title: string;
    }
  ];
  title: string;
}