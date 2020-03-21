import { Editora } from './editora.model';

export class EditoraBuilder {

  private _id = '1';
  private nome = 'abc';
  private telefone = '';

  valida() {
    return this;
  }

  invalida() {
    this.nome = '';
    return this;
  }

  paraInclusao() {
    this._id = '';
    return this;
  }

  comId(id: string) {
    this._id = id;
    return this;
  }

  comNome(nome: string) {
    this.nome = nome;
    return this;
  }

  comTelefone(telefone: string) {
    this.telefone = telefone;
    return this;
  }

  builder(): Editora {
    const editora = new Editora();
    editora._id = this._id;
    editora.nome = this.nome;
    editora.telefone = this.telefone;
    return editora;
  }

}
