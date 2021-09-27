/* Crea una clase NIF que se usará para mantener DNIs con su correspondiente letra. Tendrá
como atributos el número de DNI (entero largo) y la letra. La clase dispondrá de los siguientes
métodos:
- Constructor que dado un nº de DNI lo guarde y para la letra ejecute un método de la propia
clase para ver cuál correspondería.
- Getters y setter para el número de DNI.
- método mostrar( ): Método que nos permita mostrar el NIF (ocho dígitos, un guión y la letra
en mayúscula; por ejemplo: 00395469-F). */

class NIF{
    constructor(numDni){
        this._numDni = numDni;
        this._letra = this.obtenerLetra(numDni);
    }
    get numDni(){
        return this._numDni;
    }
    set numDni(numero){
        this._numDni = numero;
        this._letra = this.obtenerLetra();
    }
    get letra(){
        return this._letra;
    }
    obtenerLetra() {
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P',
        'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'];
        return letras[this._numDni%23];
    }
    mostrar(){
        console.log(this.numDni+"-"+this._letra);
    }
}

let numeroDNI = new NIF(20488434);
numeroDNI.mostrar();
