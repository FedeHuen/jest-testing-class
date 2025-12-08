class Database {
  constructor() {
    this.connected = false;
    this.data = [];
  }

  async connect() {
    await new Promise(resolve => setTimeout(resolve, 100));
    this.connected = true;
    return this.connected;
  }

  async disconnect() {
    await new Promise(resolve => setTimeout(resolve, 50));
    this.connected = false;
  }

  insert(item) {
    if (!this.connected) {
      throw new Error('Database not connected');
    }
    this.data.push(item);
    return item;
  }

  findAll() {
    if (!this.connected) {
      throw new Error('Database not connected');
    }
    return this.data;
  }

  clear() {
    this.data = [];
  }
}

module.exports = { Database };

