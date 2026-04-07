export type CategoriaProduto = 'Chaveiros' | 'Utilidades' | 'Decoração';

export interface Produto {
  id: string;
  created_at: string;
  nome: string;
  preco: number;
  categoria: CategoriaProduto;
  imagens: string[];
  videoUrl?: string;
}

type ProdutoInput = Omit<Produto, 'id' | 'created_at' | 'categoria'>;

const categoriasAgrupadas: Record<CategoriaProduto, ProdutoInput[]> = {

  'Chaveiros': [
    {
      nome: "Gatinho Minimalista",
      preco: 3.50,
      imagens: [
        "/produtos/chaveiro/CHAVEIRO GATO (1).jpg",
        "/produtos/chaveiro/CHAVEIRO GATO (1).png",
        "/produtos/chaveiro/CHAVEIRO GATO (2).jpg",
        "/produtos/chaveiro/CHAVEIRO GATO (3).png",
        "/produtos/chaveiro/CHAVEIRO GATO (5).jpg"
      ],
      videoUrl: "/produtos/chaveiro/CHAVEIRO GATO (1).mp4",
    },
    {
      nome: "Par de Coração Blocos de Montar",
      preco: 2.50,
      imagens: [
        "/produtos/chaveiro/CORACAO LEGO (1).jpg",
        "/produtos/chaveiro/CORACAO LEGO (1).png",
        "/produtos/chaveiro/CORACAO LEGO (2).jpg",
        "/produtos/chaveiro/CORACAO LEGO (2).png",
        "/produtos/chaveiro/CORACAO LEGO (3).jpg"
      ],
      videoUrl: "/produtos/chaveiro/CORACAO LEGO (1).mp4",
    }, 
    {
      nome: "Super Mario | Bloco de Interrogacao Amarelo ",
      preco: 4.00,
      imagens: [
        "/produtos/chaveiro/MARIO BLOCO (1).png",
        "/produtos/chaveiro/MARIO BLOCO (2).jpg ",
        "/produtos/chaveiro/MARIO BLOCO (2).png",
        "/produtos/chaveiro/MARIO BLOCO (3).png",
        "/produtos/chaveiro/MARIO BLOCO.jpg"
      ],
      videoUrl: "/produtos/chaveiro/MARIO BLOCO (1).mp4",
    },
    {
      nome: "Creeper Minecraft | Personalizável",
      preco: 3.50,
      imagens: [
        "/produtos/chaveiro/MINECRAFT CREEPER (1).png",
        "/produtos/chaveiro/MINECRAFT CREEPER (2).png",
        "/produtos/chaveiro/MINECRAFT CREEPER (3).png",
        "/produtos/chaveiro/MINECRAFT CREEPER (4).png"
      ],
      videoUrl: "/produtos/chaveiro/MINECRAFT CREEPER (5).mp4",
    },
    {
      nome: "Polvo Articulado",
      preco: 3.50,
      imagens: [        
        "/produtos/chaveiro/POLVO ARTICULADO (1).png",
        "/produtos/chaveiro/POLVO ARTICULADO (2).png",
        "/produtos/chaveiro/POLVO ARTICULADO (3).png",
        "/produtos/chaveiro/POLVO ARTICULADO (4).png",
        "/produtos/chaveiro/POLVO ARTICULADO (5).png",
      ],
      videoUrl: "/produtos/chaveiro/POLVO ARTICULADO (1).mp4",
    },
    {
      nome: "Troféu copa do mundo",
      preco: 2.50,
      imagens: [
        "/produtos/chaveiro/TACA COPA DO MUNDO (1).jpg",
        "/produtos/chaveiro/TACA COPA DO MUNDO (1).png",
        "/produtos/chaveiro/TACA COPA DO MUNDO (4).png",
        "/produtos/chaveiro/TACA COPA DO MUNDO (5).png"
      ],
      videoUrl: "/produtos/chaveiro/TACA COPA DO MUNDO (1).mp4",
    },
    {
      nome: "Logo Playstation",
      preco: 2.50,
      imagens: [
        "/produtos/chaveiro/CHAVEIRO LOGO PLAYSTATION (1).jpg",
        "/produtos/chaveiro/CHAVEIRO LOGO PLAYSTATION (2).jpg"
      ],
    },
    {
      nome: "Robux Moeda Roblox",
      preco: 2.50,
      imagens: [
        "/produtos/chaveiro/ROBUX MOEDA ROBLOX.jpg"
      ],
    },
    {
      nome: "patinha cachorro/gato",
      preco: 2.50,
      imagens: [
        "/produtos/chaveiro/CACHORRO PATINHA ANIMAL (1).png",
        "/produtos/chaveiro/CACHORRO PATINHA ANIMAL (2).png",
        "/produtos/chaveiro/CACHORRO PATINHA ANIMAL (3).png",
        "/produtos/chaveiro/CACHORRO PATINHA ANIMAL (4).png",
        "/produtos/chaveiro/CACHORRO PATINHA ANIMAL (5).png",
        "/produtos/chaveiro/CACHORRO PATINHA ANIMAL (6).png",
      ],
    },
    {
      nome: "NUVEM AKATSUKI ITACHI",
      preco: 2.50,
      imagens: [
        "/produtos/chaveiro/NUVEM AKATSUKI ITACHI (1).jpg",
        "/produtos/chaveiro/NUVEM AKATSUKI ITACHI (2).jpg"
      ],
    },
    {
      nome: "chapéu DE PALHA",
      preco: 3.00,
      imagens: [
        "/produtos/chaveiro/CHAPEU DE PALHA (1).jpg",
        "/produtos/chaveiro/CHAPEU DE PALHA (2).jpg"
      ],
    },
    {
      nome: "TIMES RJ - FLAMENGO/BOTAFOGO/VASCO",
      preco: 4.00,
      imagens: [
        "/produtos/chaveiro/TIMES RJ (3).jpg",
        "/produtos/chaveiro/TIMES RJ (1).jpg",
        "/produtos/chaveiro/TIMES RJ (2).jpg"
      ],
    },
    {
      nome: "BOLA DE FUTEBOL BRASIL",
      preco: 5.50,
      imagens: [
        "/produtos/chaveiro/BOLA DE FUTEBOL BRASIL.png",
      ],
    },
    {
      nome: "DEMON SLAYER BRINCO TANJIRO ",
      preco: 2.50,
      imagens: [
        "/produtos/chaveiro/TANJIRO BRINCO.png"
      ],
    }
  
  ],

  'Utilidades': [
    {
      nome: "Cesto de Páscoa para Bombons e Doces",
      preco: 25.99,
      imagens: [
      "/produtos/utilidade/CESTO BOMBOM PASCOA (1).png",
      "/produtos/utilidade/CESTO BOMBOM PASCOA (2).png",
      "/produtos/utilidade/CESTO BOMBOM PASCOA (3).png",
      "/produtos/utilidade/CESTO BOMBOM PASCOA (4).png",
      "/produtos/utilidade/CESTO BOMBOM PASCOA (5).png",
      "/produtos/utilidade/CESTO BOMBOM PASCOA (6).png"
      ]
    },
    {
      nome: "Cesto Quadrado Organizador 10x10",
      preco: 15.99,
      imagens: [
      "/produtos/utilidade/CESTO ORGANIZADOR (1).png",
      "/produtos/utilidade/CESTO ORGANIZADOR (2).png",
      "/produtos/utilidade/CESTO ORGANIZADOR (3).png",
      "/produtos/utilidade/CESTO ORGANIZADOR (4).png",
      "/produtos/utilidade/CESTO ORGANIZADOR (5).png"
      ]
    },
    {
      nome: "Coelho de Páscoa Porta ovos e doces",
      preco: 22.00,
      imagens: [
      "/produtos/utilidade/COELHO COM TIGELA NA MAO (1).png",
      "/produtos/utilidade/COELHO COM TIGELA NA MAO (2).png",
      "/produtos/utilidade/COELHO COM TIGELA NA MAO (3).png",
      "/produtos/utilidade/COELHO COM TIGELA NA MAO (4).png",
      "/produtos/utilidade/COELHO COM TIGELA NA MAO (5).png",
      ]
    },
    {
      nome: "Coletor de Pó com Adaptador DE Garrafa",
      preco: 9.00,
      imagens: [
      "/produtos/utilidade/COLETOR DE PO1.png",
      "/produtos/utilidade/COLETOR DE PO2.png",
      "/produtos/utilidade/COLETOR DE PO3.png",
      "/produtos/utilidade/COLETOR DE PO5.png",
      ]
    },
    {
      nome: "Kit Cortadores Massas Doces",
      preco: 11.50,
      imagens: [
      "/produtos/utilidade/KIT FORMA PASCOA (1).png",
      "/produtos/utilidade/KIT FORMA PASCOA (2).png",
      "/produtos/utilidade/KIT FORMA PASCOA (3).png",
      "/produtos/utilidade/KIT FORMA PASCOA (4).png",
      "/produtos/utilidade/KIT FORMA PASCOA (5).png",
      "/produtos/utilidade/KIT FORMA PASCOA (6).png",
      "/produtos/utilidade/KIT FORMA PASCOA (7).png",
      ]
    },
    {
      nome: "Organizador 10 jogos - PS4",
      preco: 20.50,
      imagens: [
      "/produtos/utilidade/ORGANIZADOR JOGOS PS4.jpg",
      "/produtos/utilidade/ORGANIZADOR JOGOS PSS41.png",
      "/produtos/utilidade/ORGANIZADOR JOGOS PSS42.png",
      "/produtos/utilidade/ORGANIZADOR JOGOS PSS43.png",
      "/produtos/utilidade/ORGANIZADOR JOGOS PSS44.png",
      ]
    },
    {
      nome: "Organizador 10 jogos - PS5",
      preco: 20.50,
      imagens: [
      "/produtos/utilidade/ORGANIZADOR PS52.png",
      "/produtos/utilidade/ORGANIZADOR PS53.png",
      "/produtos/utilidade/ORGANIZADOR PS54.png",
      "/produtos/utilidade/ORGANIZADOR JOGOS PS5.png"
      ]
    },
    {
      nome: "Porta lápis caneta caneta trançado",
      preco: 18.00,
      imagens: [
      "/produtos/utilidade/PORTA LAPIS CANETA (1).png",
      "/produtos/utilidade/PORTA LAPIS CANETA (2).png",
      "/produtos/utilidade/PORTA LAPIS CANETA (3).png",
      "/produtos/utilidade/PORTA LAPIS CANETA (4).png",
      "/produtos/utilidade/PORTA LAPIS CANETA (5).png",
      ]
    },
    {
      nome: "Organizador de Cabos 40 und",
      preco: 19.00,
      imagens: [
      "/produtos/utilidade/PRESILHA PARA CABOS (1).png",
      "/produtos/utilidade/PRESILHA PARA CABOS (2).png",
      "/produtos/utilidade/PRESILHA PARA CABOS (3).png",
      ]
    },
    {
      nome: "Suporte Triplo Para 1 Headset e 2 Controles",
      preco: 30.00,
      imagens: [
      "/produtos/utilidade/SUPORTE 2 CONTROLES E HEADSET (1).png",
      "/produtos/utilidade/SUPORTE 2 CONTROLES E HEADSET (2).png",
      "/produtos/utilidade/SUPORTE 2 CONTROLES E HEADSET (3).png",
      "/produtos/utilidade/SUPORTE 2 CONTROLES E HEADSET (4).png",
      "/produtos/utilidade/SUPORTE 2 CONTROLES E HEADSET (5).png",
      "/produtos/utilidade/SUPORTE 2 CONTROLES E HEADSET (6).png",
      ]
    },
    {
      nome: "Suporte Vertical PS5 Slim Fat",
      preco: 8.50,
      imagens: [
      "/produtos/utilidade/SUPORTE BASE PS5 (1).png",
      "/produtos/utilidade/SUPORTE BASE PS5 (2).png",
      "/produtos/utilidade/SUPORTE BASE PS5 (3).png",
      "/produtos/utilidade/SUPORTE BASE PS5 (4).png",
      ]
    },
    {
      nome: "Suporte de Mesa Celular/Smartphone",
      preco: 10.00,
      imagens: [
      "/produtos/utilidade/SUPORTE CELULAR MULTCOR (1).png",
      "/produtos/utilidade/SUPORTE CELULAR MULTCOR (2).png",
      "/produtos/utilidade/SUPORTE CELULAR MULTCOR (3).png",
      "/produtos/utilidade/SUPORTE CELULAR MULTCOR (4).png",
      ]
    },
    {
      nome: "Suporte Celular de parede",
      preco: 8.00,
      imagens: [
      "/produtos/utilidade/SUPORTE CELULAR PAREDE.png",
      "/produtos/utilidade/SUPORTE CELULAR PAREDE2.png",
      "/produtos/utilidade/SUPORTE CELULAR PAREDE3.png",
      "/produtos/utilidade/SUPORTE CELULAR PAREDE4.png",
      ]
    },
    {
      nome: "Suporte para Headset",
      preco: 18.00,
      imagens: [
      "/produtos/utilidade/SUPORTE HEADSET BASICO (1).png",
      "/produtos/utilidade/SUPORTE HEADSET BASICO (2).png",
      "/produtos/utilidade/SUPORTE HEADSET BASICO (3).png",
      "/produtos/utilidade/SUPORTE HEADSET BASICO (4).png",
      "/produtos/utilidade/SUPORTE HEADSET BASICO (5).png",
      "/produtos/utilidade/SUPORTE HEADSET BASICO (6).png",
      ]
    },
    {
      nome: "Suporte de parede Headset/controle",
      preco: 10.00,
      imagens: [
      "/produtos/utilidade/SUPORTE HEADSET E CONTROLE  PLAYSTATION (1).png",
      "/produtos/utilidade/SUPORTE HEADSET E CONTROLE  PLAYSTATION (2).png",
      "/produtos/utilidade/SUPORTE HEADSET E CONTROLE  PLAYSTATION (3).png",
      "/produtos/utilidade/SUPORTE HEADSET E CONTROLE  PLAYSTATION (4).png",
      ]
    },
    {
      nome: "Suporte de mesa celular/smartphone",
      preco: 8.50,
      imagens: [
      "/produtos/utilidade/SUPORTE PRA CELULAR SIMPLES (1).png",
      "/produtos/utilidade/SUPORTE PRA CELULAR SIMPLES (2).png",
      "/produtos/utilidade/SUPORTE PRA CELULAR SIMPLES (3).png",
      "/produtos/utilidade/SUPORTE PRA CELULAR SIMPLES (4).png",
      "/produtos/utilidade/SUPORTE PRA CELULAR SIMPLES (5).png",
      ]
    },
    {
      nome: "base vertical ps4 slim",
      preco: 8.50,
      imagens: [
      "/produtos/utilidade/SUPORTE PS4 SLIM (1).png",
      "/produtos/utilidade/SUPORTE PS4 SLIM (2).png", 
      "/produtos/utilidade/SUPORTE PS4 SLIM (3).png",
      "/produtos/utilidade/SUPORTE PS4 SLIM (4).png"
      ]
    },
    {
      nome: "porta figurinha album copa 2026",
      preco: 18.00,
      imagens: [
      "/produtos/utilidade/porta figurinha (2).png",
      "/produtos/utilidade/porta figurinha (1).png"
      ]
    },

  ],

  'Decoração': [
    {
      nome: "Coelho Páscoa Textura Tricô ",
      preco: 6.50,
      imagens: [
      "/produtos/decoracao/COELHO TRICO (1).jpg",
      "/produtos/decoracao/COELHO TRICO (1).png",
      "/produtos/decoracao/COELHO TRICO (2).jpg",
      "/produtos/decoracao/COELHO TRICO (2).png",
      "/produtos/decoracao/COELHO TRICO (3).jpg",
      "/produtos/decoracao/COELHO TRICO (4).jpg"
      ]
    },
    {
      nome: "Escultura Telefone sem Fio",
      preco: 6.50,
      imagens: [
      "/produtos/decoracao/NAMORADOS TELEFONE SEM FIO (1).png",
      "/produtos/decoracao/NAMORADOS TELEFONE SEM FIO (2).png",
      "/produtos/decoracao/NAMORADOS TELEFONE SEM FIO (3).png",
      "/produtos/decoracao/NAMORADOS TELEFONE SEM FIO (4).png"
      ]
    },
    {
      nome: "Réplica taça copa do mundo 18cm",
      preco: 20.00,
      imagens: [
      "/produtos/decoracao/TACA COPA DO MUNDO.jpg",
      ]
    },
  ]
};

export const produtosMock: Produto[] = Object.entries(categoriasAgrupadas).flatMap(
  ([categoriaNome, produtos]) =>
    produtos.map((produto) => ({
      ...produto,
      categoria: categoriaNome as CategoriaProduto,
      id: crypto.randomUUID(),                      
      created_at: new Date().toISOString(),         
    }))
);