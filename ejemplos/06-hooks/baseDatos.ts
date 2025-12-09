export interface IItem {
  id: number;
  name: string;
  [key: string]: any;
}

export class BaseDatos {
  private conectada: boolean = false;
  private datos: IItem[] = [];

  async conectar(): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 100));
    this.conectada = true;
    return this.conectada;
  }

  async desconectar(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 50));
    this.conectada = false;
  }

  insertar(item: IItem): IItem {
    if (!this.conectada) {
      throw new Error('Database not connected');
    }
    this.datos.push(item);
    return item;
  }

  encontrarTodos(): IItem[] {
    if (!this.conectada) {
      throw new Error('Database not connected');
    }
    return this.datos;
  }

  limpiar(): void {
    this.datos = [];
  }
}

