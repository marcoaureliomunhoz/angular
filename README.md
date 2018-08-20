# Angular 

### **Versões** 

Versão | Data Base | Importante 
--- | --- | --- 
1.0.0 | . |    
2.0.0-alpha.13 | Março/2015 |    
2.0.0-beta.0 | Dezembro/2015 |  
2.0.0-rc.0 | Maio/2016 |  
2.0.0 | Setembro/2016 | 
2.4.10 | Março/2017 | 
4.0.0-beta.0 | Dezembro/2016 |  
4.0.0-rc.1 | Feveriro/2017 | 
4.0.0 | Março/2017 | 
4.4.6 | Outubro/2017 | 
5.0.0-beta.0 | Julho/2017 | 
5.0.0 | Novembro/2017 | 
5.1.3 | Janeiro/2018 | 
5.2.0 | Janeiro/2018 | 
5.2.1 | Janeiro/2018 | 
6.0.0-beta.0 | Janeiro/2018 | 
6.0.0-beta.7 | Março/2018 | 

### **Principais Conceitos e Áreas do Angular** 

- **Binding** 
    - Conceito básico/fundamental do Angular que permite a separação de responsabilidades entre o script do componente e o html do componente.
    - O par de colchetes **[algo]** pede para o Angular ficar observando algo no script e sempre que houver mudanças em algo no script, o HTML seja atualizado automaticamente.
    - O par de parenteses **(algo)** pede para o Angular ficar observando algo no html e sempre que houver mudanças em algo no HTML, o script seja atualizado automaticamente. É usado para observar eventos.
    - A combinação de colchetes com parenteses **[(algo)]** chama-se **two-way data binding** e pede para o Angular ficar observando algo em ambos, html e script, e sempre que houver mudanças em "um dos lados" o "outro lado" seja atualizado automaticamente. 
- **Pipes | Transformação e Filtragem** 
    - O Angular já fornece vários pipes de transformadores e de filtragem como UpperCasePipe, LowerCasePipe e DatePipe.
    - Mais pipes aqui: https://angular.io/api?type=pipe.
- **Componentes (Web Components)**  
    - Cada componente é uma **view** ou um **widget** (conceito já presente no desenvolvimento mobile).
    - Template: é a parte visual do componente. Na prática é um trecho ou arquivo HTML que representa o componente.
    - **Metadata**: todo componente precisa também de um meta dados. 
    - **Data Binding**: recurso também presente em aplicações mobile para fazer a ligação "**automática-mágica**" dos dados do componente com a visão (template) do componente.
- **Template Reference Variable**
    - Recurso que facilita o acesso a elementos HTML dentro dos templates. Temos duas formas de usar o recurso.
    ```html 
    //--- 1ª Forma ---
    //aqui estamos declarando uma variável de nome txtNome no próprio template
    <input name="nome" [(ngModel)]="nome" #txtNome>
    //aqui estamos usando a referência e verificando um atributo HTML/DOM
    <button (click)="salvar()" *ngIf="txtNome.value.length>3">Salvar</button>
    
    //--- 2ª Forma ---
    //aqui estamos declarando uma variável de nome txtNome no próprio template e estamos dizendo para o Angular que o conteúdo dela é a diretiva ngModel que é criada e controlada pelo Angular
    <input name="nome" [(ngModel)]="nome" #txtNome="ngModel">
    //aqui estamos usando a referência e verificando uma propriedade do objeto ngModel
    <button (click)="salvar()" *ngIf="!txtNome.errors">Salvar</button>
    ```
- **Diretivas**   
    - Código JavaScript para fornecer comportamentos reutilizáveis em nível de visão. 
    - Na prática a diretiva é um atributo que pode ser aplicado em elementos/tags HTML e também em componentes e que esconde complexidade reutilizável por meio de código JavaScript.
    - Nos ajuda a extrair tratamentos comportamentais complexos da visão ou de elementos/tags HTML e levá-los para JavaScript e com isso despoluir o nosso HTML de decisões, instruções e códigos JavaScript.
