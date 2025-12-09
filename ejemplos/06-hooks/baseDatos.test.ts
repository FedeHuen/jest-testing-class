import { BaseDatos, IItem } from './baseDatos';

describe('Operaciones de base de datos con hooks', () => {
  let db: BaseDatos;

  // Se ejecuta UNA VEZ antes de todos los tests
  beforeAll(async () => {
    console.log('Setting up database connection...');
    db = new BaseDatos();
    await db.conectar();
  });

  // Se ejecuta UNA VEZ después de todos los tests
  afterAll(async () => {
    console.log('Closing database connection...');
    await db.desconectar();
  });

  // Se ejecuta antes de CADA test
  beforeEach(() => {
    console.log('Clearing database before test...');
    db.limpiar();
  });

  // Se ejecuta después de CADA test
  afterEach(() => {
    console.log('Test completed');
  });

  test('inserta item en la base de datos', () => {
    const item: IItem = { id: 1, name: 'Test Item' };
    const resultado = db.insertar(item);
    
    expect(resultado).toEqual(item);
    expect(db.encontrarTodos()).toHaveLength(1);
  });

  test('encuentra todos los items', () => {
    db.insertar({ id: 1, name: 'Item 1' });
    db.insertar({ id: 2, name: 'Item 2' });
    
    const items = db.encontrarTodos();
    expect(items).toHaveLength(2);
  });

  test('la base de datos está vacía después de beforeEach', () => {
    // Este test debería tener la DB vacía gracias a beforeEach
    expect(db.encontrarTodos()).toHaveLength(0);
  });
});

describe('Orden de ejecución de hooks', () => {
  beforeAll(() => {
    console.log('1. beforeAll - runs once before all tests');
  });

  afterAll(() => {
    console.log('6. afterAll - runs once after all tests');
  });

  beforeEach(() => {
    console.log('2/4. beforeEach - runs before each test');
  });

  afterEach(() => {
    console.log('3/5. afterEach - runs after each test');
  });

  test('primer test', () => {
    console.log('   Test 1 executing');
    expect(true).toBe(true);
  });

  test('segundo test', () => {
    console.log('   Test 2 executing');
    expect(true).toBe(true);
  });
});

