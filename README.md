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

### **Principais Conceitos e Áreas do Angular** 

- **Binding** 
    - Conceito básico/fundamental do Angular que permite a separação de responsabilidades entre o script do componente e o html do componente.
    - O par de colchetes **[algo]** pede para o Angular ficar observando algo no script e sempre que houver mudanças em algo no script, o HTML seja atualizado automaticamente.
    - O par de parenteses **(algo)** pede para o Angular ficar observando algo no html e sempre que houver mudanças em algo no HTML, o script seja atualizado automaticamente.
    - A combinação de colchetes com parenteses **[(algo)]** pede para o Angular ficar observando algo em ambos, html e script, e sempre que houver mudanças em "um dos lados" o "outro lado" seja atualizado automaticamente. 
- **Pipes | Transformação e Filtragem** 
    - O Angular já fornece vários pipes de transformadores e de filtragem como UpperCasePipe, LowerCasePipe e DatePipe.
    - Mais pipes aqui: https://angular.io/api?type=pipe.
- **Componentes (Web Components)**  
    - Cada componente é uma **view** ou um **widget** (conceito já presente no desenvolvimento mobile).
    - Template: é a parte visual do componente. Na prática é um trecho ou arquivo HTML que representa o componente.
    - **Metadata**: todo componente precisa também de um meta dados. 
    - **Data Binding**: recurso também presente em aplicações mobile para fazer a ligação "**automática-mágica**" dos dados do componente com a visão (template) do componente.
- **Diretivas**   
    - Código JavaScript para fornecer comportamentos reutilizáveis em nível de visão. 
    - Na prática a diretiva é um atributo que pode ser aplicado em elementos/tags HTML e também em componentes e que esconde complexidade reutilizável por meio de código JavaScript.
    - Nos ajuda a extrair tratamentos comportamentais complexos da visão ou de elementos/tags HTML e levá-los para JavaScript e com isso despoluir o nosso HTML de decisões, instruções e códigos JavaScript.
- **Property Binding**
    - Liga uma propriedade HTML a um dado do componente, tornando a propriedade reativa (observável). Com isso toda vez que alterarmos o dado relacionado/interligado, o Angular atualiza a propriedade automaticamente para nós. Isso é muito útil para aplicação de estilos em resposta as ações dos usuários.
- **Roteamento (Router)**   
    - Tabela de roteamento.
- **Serviços (Services)**   
    - Possui a lógica de negócios dos componentes.
    - Pode ser injetado em outras classes.
- **Injeção de Dependência**  
    - Recurso presente no framework para permitir desacoplamento, reúso e facilitar testes.  
- **Módulos (Modules)** 
    - Agrupamentos de elementos e conceitos Angular que permitem dividir melhor a aplicação e delimitar contextos. 

### **Pacotes** 

- **import FormsModule from '@angular/forms'**
    - Serve para interpolação em formulários [(ngModel)]="campo".

### **Comandos CLI** 

- **ng new \<nome-da-aplicacao>**
    - cria uma pasta com tudo o que é necessário para desenvolver uma aplicação angular.
- **ng serve** 
    - expõe a aplicação angular em uma porta local para testes.
- **ng g component \<nome-do-componente>** 
    - cria um componente e sua estrutura básica na pasta app e atualiza o módulo raiz da aplicação (app.module.ts).
- **ng g pipe \<nome-do-pipe>** 
    - cria um pipe e sua estrutura básica.
- **ng g directive \<nome-da-diretira>** 
    - cria uma diretiva e sua estrutura básica.

--- 

**Fontes**  

- https://angular.io (Versão 2x, 4x, 5x, 6x, ...)
- https://github.com/angular
- https://github.com/angular/angular/releases 
- https://angularjs.org (Versão 1x)
- https://www.youtube.com/user/Loianeg (Loiane Groner) 
- https://www.youtube.com/user/wesleywillians (Luis Carlos / Wesley Willians - Code.Education / School of Net)
- https://www.youtube.com/user/rodrigobranas (Rodrigo Branas)