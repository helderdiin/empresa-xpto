# Empresa XPTO

[![Build Status](https://travis-ci.org/helderdiin/empresa-xpto.svg?branch=develop)](https://travis-ci.org/helderdiin/empresa-xpto)
[![Coverage Status](https://coveralls.io/repos/github/helderdiin/empresa-xpto/badge.svg?branch=develop)](https://coveralls.io/github/helderdiin/empresa-xpto?branch=develop)
[![Built With %E2%9D%A4](https://img.shields.io/badge/built%20with-%E2%9D%A4-red.svg)](https://github.com/helderdiin/empresa-xpto)

> Implementar uma aplicação para gerenciar os produtos da empresa XPTO.

[Demo da aplicação](https://exmpresa-xpto-test-env.herokuapp.com/)

## Observações :green_book:

### Ícones do menu

No menu, ao invés de importar 2 png's para cada item do menu (normal e ativado), decidi resolver desta forma:

``` css
.aside-menu__item {
  /* ... */
  opacity: 0.7;
}

.aside-menu a.active .aside-menu__item {
  opacity: 1;
}

.aside-menu a.active .aside-menu__item span {
  font-weight: 700;
  color: #000;
}
```

Assim fica com um efeito visual semelhante, com menos complexidade e sem o uso de JS na jogada.

### React Icons

Sei que fugi um pouco do layout proposto em relação aos ícones de *lupa* e de *voltar*, mas quis aproveitar a oportunidade e utilizar.

## Commits em inglês ou português? :thinking:

É sempre uma pergunta pertinente. O que eu acredito é em *seguir padrões*, mais importante do que o certo e o errado (que nem sempre existe) o mais importante é que um padrão seja definido (seja sozinho, quando estiver *solo*, ou em time, quando tiverem em *party*) e seguido.

É mais comum vermos projetos com commits em inglês, mas acho que isso se deve ao fato de um possível apoio internacional, que não é o meu caso. Logo estou fazendo os **commits em português** por ser nossa língua nativa.

## Executando o projeto localmente :computer:

Costumo apenas utilizar `yarn` como **package manager**, por isso só versionei o `yarn.lock`, indico o uso do mesmo para evitarmos versões diferentes.

``` bash
yarn install
yarn start
```

## Playlists de desenvolvimento :musical_note:

1. [Easy](https://open.spotify.com/playlist/5iSqs9BD6ivQEfA4mU839z?si=iICXv-VZT56HntcPHubHfQ)
2. [LIU - MIX VERÃO INFINITO](https://youtu.be/-irwPju_STY)
3. [Imagine Dragons Best Of](https://open.spotify.com/playlist/43mnKzy2LaOV1q6LhsJERY?si=xR_MvpQLQV6ZU0rti3jGDQ)

## Pendências :warning:

* Criar botão para troca de linguagem
* Paginação dos itens
* Finalizar migração de **CSS** para **styled-components** no branch `css-in-js`
* Adicionar tratamento para quando não encontrar produtos
* Melhorar performance utilizando [React.lazy](https://pt-br.reactjs.org/docs/code-splitting.html#reactlazy)

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
