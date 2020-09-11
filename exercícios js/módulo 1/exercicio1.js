var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
   }

  function exibeMensagem() {
      return (
          "O usuário mora em" + endereco.cidade + "/" + endereco.uf + ", na rua " + endereco.rua + " com nº " + endereco.numero
      );
  }
  console.log(exibeMensagem(endereco))