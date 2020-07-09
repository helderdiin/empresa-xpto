/* eslint-disable */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import configureMockStore from 'redux-mock-store';
import messages from './i18n';

const mockStore = configureMockStore();

const STORE_MOCK = mockStore({
  products: [
    {
      id: 1,
      nome: 'Fone Bluetooth XPTO',
      valor: 198.00,
      exclusivo: false,
      promocao: true,
      imagem: 'https://i.imgur.com/ZwIhQDO.jpg',
      decricaoCurta: 'Aparelho intra auricular de som em alta definição sem fio para os viciados de plantão',
      descricaoLonga: 'Os novos fones de ouvido bluetooth XPTO proporcionam o melhor cancelamento de ruído da classe e a capacidade de misturar o som do ambiente para uma maior consciência dos arredores quando o desejar, fazendo dele o fone de ouvido esportivo mais versátil do mercado. Projetado para o esporte com um design reflexivo exclusivo, os fones de ouvido bluetooth XPTO apresentam o lendário som XPTO e um design de ajuste ergonômico que mantém os fones no lugar, independentemente da intensidade da rotina de exercícios. À prova de suor e disponível em azul, preto, vermelho e azul-esverdeado, os fones de ouvido bluetooth XPTO não precisam de bateria, pois extraem energia e áudio digital diretamente do conector lightning em dispositivos Apple.',
      fichaTecnica: [
        {
          titulo: 'Lightning connector',
          descricao: 'Sim',
        },
        {
          titulo: 'Dynamic Drivers (mm)',
          descricao: '14.8',
        },
        {
          titulo: 'Frequency Response',
          descricao: '10 Hz-22 kHz',
        },
        {
          titulo: 'Dimensões do produto',
          descricao: '1,2 x 2,6 x 2,2 cm ; 104 g',
        },
        {
          titulo: 'Tipo de fones',
          descricao: 'Intra-auricular',
        },
        {
          titulo: 'Tecnologia de conexão',
          descricao: 'Bluetooth',
        },
      ],
    },
    {
      id: 2,
      nome: 'Guarda-Chuva XPTO',
      valor: 19.90,
      exclusivo: true,
      promocao: false,
      imagem: 'https://i.imgur.com/jl3mWPw.jpg',
      decricaoCurta: 'Abertura e fechamentos automáticos da copa, estrutura em fibra',
      descricaoLonga: 'Guarda chuva original XPTO modelo c-108 abre e fecha automático! Compacto, 37cm quando fechado e 122cm quando aberto. Um dos melhores guarda chuvas do brasil, qualidade garantida! Empresa no Brasil ha mais de 10 anos, sinônimo de qualidade e credibilidade. 90 dias de garantia de fábrica. Cabo em polímero de alto brilho. Design americano, simples, fino e elegante. Haste central com 3 estágios em aço cromado. Tecido 100% em poliéster totalmente impermeável, de alta qualidade e secagem ultra rápida. Sistema central e ponteiras em fibra de vidro, mesmo material de varas de pesca profissionais. Ponteiras flexíveis de altíssima resistência. Sistema interno de molas nas varetas em alumínio no sistema anti-vento. Sistema anti-vento (se virar com ventos fortes não quebra) reforçado com ligas em poliuretano, firmes e flexíveis.',
      favorite: true,
      fichaTecnica: [
        {
          titulo: 'Cor',
          descricao: 'Azul Marinho',
        },
        {
          titulo: 'Comprimento fechado',
          descricao: '37cm',
        },
        {
          titulo: 'Comprimento aberto',
          descricao: '122 cmz',
        },
        {
          titulo: 'Garantia',
          descricao: '90 dias de fábrica',
        },
        {
          titulo: 'Modelo',
          descricao: 'c-108',
        },
        {
          titulo: 'Material vareta',
          descricao: 'Aço cromado e fibra de vidro',
        },
      ],
    },
  ],
});

function render(
  ui,
  renderOptions,
) {
  function Wrapper({ children }) {
    return (
      <Provider store={STORE_MOCK}>
        <IntlProvider locale="pt-BR" messages={messages['pt-BR']}>
          {children}
        </IntlProvider>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
