import { ErrorMessage } from "@pp/domain/interfaces/error-mesage.interface";

export const firebaseErrors: ErrorMessage  = {
  'auth/invalid-credential': 'Correo o contraseña incorrectos. Verifica tus datos.',
  'auth/user-not-found': 'No encontramos una cuenta con este correo. Regístrate primero.',
  'auth/wrong-password': 'La contraseña ingresada es incorrecta.',
  'auth/invalid-email': 'El correo ingresado no tiene un formato válido.',
  'auth/user-disabled': 'Tu cuenta ha sido deshabilitada. Contacta al soporte.',
  'auth/too-many-requests': 'Demasiados intentos fallidos. Intenta más tarde o restablece tu contraseña.'
};
