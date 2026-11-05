---
name: "Rota"
description: "Sistema visual implementado — Viagens & turismo"
colors:
  primary: "#cb4b34"
  accent: "#ff795e"
  background: "#fff8ed"
  text: "#203b42"
  surface: "#e4eef1"
  duration: "#ffdb94"
  frame-background: "#09090b"
  frame-text: "#f5f5f7"
  focus: "#ff2d60"
typography:
  display:
    fontFamily: "Georgia, serif"
    fontSize: "59px"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-2px"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    lineHeight: 1.5
---

# Design System: Rota

## Overview

Viagem editorial com linguagem de cartão postal: creme, azul suave e coral, fotografia inclinada e bilhete de roteiro. Os detalhes gráficos evocam uma descoberta pessoal.

Registro descritivo do código atual, com autoridade de preservação da [referência pública](https://lofranotecnologia.com.br/modelos/rota). Fontes normativas: [estilos do modelo](../src/demo.css), [base compartilhada](../src/base.css), [componentes da demonstração](../src/Demo.jsx) e [moldura de distribuição](../src/App.jsx). Layout, contraste e overflow visual permanecem não verificados em navegador; valores abaixo são declarações de fonte, não medições de renderização.

## Colors

Coral destaca a ação e o cartão postal; azul profundo mantém texto e abas ativas. A área de descoberta usa azul claro e a duração aparece em amarelo. O frontmatter registra cores principais por papel; variações locais permanecem no CSS. A moldura LOFRANO conserva fundo escuro, texto claro e foco rosa. Paleta fixa, sem alternância de tema.

## Typography

Georgia conduz títulos e ênfases; a marca é sem serifa e pesada. O corpo usa Arial/Helvetica. O título principal passa a (47px) até (760px). Manrope e DM Sans são fontes locais de [`assets/`](../assets/); Georgia, Arial e Helvetica dependem das alternativas do sistema. O token display descreve o título principal em desktop. A base define h2 móvel (34px), com espaçamento de letras (-1.3px), até (760px); regras mais específicas do modelo prevalecem.

## Layout

Hero e bilhete em duas colunas; manifesto em três faixas. Até (760px), essas áreas viram uma coluna; a fotografia usa (360px), abas quebram linha e a borda divisória do bilhete passa da lateral para a base.

A moldura organiza autoria e links acima da demonstração, guia abaixo e rodapé final. Cabeçalho e rodapé permitem quebra; até (600px), o guia reduz o padding para (40px 20px).

## Elevation & Depth

O cartão postal usa sombra (0 8px 25px #1b343333); legenda da foto usa sombra de texto (0 1px 5px #000). Rotação e sobreposição estabelecem a profundidade.

## Shapes

Foto com canto superior esquerdo (130px) e rotação (2deg), reduzidos no móvel. Abas em pílulas (30px), bilhete com divisória tracejada e etapas circulares. A imagem conceitual está em [`assets/rota.webp`](../assets/rota.webp); preservar seu recorte definido pelo CSS.

## Components

- Roteiros: abas com `aria-pressed` substituem destino, duração e etapas; a seleção limpa a confirmação anterior.
- Escolha: ação alterna o estado de roteiro escolhido e apresenta status local.
- Bilhete: destino e percurso mantêm áreas distintas, com a duração em etiqueta inclinada.
- Estados compartilhados: Âncoras, botões e seletores da demonstração sobrescrevem o foco para contorno da cor corrente (3px), afastado (5px); a moldura usa rosa. A moldura inverte o botão de reinício para fundo branco no hover. As interações do modelo usam os estados descritos acima; não há variante de hover adicional declarada para elas. Reiniciar remonta a demonstração e restaura o estado local.
- Movimento: a base usa rolagem suave; a preferência por movimento reduzido troca a rolagem CSS para automática e reduz durações de animação/transição para (0.01ms).

## Do's and Don'ts

- **Do:** Preservar fotografia inclinada, divisória tracejada e relação coral/azul.
- **Do:** manter avisos de conceito fictício, foco visível e estados de seleção coerentes com os controles.
- **Don't:** Transformar a escolha demonstrativa em contratação de viagem.
- **Don't:** interpretar a moldura compartilhada como autorização para substituir a identidade visual do modelo.
