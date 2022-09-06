class banco{

}constructor (conta, saldo, tipo_conta, agencia) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipo_conta = tipo_conta;
    this.agencia;
}

deposito(depositar){
    var saldo = this.saldo + depositar
    this.saldo = saldo
    console.log(saldo)
}
saldo(){
    console.log(this.saldo)
}
saque(sac){
    var sacar = this.saldo - sac
    this.saldo = sacar
    console.log(sacar)

}

banco = new banco (101, 2000, 'corrente, 001')
banco.deposito(1000)
banco.saque(200)
console.log(banco)
