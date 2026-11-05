# Critérios do modelo Rota

Derivados da demonstração pública antes da implementação independente. Os testes verificam DOM simulado; isso não equivale a QA visual em navegador.

- **rota-01** — Em #rt-discover, clicar Montanha.
  Resultado: Montanha fica aria-pressed=true. O roteiro passa a Caminhos da Mantiqueira, SERRA DA MANTIQUEIRA, 4 dias e etapas Estrada e café da serra, Trilha e paisagem e Pequenos produtores.
- **rota-02** — Clicar “Quero explorar essa rota”; depois “Rota selecionada”.
  Resultado: O primeiro clique marca aria-pressed=true, muda o rótulo para Rota selecionada e o status para “Escolha registrada somente nesta tela. Nenhuma viagem contratada.”. O segundo desfaz a escolha e restaura “Experimente a escolha de um roteiro. Sem envio de dados.”.
- **rota-03** — Selecionar uma rota e depois clicar Cultura.
  Resultado: O roteiro passa a Cores de Salvador, BAHIA, 3 dias e três etapas de exemplo. A seleção é limpa e o button volta a Quero explorar essa rota.

Além dos fluxos, a suíte confere conteúdo inicial publicado, controles, imagens, âncoras, ausência de configuração privada e reinício do estado.
