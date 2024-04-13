class User {
    constructor(name, email, timestamp) {
      this.id = uuidv4();
      this.name = name;
      this.email = email;
      this.timestamp = timestamp;
    }
  }