- **Property Binding**
    - Liga uma propriedade HTML a um dado do componente, tornando a propriedade reativa (observável). Com isso toda vez que alterarmos o dado relacionado/interligado, o Angular atualiza a propriedade automaticamente para nós. Isso é muito útil para aplicação de estilos em resposta as ações dos usuários ou para ligar variáveis do script com atributos dos elementos no template HTML.
    ```
    //aqui estamos dizendo para angular observar mudanças na variável telefone dentro do script e atualizar automaticamente no template HTML
    <input [value]="telefone">

    //uma outra forma de fazer isso é usando interpolação
    <input value="{{ telefone }}">
    ```
- **Event Binding** 
    - Liga um evento HTML a uma função no script.
- **Roteamento (Router)**   
    - Tabela de roteamento.
- **Serviços (Services)**   
    - Ideal para tirar dos componentes responsabilidades inerentes ao seu propósito. Ex: (i) abrir comunicação com o servidor para enviar ou receber dados armazenados em banco de dados; (ii) enviar e-mail; (iii) submeter a uma fila algum comando.
    - Pode ser injetado em outras classes. 
    - Para que o Angular gerencie as dependências é preciso importar e registrar os serviços no módulo. O registro deve ser feito em **providers**.
- **Injeção de Dependência**  
    - Recurso presente no framework para permitir desacoplamento, reúso e facilitar testes.  
- **Módulos (Modules)** 
    - Agrupamentos de elementos e conceitos Angular que permitem dividir melhor a aplicação e delimitar contextos. 

### **Pacotes** 

- **import { FormsModule } from '@angular/forms'**
    - Serve para interpolação em formulários [(ngModel)]="campo".
- **import { HttpModule } from '@angular/http'**
    - Serve para realizar requisições http (ajax) em serviços.
- **import { RouterModule, Routes } from '@angular/routers'** 
    - Serve para utilizarmos o módulo de rotas do Angular para navegação.

### **Módulos** 

Módulos são parecidos com os pacotes do java ou os namespaces do c#, ou seja, são agrupadores.

Metadados
- declarations: espaço para declaração dos componentes, diretivas e pipes do módulo.
- exports: espaço para declaração de componentes, diretivas e pipes do módulo que serão exportados (visíveis para os módulos que declararem o módulo).
- imports: espaço para declaração de módulos externos que são usados no módulo. Para usar um módulo externo precisamos importar primeiro.
- providers: espaço para declaração dos serviços que são usados no módulo.
- bootstrap: espaço de declaração do componente principal da aplicação. Esse metadado só deve estar presente no módulo principal da aplicação (app.module.ts).

### **Validando Formulários** 

- ng-pristine <=> ng-dirty
- ng-untouched <=> ng-touched 
- ng-valid <=> ng-invalid

Quando pedimos para o Angular observar os elementos de um formulário através de uma diretiva especial **#nomeDiretiva**, para cada elemento o Angular cria no escopo do componente uma instância de com propriedades que indicam se o elemento é válido ou não, se o elemento já foi tocado ou não, se o elemento é virgem ou não e se o elemento possui erros ou não. Para acessar a instância na visão do componente usamos **nomeDiretiva**.

### **Tipos de Rotas** 

No angular temos três tipos de rotas.

- Rota Root: a rota root só pode ser definida uma única vez na aplicação.
- Rota Funcionalidade: indica para o angular um caminho de renderização.
- Rota Filha: as rotas filhas são declaradas dentro de uma rota de funcionalidade e permite ao angular a renderização de todos os componentes percorridos através da hierarquia.

Exemplo de rota root:
```typescript
/*app.routing.module.ts*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
```

Exemplo de rota funcionalidade:
```typescript
/*tarefas.routing.module.ts*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarefasComponent } from './tarefas.component';
import { CadTarefaComponent } from './cad-tarefa/cad-tarefa.component';
import { DetTarefaComponent } from './det-tarefa/det-tarefa.component';

const tarefasRoutes: Routes = [
  { path: 'tarefas', component: TarefasComponent },
  { path: 'tarefas/novo', component: CadTarefaComponent },
  { path: 'tarefas/:id', component: DetTarefaComponent },
  { path: 'tarefas/:id/editar', component: CadTarefaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(tarefasRoutes)],
    exports: [RouterModule]
})
export class TarefasRoutingModule {}
```

