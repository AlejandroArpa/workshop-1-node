// Auth class
class Auth {
  // Static method to log in a user
  static login(user) {
    // Generate a token
    const token = Auth.generateToken();

    // Store the token and user information in local storage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Static method to log out a user
  static logout() {
    // Remove the token and user information from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  // Static method to generate a token
  static generateToken() {
    // Generate a random 36-character string
    return Math.random().toString(36).substr(2);
  }
}

class Persona {
	constructor(nombre, email) {
		this.nombre = nombre;
		this.email = email;
	}
}

// UsuarioRegular class
class UsuarioRegular extends Persona {
  constructor(nombre, email) {
    super(nombre, email);
  }

  // Method to register the user as a regular user
  registrarseComoUsuarioRegular() {
    // Implement registration logic
    console.log(`${this.nombre} se ha registrado como usuario regular`);
  }
}

// Administrador class
class Administrador extends Persona {
  constructor(nombre, email) {
		super(nombre, email);
  }

  // Method to create an admin user
  crearUsuarioAdmin() {
    // Implement admin user creation logic
    console.log(`${this.nombre} ha creado un nuevo usuario admin`);
  }
}

// Example usage
const usuario = new UsuarioRegular('Juan', 'juan@example.com');
usuario.registrarseComoUsuarioRegular();

const admin = new Administrador('Admin', 'admin@example.com');
admin.crearUsuarioAdmin();