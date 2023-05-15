export class AppError {
  message: string;

  // Conceito de construtor, ele é chamado quando a classe for instanciada.
  // Nessa caso vai ser solicitado um mensagem do tipo string e vai ser repassada
  // essa mensagem para a mensagem que está no escopo global dessa classe.
  constructor(message: string) {
    this.message = message;
  }
}