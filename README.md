# Benchmarking CDIO (Backend)

Este é o backend da ferramenta Benchmarking CDIO responsável por fazer a comunicação com o banco de dados.

# Como Utilizar



# Referência API

## Receber Turma

### Request

| Nome                                | Método | Descrição                  |
| :---------------------------------- | :----: | :------------------------- |
| /turma                              |  GET   | Retorna todas as turmas    |
| /turma/{curso}/{projeto}/{semestre} |  GET   | Retorna a turma específica |

### Parâmetros

| Nome       | Tipo de dado | Opcional/Requerido | Descrição                                                    |
| ---------- | :----------: | :----------------: | ------------------------------------------------------------ |
| {curso}    |    String    |     Requerido      | Nome do curso completo com espaços (Ex.: "Projeto Integrador 2"). |
| {projeto}  |    String    |     Requerido      | Nome do projeto completo.                                    |
| {semestre} |    String    |     Requerido      | Data do semestre no formato XX-X. Ex.: 19-1 para o primeiro semestre do ano 2019. |



## Adicionar Turma

### Request

| Nome   | Método | Descrição           |
| :----- | :----: | :------------------ |
| /turma |  POST  | Adiciona nova turma |

### Parâmetros

| Nome        |   Tipo de dado   | Opcional/Requerido | Descrição                                                    |
| ----------- | :--------------: | :----------------: | ------------------------------------------------------------ |
| curso       |      String      |     Requerido      | Nome do curso completo (Ex.: "Projeto Integrador 2").        |
| projeto     |      String      |     Requerido      | Nome do projeto completo.                                    |
| semestre    |      String      |     Requerido      | Data do semestre no formato XX-X. Ex.: 19-1 para o primeiro semestre do ano 2019. |
| expectativa |      Objeto      |      Opcional      | Objeto contendo as chaves com os valores de expectativa da turma. |
| metrica     |      Objeto      |      Opcional      | Objeto contendo as chaves com os valores de métricas da turma. |
| equipes     | Array de Objetos |      Opcional      | Lista de objetos com as equipes da turma.                    |



## Adicionar Equipe

### Request

| Nome          | Método | Descrição                     |
| :------------ | :----: | :---------------------------- |
| /turma/equipe |  POST  | Adiciona nova equipe na turma |

### Parâmetros

| Nome        | Tipo de dado | Opcional/Requerido | Descrição                                                    |
| ----------- | :----------: | :----------------: | ------------------------------------------------------------ |
| curso       |    String    |     Requerido      | Nome do curso completo (Ex.: "Projeto Integrador 2").        |
| projeto     |    String    |     Requerido      | Nome do projeto completo.                                    |
| semestre    |    String    |     Requerido      | Data do semestre no formato XX-X. Ex.: 19-1 para o primeiro semestre do ano 2019. |
| equipe      |    Objeto    |     Requerido      | Objeto contendo equipe para se adicionar à turma             |
| equipe.nome |    String    |     Requerido      | Nome da equipe à ser adicionada                              |
| equipe.area |    Objeto    |      Opcional      | Área contendo chaves com valores dos indicadores à ser adicionado. |



## Adicionar Área

### Request

| Nome               | Método | Descrição                    |
| :----------------- | :----: | :--------------------------- |
| /turma/equipe/area |  POST  | Adiciona nova área na equipe |

### Parâmetros

| Nome        | Tipo de dado | Opcional/Requerido | Descrição                                                    |
| ----------- | :----------: | :----------------: | ------------------------------------------------------------ |
| curso       |    String    |     Requerido      | Nome do curso completo (Ex.: "Projeto Integrador 2").        |
| projeto     |    String    |     Requerido      | Nome do projeto completo.                                    |
| semestre    |    String    |     Requerido      | Data do semestre no formato XX-X. Ex.: 19-1 para o primeiro semestre do ano 2019. |
| equipe      |    Objeto    |     Requerido      | Objeto contendo equipe para se adicionar à turma             |
| equipe.nome |    String    |     Requerido      | Nome da equipe à ser adicionada                              |
| equipe.area |    Objeto    |     Requerido      | Área contendo chaves com valores dos indicadores à ser adicionado. |



## Adicionar ou Atualizar Configurações da Turma

### Request

| Nome          | Método | Descrição                                       |
| :------------ | :----: | :---------------------------------------------- |
| /turma/config |  POST  | Adiciona ou atualiza as configurações da Turma. |

### Parâmetros

| Nome        | Tipo de dado | Opcional/Requerido | Descrição                                                    |
| ----------- | :----------: | :----------------: | ------------------------------------------------------------ |
| curso       |    String    |     Requerido      | Nome do curso completo (Ex.: "Projeto Integrador 2").        |
| projeto     |    String    |     Requerido      | Nome do projeto completo.                                    |
| semestre    |    String    |     Requerido      | Data do semestre no formato XX-X. Ex.: 19-1 para o primeiro semestre do ano 2019. |
| expectativa |    Objeto    |     Requerido      | Objeto contendo as chaves com os valores de expectativa da turma. |
| metrica     |    Objeto    |     Requerido      | Objeto contendo as chaves com os valores de métricas da turma. |