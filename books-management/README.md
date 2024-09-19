## Descrição do Problema:
Você foi contratado para desenvolver um sistema simples de gerenciamento de livros para uma pequena biblioteca. Sua tarefa é criar uma classe chamada <span style="color:green">Livro</span>, que será usada para representar os livros disponíveis na biblioteca. Cada livro tem algumas características importantes (atributos) e deve realizar algumas ações básicas (métodos).


## Requisitos:
### Atributos da Classe Livro:
- Título (<span style="color:green">titulo</span>): O nome do livro.
  
- Autor (<span style="color:green">autor</span>): O nome do autor do livro.
  
- Ano de Publicação (<span style="color:green">anoPublicacao</span>): O ano em que o livro foi publicado.
  
- Gênero (<span style="color:green">genero</span>): O gênero literário do livro (por exemplo, Ficção, Não-Ficção, Fantasia, etc.).
  
- Disponível (<span style="color:green">disponivel</span>): Um atributo booleano que indica se o livro está disponível para empréstimo (true) ou se já foi emprestado (false).


### Métodos da Classe <span style="color:green">Livro</span>:
- Exibir Informações (<span style="color:green">exibirInformacoes()</span>): Um método que exibe todas as informações do livro no console.
  
- Emprestar Livro (<span style="color:green">emprestarLivro()</span>): Um método que muda o status do livro para indisponível (disponivel = false) se o livro ainda estiver disponível.
  
- Devolver Livro (<span style="color:green">devolverLivro()</span>): Um método que muda o status do livro para disponível (disponivel = true) quando o livro é devolvido.


## Tarefa:
### Criação da Classe <span style="color:green">Livro</span>:
- Defina a classe <span style="color:green">Livro</span> com os atributos especificados.
  
- Crie um construtor que permita inicializar todos os atributos quando um novo livro é criado.


### Implementação dos Métodos:
- Implemente o método <span style="color:green">exibirInformacoes()</span> para mostrar no console os detalhes do livro.
  
- Implemente o método <span style="color:green">emprestarLivro()</span> para alterar o status de disponibilidade do livro e indicar no console que o livro foi emprestado.
  
- Implemente o método <span style="color:green">devolverLivro()</span> para alterar o status de disponibilidade do livro e indicar no console que o livro foi devolvido.
  

### Criação de Objetos:
- Crie pelo menos dois objetos <span style="color:green">Livro</span> usando a classe que você desenvolveu, cada um representando um livro diferente.
  
- Utilize os métodos criados para exibir as informações dos livros, emprestar um dos livros e, em seguida, devolver o mesmo livro.
