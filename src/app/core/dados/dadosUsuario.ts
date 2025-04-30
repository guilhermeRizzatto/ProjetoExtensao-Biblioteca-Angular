export interface DadosUsuario{
  identificacao: string;
  senha: string;
}

export interface DadosNovaSenha{
  senhaOld: string;
  senhaNew: string;
  identificacao: string;
}
