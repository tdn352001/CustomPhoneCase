const https = require('https')
const fs = require('fs')
const path = require('path')

const server = 'https://editor-api.lidojs.com/fonts?limit=30&offset=0&q='

const response = [
  {
    name: 'A Bee Zee',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/ABeeZee/ABeeZee-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/ABeeZee/ABeeZee-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/ABeeZee/ABeeZee-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Abel',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Abel/Abel-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Abril Fatface',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AbrilFatface/AbrilFatface-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Aclonica',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Aclonica/Aclonica-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Acme',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Acme/Acme-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Actor',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Actor/Actor-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Adamina',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Adamina/Adamina-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Advent Pro',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AdventPro/AdventPro-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AdventPro/AdventPro-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Aguafina Script',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AguafinaScript/AguafinaScript-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Akronim',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Akronim/Akronim-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Aladin',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Aladin/Aladin-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Alata',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Alata/Alata-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Alatsi',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Alatsi/Alatsi-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Aldrich',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Aldrich/Aldrich-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Alef',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Alef/Alef-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Alef/Alef-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Alegreya',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Alegreya/Alegreya-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Alegreya/Alegreya-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Alegreya/Alegreya-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Aleo',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Aleo/Aleo-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Aleo/Aleo-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Aleo/Aleo-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Aleo/Aleo-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Aleo/Aleo-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Aleo/Aleo-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Alex Brush',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AlexBrush/AlexBrush-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Alfa Slab One',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AlfaSlabOne/AlfaSlabOne-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Alice',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Alice/Alice-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Alike',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Alike/Alike-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Alike Angular',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AlikeAngular/AlikeAngular-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Allan',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Allan/Allan-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Allan/Allan-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Allerta',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Allerta/Allerta-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Allerta Stencil',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AllertaStencil/AllertaStencil-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Allura',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Allura/Allura-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Almarai',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Almarai/Almarai-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Almarai/Almarai-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Almendra',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Almendra/Almendra-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Almendra/Almendra-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Almendra/Almendra-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Almendra/Almendra-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Almendra/Almendra-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Almendra/Almendra-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Almendra Display',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AlmendraDisplay/AlmendraDisplay-Regular.woff2'],
      },
    ],
  },
  {
    name: 'AlmendraSC',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AlmendraSC/AlmendraSC-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Amaranth',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Amaranth/Amaranth-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Amaranth/Amaranth-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Amaranth/Amaranth-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Amaranth/Amaranth-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Amaranth/Amaranth-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Amaranth/Amaranth-Regular.woff2'],
      },
    ],
  },
  {
    name: 'AmaticSC',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AmaticSC/AmaticSC-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AmaticSC/AmaticSC-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Amethysta',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Amethysta/Amethysta-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Amiko',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Amiko/Amiko-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Amiko/Amiko-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Anaheim',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Anaheim/Anaheim-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Andada',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Andada/Andada-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Andika New Basic',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AndikaNewBasic/AndikaNewBasic-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AndikaNewBasic/AndikaNewBasic-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AndikaNewBasic/AndikaNewBasic-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AndikaNewBasic/AndikaNewBasic-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AndikaNewBasic/AndikaNewBasic-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AndikaNewBasic/AndikaNewBasic-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Annie Use Your Telescope',
    fonts: [
      {
        urls: [
          'https://lidojs-fonts.s3.us-east-2.amazonaws.com/AnnieUseYourTelescope/AnnieUseYourTelescope-Regular.woff2',
        ],
      },
    ],
  },
  {
    name: 'Anonymous Pro',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AnonymousPro/AnonymousPro-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AnonymousPro/AnonymousPro-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AnonymousPro/AnonymousPro-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AnonymousPro/AnonymousPro-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AnonymousPro/AnonymousPro-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AnonymousPro/AnonymousPro-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Antic',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Antic/Antic-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Antic Didone',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AnticDidone/AnticDidone-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Antic Slab',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AnticSlab/AnticSlab-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Anton',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Anton/Anton-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Arapey',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Arapey/Arapey-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Arapey/Arapey-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Arapey/Arapey-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Arbutus',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Arbutus/Arbutus-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Arbutus Slab',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/ArbutusSlab/ArbutusSlab-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Architects Daughter',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/ArchitectsDaughter/ArchitectsDaughter-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Archivo',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Archivo/Archivo-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Archivo/Archivo-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Archivo/Archivo-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Archivo/Archivo-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Archivo/Archivo-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Archivo/Archivo-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Archivo Black',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/ArchivoBlack/ArchivoBlack-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Aref Ruqaa',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/ArefRuqaa/ArefRuqaa-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/ArefRuqaa/ArefRuqaa-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Arima Madurai',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/ArimaMadurai/ArimaMadurai-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/ArimaMadurai/ArimaMadurai-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Arizonia',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Arizonia/Arizonia-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Armata',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Armata/Armata-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Arsenal',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Arsenal/Arsenal-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Arsenal/Arsenal-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Arsenal/Arsenal-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Arsenal/Arsenal-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Arsenal/Arsenal-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Arsenal/Arsenal-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Artifika',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Artifika/Artifika-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Arvo',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Arvo/Arvo-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Arvo/Arvo-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Arvo/Arvo-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Arvo/Arvo-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Arvo/Arvo-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Arvo/Arvo-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Arya',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Arya/Arya-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Arya/Arya-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Asap',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Asap/Asap-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Asap/Asap-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Asap/Asap-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Asap/Asap-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Asap/Asap-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Asap/Asap-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Asap Condensed',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AsapCondensed/AsapCondensed-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AsapCondensed/AsapCondensed-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AsapCondensed/AsapCondensed-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AsapCondensed/AsapCondensed-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AsapCondensed/AsapCondensed-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AsapCondensed/AsapCondensed-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Asset',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Asset/Asset-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Assistant',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Assistant/Assistant-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Assistant/Assistant-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Asul',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Asul/Asul-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Asul/Asul-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Atomic Age',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AtomicAge/AtomicAge-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Audiowide',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Audiowide/Audiowide-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Autour One',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AutourOne/AutourOne-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Average',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Average/Average-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Average Sans',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AverageSans/AverageSans-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Averia Gruesa Libre',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AveriaGruesaLibre/AveriaGruesaLibre-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Averia Libre',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AveriaLibre/AveriaLibre-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AveriaLibre/AveriaLibre-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AveriaLibre/AveriaLibre-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AveriaLibre/AveriaLibre-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AveriaLibre/AveriaLibre-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AveriaLibre/AveriaLibre-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Averia Sans Libre',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AveriaSansLibre/AveriaSansLibre-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AveriaSansLibre/AveriaSansLibre-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AveriaSansLibre/AveriaSansLibre-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AveriaSansLibre/AveriaSansLibre-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AveriaSansLibre/AveriaSansLibre-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AveriaSansLibre/AveriaSansLibre-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Averia Serif Libre',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AveriaSerifLibre/AveriaSerifLibre-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AveriaSerifLibre/AveriaSerifLibre-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AveriaSerifLibre/AveriaSerifLibre-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AveriaSerifLibre/AveriaSerifLibre-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AveriaSerifLibre/AveriaSerifLibre-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/AveriaSerifLibre/AveriaSerifLibre-Regular.woff2'],
      },
    ],
  },
  {
    name: 'B612',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/B612/B612-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/B612/B612-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/B612/B612-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/B612/B612-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/B612/B612-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/B612/B612-Regular.woff2'],
      },
    ],
  },
  {
    name: 'B612 Mono',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/B612Mono/B612Mono-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/B612Mono/B612Mono-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/B612Mono/B612Mono-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/B612Mono/B612Mono-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/B612Mono/B612Mono-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/B612Mono/B612Mono-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Bad Script',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BadScript/BadScript-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Bahiana',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Bahiana/Bahiana-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Bahianita',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Bahianita/Bahianita-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Bai Jamjuree',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BaiJamjuree/BaiJamjuree-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BaiJamjuree/BaiJamjuree-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BaiJamjuree/BaiJamjuree-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BaiJamjuree/BaiJamjuree-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BaiJamjuree/BaiJamjuree-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BaiJamjuree/BaiJamjuree-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Ballet',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Ballet/Ballet-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Balthazar',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Balthazar/Balthazar-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Bangers',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Bangers/Bangers-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Barlow',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Barlow/Barlow-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Barlow/Barlow-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Barlow/Barlow-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Barlow/Barlow-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Barlow/Barlow-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Barlow/Barlow-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Barlow Condensed',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BarlowCondensed/BarlowCondensed-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BarlowCondensed/BarlowCondensed-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BarlowCondensed/BarlowCondensed-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BarlowCondensed/BarlowCondensed-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BarlowCondensed/BarlowCondensed-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BarlowCondensed/BarlowCondensed-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Barlow Semi Condensed',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BarlowSemiCondensed/BarlowSemiCondensed-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BarlowSemiCondensed/BarlowSemiCondensed-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BarlowSemiCondensed/BarlowSemiCondensed-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BarlowSemiCondensed/BarlowSemiCondensed-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BarlowSemiCondensed/BarlowSemiCondensed-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BarlowSemiCondensed/BarlowSemiCondensed-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Basic',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Basic/Basic-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Battambang',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Battambang/Battambang-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Battambang/Battambang-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Bebas Neue',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BebasNeue/BebasNeue-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Belgrano',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Belgrano/Belgrano-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Bellefair',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Bellefair/Bellefair-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Belleza',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Belleza/Belleza-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Bellota',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Bellota/Bellota-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Bellota/Bellota-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Bellota/Bellota-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Bellota/Bellota-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Bellota/Bellota-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Bellota/Bellota-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Bellota Text',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BellotaText/BellotaText-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BellotaText/BellotaText-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BellotaText/BellotaText-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BellotaText/BellotaText-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BellotaText/BellotaText-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BellotaText/BellotaText-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Bench Nine',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BenchNine/BenchNine-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BenchNine/BenchNine-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Bentham',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Bentham/Bentham-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Berkshire Swash',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BerkshireSwash/BerkshireSwash-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Bernat Burnoe',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BernatBurnoe/BernatBurnoe-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BernatBurnoe/BernatBurnoe-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BernatBurnoe/BernatBurnoe-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Beth Ellen',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BethEllen/BethEllen-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Bevan',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/Bevan/Bevan-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Be Vietnam',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BeVietnam/BeVietnam-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BeVietnam/BeVietnam-Bold.woff2'],
        style: 'Bold_Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BeVietnam/BeVietnam-Bold.woff2'],
        style: 'Bold',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BeVietnam/BeVietnam-Regular.woff2'],
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BeVietnam/BeVietnam-Regular.woff2'],
        style: 'Italic',
      },
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BeVietnam/BeVietnam-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Bigelow Rules',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BigelowRules/BigelowRules-Regular.woff2'],
      },
    ],
  },
  {
    name: 'Bigshot One',
    fonts: [
      {
        urls: ['https://lidojs-fonts.s3.us-east-2.amazonaws.com/BigshotOne/BigshotOne-Regular.woff2'],
      },
    ],
  },
]

const download = (url, dest, cb) => {
  // Ensure all directories exist
  fs.mkdirSync(path.dirname(dest), { recursive: true })

  const file = fs.createWriteStream(dest)
  https.get(url, (response) => {
    response.pipe(file)
    file.on('finish', () => {
      file.close(cb)
    })
  })
}

const downloadFonts = async () => {
  for (let i = 0; i < fonts.length; i++) {
    const fontObj = fonts[i]

    for (const font of fontObj.fonts) {
      const url = font.urls[0]
      const fileName = path.basename(url)
      const dest = path.join('public', 'fonts', fontObj.name, fileName)
      console.log({ dest })
      await new Promise((resolve, reject) => {
        download(url, dest, (err) => {
          if (err) {
            console.error(`Failed to download ${fileName}`)
            reject(err)
          } else {
            console.log(`Downloaded ${fileName}`)
            resolve()
          }
        })
      })
    }
  }
}

downloadFonts()
