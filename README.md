# Empresa XPTO

Implementar uma aplicação para gerenciar os produtos da empresa XPTO.

## Observações :green_book:

### Ícones do menu

No menu, ao invés de importar 2 png's para cada item do menu (normal e ativado), decidi resolver desta forma:

``` css
.aside-menu__item {
  ...
  opacity: 0.7;
}

.aside-menu__item.active {
  opacity: 1;
}

.aside-menu__item.active span {
  font-weight: 700;
}
```

Assim fica com um efeito visual semelhante, com menos complexidade e sem o uso de JS na jogada.

### React Icons

Sei que fugi um pouco do layout proposto em relação aos ícones de *lupa* e de *voltar*, mas quis aproveitar a oportunidade e utilizar.

## Commits em inglês ou português? :thinking:

É sempre uma pergunta pertinente. O que eu acredito é em *seguir padrões*, mais importante do que o certo e o errado (que nem sempre existe) o mais importante é que um padrão seja definido (seja sozinho, quando estiver solo, ou em time, quando tiverem em party) e seguido.

É mais comum vermos projetos com commits em inglês, mas acho que isso se deve ao fato de um possível apoio internacional, que não é o meu caso. Logo estou fazendo os commits em português por ser nossa língua nativa.

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

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
