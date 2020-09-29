function isEmpty(str: string): boolean {
  let spaceCount = str.length - str.replace(" ", "").length;
  return str == null || spaceCount == str.length;
}

function dados_loja_param(nome_loja: string,
  logradouro: string,
  numero: number,
  complemento: string,
  bairro: string,
  municipio: string,
  estado: string,
  cep: string,
  telefone: string,
  observacao: string,
  cnpj: string,
  inscricao_estadual: string) {

    if (isEmpty(logradouro)) {
      throw new Error(`O campo logradouro do endereço é obrigatório`);
    }
  
    if (isEmpty(municipio)) {
      throw new Error(`O campo município do endereço é obrigatório`);
    }
  
    if (isEmpty(estado)) {
      throw new Error(`O campo estado do endereço é obrigatório`);
    }
  
    if (isEmpty(cnpj)) {
      throw new Error(`O campo CNPJ da loja é obrigatório`);
    }
  
    if (isEmpty(inscricao_estadual)) {
      throw new Error(`O campo inscrição estadual da loja é obrigatório`);
    }
  
    var numero1 : string = numero + "";
    if(numero == 0){
      numero1 = "s/n";
    }
  
    var linha2 = `${logradouro}, ${numero1}`;
    if (! isEmpty(complemento)){
        linha2 += ` ${complemento}`;
    }
    
    var linha3 = "";
    if (! isEmpty(bairro)){
      linha3 += `${bairro} - `;
    }
    linha3 += `${municipio} - ${estado}`;
  
    var linha4 = "";
    if (! isEmpty(cep)){
      linha4 = `CEP:${cep}`;
    }
    if (! isEmpty(telefone)){
      if (! isEmpty(linha4)){
        linha4 += ` `;
      }
      linha4 += `Tel ${telefone}`;
    }
    if (! isEmpty(linha4)){
      linha4 += `\n`;
    }
  
    var linha5 = "";
    if (! isEmpty(observacao)){
      linha5 += `${observacao}`;
    }
  
    let output = `${nome_loja}\n`
    output += `${linha2}\n`
    output += `${linha3}\n`
    output += `${linha4}`
    output += `${linha5}\n`
    output += `CNPJ: ${cnpj}\n`
    output += `IE: ${inscricao_estadual}\n`
  
    return output;
  }

module.exports = dados_loja_param;