Exemplo de rota filha:
```typescript
/*tarefas.routing.module.ts*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarefasComponent } from './tarefas.component';
import { CadTarefaComponent } from './cad-tarefa/cad-tarefa.component';
import { DetTarefaComponent } from './det-tarefa/det-tarefa.component';

const tarefasRoutes: Routes = [
  { path: 'tarefas', component: TarefasComponent, children: [
    { path: 'novo', component: CadTarefaComponent },
    { path: ':id', component: DetTarefaComponent },
    { path: ':id/editar', component: CadTarefaComponent }
  ]}  
];

@NgModule({
    imports: [RouterModule.forChild(tarefasRoutes)],
    exports: [RouterModule]
})
export class TarefasRoutingModule {}
```

### **Lidando com Rotas** 

- No html:  

```html
<ul>
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="/tarefas" [queryParams]="{pagina:1}">Tarefas</a></li>
    <li><a routerLink="/tarefas/novo">Nova Tarefa</a></li>
</ul>
```

- No script:  

```typescript
/***** acessando parâmetros *****/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/RX';

@Component({
  selector: 'app-cad-tarefa',
  templateUrl: './cad-tarefa.component.html',
  styleUrls: ['./cad-tarefa.component.css']
})
export class CadTarefaComponent implements OnInit, OnDestroy {

  inscricao: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    /*uma outra forma de acessar os parâmetros é acessar diretamente por snapshot.paramMap*/
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    //...

    /*uma forma mais elegante de acessar os parâmetros é se inscrever em params para receber a chamada e só então acessar os parâmetros*/
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id: number = Number(params.id);
        //...
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}

/***** redirecionamento/navegação por rotas imperativas *****/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/RX';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit, OnDestroy {

  inscricao: Subscription;
  pagina: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  proximaPagina() {
    this.pagina++;
    this.router.navigate(['/tarefas'],{
        queryParams: {'pagina' : this.pagina}
    });
  }

  paginaAnterior() {
    if (this.pagina > 1) {
      this.pagina--;
      this.router.navigate(['/tarefas'],{
          queryParams: {'pagina' : this.pagina}
      });
    }
  }

  ngOnInit() {
    this.inscricao = this.route.queryParams.subscribe((params) => {
      this.pagina = Number(params['pagina']);
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
```

### **Carregamento por Demanda (Lazy Loading)**  

O angular nos fornece a opção de carregar módulos por demanda. É importante salientar que a aplicação deve estar devidamente modularizada e as rotas de um módulo devem ser configuradas seguindo uma nomenclatura hierarquica. 

O primeiro passo para carregar um módulo por demanda é configurar o módulo de rota root:

```typescript  
/* app.routing.module.ts */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'tarefas', loadChildren: 'app/tarefas/tarefas.module#TarefasModule' }  /* lazy loading */
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
```  

O segundo passo é configurar o módulo root da aplicação removendo todas as referências ao módulo que será carregado por demanda.

```typescript  
/* app.module.ts */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FocusDirective } from './diretivas/focus.directive';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    FocusDirective,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```  

O terceiro passo é configurar a rota do módulo que será carregado por demanda.  

```typescript  
/* tarefas.routing.module.ts */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarefasComponent } from './tarefas.component';
import { CadTarefaComponent } from './cad-tarefa/cad-tarefa.component';
import { DetTarefaComponent } from './det-tarefa/det-tarefa.component';

const tarefasRoutes: Routes = [
  { path: '', component: TarefasComponent },
  { path: ':id', component: CadTarefaComponent },
  { path: ':id/detalhar', component: DetTarefaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(tarefasRoutes)],
    exports: [RouterModule]
})
export class TarefasRoutingModule {}
```  

### **Comandos CLI** 

- **ng new \<nome-da-aplicacao>**
    - cria uma pasta com tudo o que é necessário para desenvolver uma aplicação angular.  
- **ng new \<nome-da-aplicacao> --routing**
    - cria um projeto angular já com arquivo de roteamento.  
