const text = (element) => element.textContent.replace(/\s+/gu, " ").trim();

export default [
  {
    name: "rota-01 — apresenta o roteiro de montanha",
    run: async ({ ui, user, assert }) => {
      await user.click(ui.getByRole("button", { name: "Montanha" }));
      assert.equal(
        ui
          .getByRole("button", { name: "Montanha" })
          .getAttribute("aria-pressed"),
        "true",
      );
      assert.ok(
        ui.getByRole("heading", {
          name: "Caminhos da Mantiqueira",
          exact: true,
        }),
      );
      assert.ok(ui.getByText("SERRA DA MANTIQUEIRA", { exact: true }));
      assert.ok(ui.getByText("4 dias · roteiro ilustrativo", { exact: true }));
      for (const stop of [
        "Estrada e café da serra",
        "Trilha e paisagem",
        "Pequenos produtores",
      ]) {
        assert.ok(ui.getByText(stop, { exact: false, selector: "p" }));
      }
    },
  },
  {
    name: "rota-02 — seleciona e desfaz a escolha local de roteiro",
    run: async ({ ui, user, assert }) => {
      await user.click(
        ui.getByRole("button", { name: "Quero explorar essa rota" }),
      );
      const selected = ui.getByRole("button", { name: "Rota selecionada" });
      assert.equal(selected.getAttribute("aria-pressed"), "true");
      assert.equal(
        text(ui.getByRole("status")),
        "Escolha registrada somente nesta tela. Nenhuma viagem contratada.",
      );
      await user.click(selected);
      assert.equal(
        ui
          .getByRole("button", { name: "Quero explorar essa rota" })
          .getAttribute("aria-pressed"),
        "false",
      );
      assert.equal(
        text(ui.getByRole("status")),
        "Experimente a escolha de um roteiro. Sem envio de dados.",
      );
    },
  },
  {
    name: "rota-03 — muda para Cultura e limpa a seleção anterior",
    run: async ({ ui, user, assert }) => {
      await user.click(
        ui.getByRole("button", { name: "Quero explorar essa rota" }),
      );
      await user.click(ui.getByRole("button", { name: "Cultura" }));
      assert.ok(
        ui.getByRole("heading", { name: "Cores de Salvador", exact: true }),
      );
      assert.ok(ui.getByText("BAHIA", { exact: true }));
      assert.ok(ui.getByText("3 dias · roteiro ilustrativo", { exact: true }));
      for (const stop of [
        "Primeiro olhar pelo centro",
        "Arte, música e sabores",
        "Uma tarde perto do mar",
      ]) {
        assert.ok(ui.getByText(stop, { exact: false, selector: "p" }));
      }
      assert.equal(
        ui
          .getByRole("button", { name: "Quero explorar essa rota" })
          .getAttribute("aria-pressed"),
        "false",
      );
      assert.equal(
        text(ui.getByRole("status")),
        "Experimente a escolha de um roteiro. Sem envio de dados.",
      );
    },
  },
];
