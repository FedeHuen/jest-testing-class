const { Database } = require('./database');

describe('Database operations with hooks', () => {
  let db;

  // Se ejecuta UNA VEZ antes de todos los tests
  beforeAll(async () => {
    console.log('Setting up database connection...');
    db = new Database();
    await db.connect();
  });

  // Se ejecuta UNA VEZ después de todos los tests
  afterAll(async () => {
    console.log('Closing database connection...');
    await db.disconnect();
  });

  // Se ejecuta antes de CADA test
  beforeEach(() => {
    console.log('Clearing database before test...');
    db.clear();
  });

  // Se ejecuta después de CADA test
  afterEach(() => {
    console.log('Test completed');
  });

  test('inserts item into database', () => {
    const item = { id: 1, name: 'Test Item' };
    const result = db.insert(item);
    
    expect(result).toEqual(item);
    expect(db.findAll()).toHaveLength(1);
  });

  test('finds all items', () => {
    db.insert({ id: 1, name: 'Item 1' });
    db.insert({ id: 2, name: 'Item 2' });
    
    const items = db.findAll();
    expect(items).toHaveLength(2);
  });

  test('database is empty after beforeEach', () => {
    // Este test debería tener la DB vacía gracias a beforeEach
    expect(db.findAll()).toHaveLength(0);
  });
});

describe('Hooks execution order', () => {
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

  test('first test', () => {
    console.log('   Test 1 executing');
    expect(true).toBe(true);
  });

  test('second test', () => {
    console.log('   Test 2 executing');
    expect(true).toBe(true);
  });
});