- **ng serve** 
    - expõe a aplicação angular em uma porta local para testes.
- **ng g component \<nome-do-componente> [--module \<nome-do-modulo>]** 
    - cria um componente e sua estrutura básica na pasta app e atualiza o módulo raiz da aplicação (app.module.ts) ou na pasta \<nome-do-modulo> quando --module é especificado.
- **ng g pipe \<nome-do-pipe>** 
    - cria um pipe e sua estrutura básica.
- **ng g directive \<nome-da-diretira>** 
    - cria uma diretiva e sua estrutura básica.
- **ng g service \<nome-do-servico>** 
    - cria um serviço e sua estrutura básica.
- **ng g module \<nome-do-modulo>** 
    - cria um módulo e sua estrutura básica. Se você estiver fora da pasta do módulo desejado tem que informar a pasta e o nome do módulo se deseja criar uma pasta para o módulo. Se você estiver dentro da pasta basta informar apenas o nome do módulo.
    - fora da pasta: ng g module <nome-do-modulo>\<nome-do-modulo>
    - dentro da pasta: ng g module <nome-do-modulo>
- **ng build** 
    - gera um "build" de desenvolvimento, ou seja, com o código sem ofuscamento e com css sem minificação.
- **ng build --prod**
    - gera um "build" de produção, ou seja, todo o código é ofuscado e os css são minificados.

> Em **ng g \<comando> \<nome>**, _g_ significa **generate**.

### **Atualizando CLI**

```  
$ npm uninstall -g @angular/cli
$ npm cache verify
$ npm install -g @angular/cli@latest
```  

Se ocorrer problemas durante a instalação execute *npm cache clean --force* e depois tente instalar novamente.


### **Elementos de um Projeto criado pelo Angular CLI -> ng new** 

- jasmine: biblioteca base de testes javascript.
- karma: ferramenta de testes unitários baseada em jasmine.
- protractor: ferramenta de testes de end-to-end (e2e) baseada em jasmine.
- angular-cli.json: arquivo de configuração do angular cli.
- tslint: ferramenta de verificação de sintaxe e boas práticas em arquivos ts.
- codelyzer: ferramenta de verificação de sintaxe e boas práticas específicas do angular.
- core-js: biblioteca que possui todo o código javascript para emular ES6, ES7 e ES8.
- polyfills.ts: arquivo que referencia e importa arquivos javascript (core-js) com códigos de emulação de recursos do ES6, ES7 e ES8 que ainda não são suportados pelos navegadores.
- tsconfig.json: arquivo de configuração do TypeScript.
- reflect-metadata: biblioteca usada pelo angular para tratar anotações (decorators).
- rxjs: biblioteca da Microsoft para programação assíncrona com base em Observables.
- zone.js: biblioteca para criação de tarefas assíncronas (zonas).

### **Integrando o Bootstrap** 

Primeiro temos que instalar o bootstrap, suas dependências (jquery e popper.js) e o ngx-bootstrap.

```
$ npm install jquery --save
$ npm install popper.js --save
$ npm install ngx-bootstrap bootstrap --save
ou 
$ npm install ngx-bootstrap bootstrap@4.0.0 --save
```

Depois temos que modificar o arquivo **angular-cli.json** para incluir os caminhos dos frameworks.

```
"styles": [
    "../node_modules/bootstrap/dist/css/bootstrap.min.css",
    "styles.css"
],
"scripts": [
    "../node_modules/jquery/dist/jquery.min.js",
    "../node_modules/popper.js/dist/popper.min.js",
    "../node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```

### **Dependências com Alerta de Segurança**

- ssri

--- 

**Fontes**  

- https://angular.io (Versão 2x, 4x, 5x, 6x, ...)
- https://github.com/angular
- https://github.com/angular/angular/releases 
- https://angularjs.org (Versão 1x)
- https://www.youtube.com/user/Loianeg (Loiane Groner) 
- https://www.youtube.com/user/wesleywillians (Luis Carlos / Wesley Willians - Code.Education / School of Net)
- https://www.youtube.com/user/rodrigobranas (Rodrigo Branas)