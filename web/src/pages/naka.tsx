import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.scss";
import dynamic from "next/dynamic";
import { Col, Container, Row } from "react-bootstrap";
import HeaderPlaceholder from "@/components/header/HeaderPlaceholder";

const Header = dynamic(() => import("../components/header/Header"), {
  ssr: false,
  loading: () => <HeaderPlaceholder />,
});

type NakaText = {
  [key: string]: {
    id: number;
    language: string;
    languageEn: string;
    title: string;
    explainer: string;
    mintUrl: string;
  };
};

export default function Naka(props: any) {
  const { locale, locales } = props.context;
  const { asPath } = useRouter();
  const local = nakaText[locale];

  return (
    <>
      <Head>
        <title>Naka 365 | The OM Pub</title>
        <meta
          property="og:url"
          content={`https://om.pub/naka`}
        />
        <meta
          property="og:title"
          content={`Naka 365 | The OM Pub`}
        />
        <meta property="og:image" content={`/om-pub-logo.gif`} />
      </Head>
      <Header />
      <Container className={`${styles.main}`}>
        <Row>
          <Col md={2}>
            <div
              style={{
                padding: "4px",
                marginRight: "4px",
              }}
            >
              <span
                style={{
                  borderRadius: "3px",
                  backgroundColor: "blue",
                  color: "white",
                  padding: "2px",
                }}
              >
                {locale}: {local.language} ({local.languageEn})
              </span>
            </div>
            <div>
              <ul>
                {locales.map((loc: string) => (
                  <li key={loc}>
                    <Link key={loc} href={asPath} locale={loc}>
                      {loc}: {nakaText[loc].language}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <div>
                <h2>{local.title}</h2>
                <p>
                  {local.explainer}
                </p>
              </div>
              <div style={{ color: "#ccc" }}>
                <h3>How's the translation?</h3>
                <p>
                  Does this translation seem correct? Can you improve it or offer a suggestion? Tweet your thoughts to <a href="https://twitter.com/om_pub_" target="_blank">OM_Pub_</a>, with hashtag #naka-{locale}. Thanks!
                </p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <img src={`/naka/naka-en-US.jpeg` /* ${locale}.jpeg */} alt={`Nakamoto Freedom: ${locale}`} className={`img-fluid`} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export const getStaticProps = async (context: any) => {
  return {
    props: { context },
  };
};


const nakaText: NakaText = {
  "en": {
    "id": 1,
    "language": "English",
    "languageEn": "English",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ceb": {
    "id": 2,
    "language": "Sinugboanong Binisaya",
    "languageEn": "Cebuano",
    "title": "Kagawasan sa Pag-Transact",
    "explainer": "Ang kalayaan sa pag-transact nagtukod sa tanang uban nga mga katungod sa konstitusyon. Kung walay kalayaan sa pag-transact, wala kay uban nga mga katungod sa konstitusyon.",
    "mintUrl": ""
  },
  "de": {
    "id": 3,
    "language": "Deutsch",
    "languageEn": "German",
    "title": "Transaktionsfreiheit",
    "explainer": "Die Freiheit zu handeln ist die Grundlage aller anderen verfassungsm\u00e4\u00dfigen Rechte. Ohne die Freiheit zu handeln, hast du keine anderen verfassungsm\u00e4\u00dfigen Rechte.",
    "mintUrl": ""
  },
  "sv": {
    "id": 4,
    "language": "Svenska",
    "languageEn": "Swedish",
    "title": "Frihet att genomf\u00f6ra transaktioner",
    "explainer": "Frihet att genomf\u00f6ra transaktioner ligger till grund f\u00f6r alla andra konstitutionella r\u00e4ttigheter. Utan friheten att genomf\u00f6ra transaktioner har du inga andra konstitutionella r\u00e4ttigheter.",
    "mintUrl": ""
  },
  "fr": {
    "id": 5,
    "language": "Fran\u00e7ais",
    "languageEn": "French",
    "title": "La libert\u00e9 de transaction",
    "explainer": "La libert\u00e9 de transaction est \u00e0 la base de tous les autres droits constitutionnels. Sans la libert\u00e9 de transaction, vous n'avez aucun autre droit constitutionnel.",
    "mintUrl": ""
  },
  "nl": {
    "id": 6,
    "language": "Nederlands",
    "languageEn": "Dutch",
    "title": "Vrijheid om te transacteren",
    "explainer": "Vrijheid om te handelen is de basis van alle andere grondwettelijke rechten. Zonder de vrijheid om te handelen heb je geen andere grondwettelijke rechten.",
    "mintUrl": ""
  },
  "ru": {
    "id": 7,
    "language": "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
    "languageEn": "Russian",
    "title": "\u0421\u0432\u043e\u0431\u043e\u0434\u0430 \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u0442\u044c \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438",
    "explainer": "\u0421\u0432\u043e\u0431\u043e\u0434\u0430 \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u0442\u044c \u0441\u0434\u0435\u043b\u043a\u0438 \u043b\u0435\u0436\u0438\u0442 \u0432 \u043e\u0441\u043d\u043e\u0432\u0435 \u0432\u0441\u0435\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u043a\u043e\u043d\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u043f\u0440\u0430\u0432. \u0411\u0435\u0437 \u0441\u0432\u043e\u0431\u043e\u0434\u044b \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0441\u0434\u0435\u043b\u043e\u043a \u0443 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u043a\u043e\u043d\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u043f\u0440\u0430\u0432.",
    "mintUrl": ""
  },
  "es": {
    "id": 8,
    "language": "Espa\u00f1ol",
    "languageEn": "Spanish",
    "title": "Libertad para Transaccionar",
    "explainer": "La libertad de transacci\u00f3n subyace a todos los dem\u00e1s derechos constitucionales. Sin la libertad de transacci\u00f3n, no tienes ning\u00fan otro derecho constitucional.",
    "mintUrl": ""
  },
  "it": {
    "id": 9,
    "language": "Italiano",
    "languageEn": "Italian",
    "title": "Libert\u00e0 di transazione",
    "explainer": "La libert\u00e0 di transazione sottende tutti gli altri diritti costituzionali. Senza la libert\u00e0 di transazione, non hai altri diritti costituzionali.",
    "mintUrl": ""
  },
  "arz": {
    "id": 10,
    "language": "\u0645\u0635\u0631\u0649 (Ma\u1e63r\u012b)",
    "languageEn": "Egyptian Arabic",
    "title": "\u062d\u0631\u064a\u0629 \u0627\u0644\u062a\u062d\u0648\u064a\u0644\u0627\u062a",
    "explainer": "\u0627\u0644\u062d\u0631\u064a\u0629 \u0641\u064a \u0627\u0644\u062a\u0639\u0627\u0645\u0644\u0627\u062a \u062a\u0642\u0648\u0645 \u0639\u0644\u0649 \u0623\u0633\u0627\u0633 \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0627\u0644\u062f\u0633\u062a\u0648\u0631\u064a\u0629 \u0627\u0644\u0623\u062e\u0631\u0649. \u0628\u062f\u0648\u0646 \u062d\u0631\u064a\u0629 \u0627\u0644\u062a\u0639\u0627\u0645\u0644\u060c \u0644\u0627 \u064a\u0648\u062c\u062f \u0644\u062f\u064a\u0643 \u0623\u064a \u062d\u0642\u0648\u0642 \u062f\u0633\u062a\u0648\u0631\u064a\u0629 \u0623\u062e\u0631\u0649.",
    "mintUrl": ""
  },
  "pl": {
    "id": 11,
    "language": "Polski",
    "languageEn": "Polish",
    "title": "Wolno\u015b\u0107 do dokonywania transakcji",
    "explainer": "Wolno\u015b\u0107 dokonywania transakcji le\u017cy u podstaw wszystkich innych praw konstytucyjnych. Bez wolno\u015bci dokonywania transakcji, nie posiadasz \u017cadnych innych praw konstytucyjnych.",
    "mintUrl": ""
  },
  "ja": {
    "id": 12,
    "language": "\u65e5\u672c\u8a9e",
    "languageEn": "Japanese",
    "title": "\u53d6\u5f15\u306e\u81ea\u7531",
    "explainer": "\u3059\u3079\u3066\u306e\u61b2\u6cd5\u4e0a\u306e\u6a29\u5229\u306e\u6839\u672c\u306b\u306f\u3001\u53d6\u5f15\u306e\u81ea\u7531\u304c\u3042\u308a\u307e\u3059\u3002\u53d6\u5f15\u306e\u81ea\u7531\u304c\u306a\u3051\u308c\u3070\u3001\u4ed6\u306b\u3069\u3093\u306a\u61b2\u6cd5\u4e0a\u306e\u6a29\u5229\u3082\u3042\u308a\u307e\u305b\u3093\u3002",
    "mintUrl": ""
  },
  "zh": {
    "id": 13,
    "language": "\u4e2d\u6587",
    "languageEn": "Chinese",
    "title": "\u81ea\u7531\u4ea4\u6613",
    "explainer": "\u81ea\u7531\u4ea4\u6613\u662f\u6240\u6709\u5baa\u6cd5\u6743\u5229\u7684\u57fa\u7840\u3002\u5982\u679c\u6ca1\u6709\u81ea\u7531\u4ea4\u6613\uff0c\u60a8\u5c31\u6ca1\u6709\u5176\u4ed6\u5baa\u6cd5\u6743\u5229\u3002",
    "mintUrl": ""
  },
  "vi": {
    "id": 14,
    "language": "Ti\u1ebfng Vi\u1ec7t",
    "languageEn": "Vietnamese",
    "title": "T\u1ef1 do giao d\u1ecbch",
    "explainer": "T\u1ef1 do giao d\u1ecbch l\u00e0 n\u1ec1n t\u1ea3ng c\u1ee7a t\u1ea5t c\u1ea3 c\u00e1c quy\u1ec1n h\u1ea1n hi\u1ebfn ph\u00e1p kh\u00e1c. N\u1ebfu kh\u00f4ng c\u00f3 t\u1ef1 do giao d\u1ecbch, b\u1ea1n kh\u00f4ng c\u00f3 b\u1ea5t k\u1ef3 quy\u1ec1n h\u1ea1n hi\u1ebfn ph\u00e1p n\u00e0o kh\u00e1c.",
    "mintUrl": ""
  },
  "war": {
    "id": 15,
    "language": "Winaray",
    "languageEn": "Waray-Waray",
    "title": "Kagawasan nga magbuhat hin transaksiyon",
    "explainer": "An kagawasan nga magtransakto amo an nagpapabilin ha iba nga mga katungod ha konstitusyon. Waray ka mga iba nga mga katungod ha konstitusyon kun waray ka kagawasan nga magtransakto.",
    "mintUrl": ""
  },
  "uk": {
    "id": 16,
    "language": "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
    "languageEn": "Ukrainian",
    "title": "\u0421\u0432\u043e\u0431\u043e\u0434\u0430 \u0437\u0434\u0456\u0439\u0441\u043d\u0435\u043d\u043d\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0439",
    "explainer": "\u0421\u0432\u043e\u0431\u043e\u0434\u0430 \u0437\u0434\u0456\u0439\u0441\u043d\u0435\u043d\u043d\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0439 \u043b\u0435\u0436\u0438\u0442\u044c \u0432 \u043e\u0441\u043d\u043e\u0432\u0456 \u0432\u0441\u0456\u0445 \u0456\u043d\u0448\u0438\u0445 \u043a\u043e\u043d\u0441\u0442\u0438\u0442\u0443\u0446\u0456\u0439\u043d\u0438\u0445 \u043f\u0440\u0430\u0432. \u0411\u0435\u0437 \u0441\u0432\u043e\u0431\u043e\u0434\u0438 \u0437\u0434\u0456\u0439\u0441\u043d\u0435\u043d\u043d\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0439 \u0432\u0438 \u043d\u0435 \u043c\u0430\u0454\u0442\u0435 \u0456\u043d\u0448\u0438\u0445 \u043a\u043e\u043d\u0441\u0442\u0438\u0442\u0443\u0446\u0456\u0439\u043d\u0438\u0445 \u043f\u0440\u0430\u0432.",
    "mintUrl": ""
  },
  "ar": {
    "id": 17,
    "language": "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
    "languageEn": "Arabic",
    "title": "\u062d\u0631\u064a\u0629 \u0627\u0644\u062a\u0639\u0627\u0645\u0644",
    "explainer": "\u0627\u0644\u062d\u0631\u064a\u0629 \u0641\u064a \u0627\u0644\u062a\u0639\u0627\u0645\u0644 \u062a\u0643\u0645\u0646 \u0641\u064a \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0627\u0644\u062f\u0633\u062a\u0648\u0631\u064a\u0629 \u0627\u0644\u0623\u062e\u0631\u0649. \u0628\u062f\u0648\u0646 \u062d\u0631\u064a\u0629 \u0627\u0644\u062a\u0639\u0627\u0645\u0644\u060c \u0644\u0627 \u064a\u0648\u062c\u062f \u0644\u062f\u064a\u0643 \u0623\u064a \u062d\u0642\u0648\u0642 \u062f\u0633\u062a\u0648\u0631\u064a\u0629 \u0623\u062e\u0631\u0649.",
    "mintUrl": ""
  },
  "pt": {
    "id": 18,
    "language": "Portugu\u00eas",
    "languageEn": "Portuguese",
    "title": "Liberdade de Transação",
    "explainer": "A liberdade de transacionar \u00e9 a base de todos os outros direitos constitucionais. Sem a liberdade de transacionar, voc\u00ea n\u00e3o tem nenhum outro direito constitucional.",
    "mintUrl": ""
  },
  "fa": {
    "id": 19,
    "language": "\u0641\u0627\u0631\u0633\u06cc",
    "languageEn": "Persian",
    "title": "\u0622\u0632\u0627\u062f\u06cc\u0020\u062f\u0631\u0020\u0627\u0646\u062c\u0627\u0645\u0020\u0645\u0639\u0627\u0645\u0644\u0627\u062a",
    "explainer": "\u0622\u0632\u0627\u062f\u06cc \u062a\u0631\u0627\u06a9\u0646\u0634\u060c \u067e\u0627\u06cc\u0647 \u062a\u0645\u0627\u0645\u06cc \u062d\u0642\u0648\u0642 \u0642\u0627\u0646\u0648\u0646 \u0627\u0633\u0627\u0633\u06cc \u062f\u06cc\u06af\u0631 \u0627\u0633\u062a. \u0628\u062f\u0648\u0646 \u0622\u0632\u0627\u062f\u06cc \u062a\u0631\u0627\u06a9\u0646\u0634\u060c \u0647\u06cc\u0686 \u062d\u0642\u0648\u0642 \u0642\u0627\u0646\u0648\u0646 \u0627\u0633\u0627\u0633\u06cc \u062f\u06cc\u06af\u0631\u06cc \u0646\u062f\u0627\u0631\u06cc\u062f.",
    "mintUrl": ""
  },
  "ca": {
    "id": 20,
    "language": "Catal\u00e0",
    "languageEn": "Catalan",
    "title": "Llibertat per a transaccionar",
    "explainer": "La llibertat de transacci\u00f3 \u00e9s la base de tots els altres drets constitucionals. Sense la llibertat de transacci\u00f3, no tens cap altre dret constitucional.",
    "mintUrl": ""
  },
  "sr": {
    "id": 21,
    "language": "\u0421\u0440\u043f\u0441\u043a\u0438 / Srpski",
    "languageEn": "Serbian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "id": {
    "id": 22,
    "language": "Bahasa Indonesia",
    "languageEn": "Indonesian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ko": {
    "id": 23,
    "language": "\ud55c\uad6d\uc5b4",
    "languageEn": "Korean",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "no": {
    "id": 24,
    "language": "Norsk (Bokm\u00e5l)",
    "languageEn": "Norwegian (Bokm\u00e5l)",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ce": {
    "id": 25,
    "language": "\u041d\u043e\u0445\u0447\u0438\u0439\u043d",
    "languageEn": "Chechen",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "fi": {
    "id": 26,
    "language": "Suomi",
    "languageEn": "Finnish",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "hu": {
    "id": 27,
    "language": "Magyar",
    "languageEn": "Hungarian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "cs": {
    "id": 28,
    "language": "\u010ce\u0161tina",
    "languageEn": "Czech",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "tr": {
    "id": 29,
    "language": "T\u00fcrk\u00e7e",
    "languageEn": "Turkish",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "tt": {
    "id": 30,
    "language": "Tatar\u00e7a / \u0422\u0430\u0442\u0430\u0440\u0447\u0430",
    "languageEn": "Tatar",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "sh": {
    "id": 31,
    "language": "Srpskohrvatski / \u0421\u0440\u043f\u0441\u043a\u043e\u0445\u0440\u0432\u0430\u0442\u0441\u043a\u0438",
    "languageEn": "Serbo-Croatian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ro": {
    "id": 32,
    "language": "Rom\u00e2n\u0103",
    "languageEn": "Romanian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "zh-min-nan": {
    "id": 33,
    "language": "B\u00e2n-l\u00e2m-g\u00fa",
    "languageEn": "Min Nan",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "eu": {
    "id": 34,
    "language": "Euskara",
    "languageEn": "Basque",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ms": {
    "id": 35,
    "language": "Bahasa Melayu",
    "languageEn": "Malay",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "eo": {
    "id": 36,
    "language": "Esperanto",
    "languageEn": "Esperanto",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "he": {
    "id": 37,
    "language": "\u05e2\u05d1\u05e8\u05d9\u05ea",
    "languageEn": "Hebrew",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "hy": {
    "id": 38,
    "language": "\u0540\u0561\u0575\u0565\u0580\u0565\u0576",
    "languageEn": "Armenian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "da": {
    "id": 39,
    "language": "Dansk",
    "languageEn": "Danish",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "bg": {
    "id": 40,
    "language": "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438",
    "languageEn": "Bulgarian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "cy": {
    "id": 41,
    "language": "Cymraeg",
    "languageEn": "Welsh",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "sk": {
    "id": 42,
    "language": "Sloven\u010dina",
    "languageEn": "Slovak",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "azb": {
    "id": 43,
    "language": "\u062a\u06c6\u0631\u06a9\u062c\u0647",
    "languageEn": "South Azerbaijani",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "et": {
    "id": 44,
    "language": "Eesti",
    "languageEn": "Estonian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "uz": {
    "id": 45,
    "language": "O\u2018zbek",
    "languageEn": "Uzbek",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "kk": {
    "id": 46,
    "language": "\u049a\u0430\u0437\u0430\u049b\u0448\u0430",
    "languageEn": "Kazakh",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "be": {
    "id": 47,
    "language": "\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f",
    "languageEn": "Belarusian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "simple": {
    "id": 48,
    "language": "Simple English",
    "languageEn": "Simple English",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "min": {
    "id": 49,
    "language": "Baso Minangkabau",
    "languageEn": "Minangkabau",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "el": {
    "id": 50,
    "language": "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
    "languageEn": "Greek",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "hr": {
    "id": 51,
    "language": "Hrvatski",
    "languageEn": "Croatian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "lt": {
    "id": 52,
    "language": "Lietuvi\u0173",
    "languageEn": "Lithuanian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "gl": {
    "id": 53,
    "language": "Galego",
    "languageEn": "Galician",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "az": {
    "id": 54,
    "language": "Az\u0259rbaycanca",
    "languageEn": "Azerbaijani",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ur": {
    "id": 55,
    "language": "\u0627\u0631\u062f\u0648",
    "languageEn": "Urdu",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "sl": {
    "id": 56,
    "language": "Sloven\u0161\u010dina",
    "languageEn": "Slovenian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ka": {
    "id": 57,
    "language": "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",
    "languageEn": "Georgian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "nn": {
    "id": 58,
    "language": "Nynorsk",
    "languageEn": "Norwegian (Nynorsk)",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "hi": {
    "id": 59,
    "language": "\u0939\u093f\u0928\u094d\u0926\u0940",
    "languageEn": "Hindi",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "th": {
    "id": 60,
    "language": "\u0e44\u0e17\u0e22",
    "languageEn": "Thai",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ta": {
    "id": 61,
    "language": "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",
    "languageEn": "Tamil",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "la": {
    "id": 62,
    "language": "Latina",
    "languageEn": "Latin",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "bn": {
    "id": 63,
    "language": "\u09ac\u09be\u0982\u09b2\u09be",
    "languageEn": "Bengali",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "mk": {
    "id": 64,
    "language": "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438",
    "languageEn": "Macedonian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ast": {
    "id": 65,
    "language": "Asturianu",
    "languageEn": "Asturian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "zh-yue": {
    "id": 66,
    "language": "\u7cb5\u8a9e",
    "languageEn": "Cantonese",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "lld": {
    "id": 67,
    "language": "Ladin",
    "languageEn": "Ladin",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "lv": {
    "id": 68,
    "language": "Latvie\u0161u",
    "languageEn": "Latvian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "tg": {
    "id": 69,
    "language": "\u0422\u043e\u04b7\u0438\u043a\u04e3",
    "languageEn": "Tajik",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "af": {
    "id": 70,
    "language": "Afrikaans",
    "languageEn": "Afrikaans",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "my": {
    "id": 71,
    "language": "\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c",
    "languageEn": "Burmese",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "mg": {
    "id": 72,
    "language": "Malagasy",
    "languageEn": "Malagasy",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "bs": {
    "id": 73,
    "language": "Bosanski",
    "languageEn": "Bosnian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "mr": {
    "id": 74,
    "language": "\u092e\u0930\u093e\u0920\u0940",
    "languageEn": "Marathi",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "sq": {
    "id": 75,
    "language": "Shqip",
    "languageEn": "Albanian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "oc": {
    "id": 76,
    "language": "Occitan",
    "languageEn": "Occitan",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "nds": {
    "id": 77,
    "language": "Plattd\u00fc\u00fctsch",
    "languageEn": "Low Saxon",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ml": {
    "id": 78,
    "language": "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",
    "languageEn": "Malayalam",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "be-tarask": {
    "id": 79,
    "language": "\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f (\u0442\u0430\u0440\u0430\u0448\u043a\u0435\u0432\u0456\u0446\u0430)",
    "languageEn": "Belarusian (Tara\u0161kievica)",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "te": {
    "id": 80,
    "language": "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41",
    "languageEn": "Telugu",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ky": {
    "id": 81,
    "language": "\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430",
    "languageEn": "Kirghiz",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "br": {
    "id": 82,
    "language": "Brezhoneg",
    "languageEn": "Breton",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "sw": {
    "id": 83,
    "language": "Kiswahili",
    "languageEn": "Swahili",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "jv": {
    "id": 84,
    "language": "Basa Jawa",
    "languageEn": "Javanese",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "new": {
    "id": 85,
    "language": "\u0928\u0947\u092a\u093e\u0932 \u092d\u093e\u0937\u093e",
    "languageEn": "Newar / Nepal Bhasa",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "vec": {
    "id": 86,
    "language": "V\u00e8neto",
    "languageEn": "Venetian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "pnb": {
    "id": 87,
    "language": "\u0634\u0627\u06c1 \u0645\u06a9\u06be\u06cc \u067e\u0646\u062c\u0627\u0628\u06cc (Sh\u0101hmukh\u012b Pa\u00f1j\u0101b\u012b)",
    "languageEn": "Western Panjabi",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ht": {
    "id": 88,
    "language": "Kr\u00e8yol ayisyen",
    "languageEn": "Haitian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "pms": {
    "id": 89,
    "language": "Piemont\u00e8is",
    "languageEn": "Piedmontese",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ba": {
    "id": 90,
    "language": "\u0411\u0430\u0448\u04a1\u043e\u0440\u0442",
    "languageEn": "Bashkir",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "lb": {
    "id": 91,
    "language": "L\u00ebtzebuergesch",
    "languageEn": "Luxembourgish",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "su": {
    "id": 92,
    "language": "Basa Sunda",
    "languageEn": "Sundanese",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ku": {
    "id": 93,
    "language": "Kurd\u00ee / \u0643\u0648\u0631\u062f\u06cc",
    "languageEn": "Kurdish",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ga": {
    "id": 94,
    "language": "Gaeilge",
    "languageEn": "Irish",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "lmo": {
    "id": 95,
    "language": "Lumbaart",
    "languageEn": "Lombard",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "szl": {
    "id": 96,
    "language": "\u015al\u016fnski",
    "languageEn": "Silesian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "is": {
    "id": 97,
    "language": "\u00cdslenska",
    "languageEn": "Icelandic",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "fy": {
    "id": 98,
    "language": "Frysk",
    "languageEn": "West Frisian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "cv": {
    "id": 99,
    "language": "\u0427\u0103\u0432\u0430\u0448",
    "languageEn": "Chuvash",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ckb": {
    "id": 100,
    "language": "Soran\u00ee / \u06a9\u0648\u0631\u062f\u06cc",
    "languageEn": "Sorani",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "pa": {
    "id": 101,
    "language": "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40",
    "languageEn": "Punjabi",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "tl": {
    "id": 102,
    "language": "Tagalog",
    "languageEn": "Tagalog",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "an": {
    "id": 103,
    "language": "Aragon\u00e9s",
    "languageEn": "Aragonese",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "wuu": {
    "id": 104,
    "language": "\u5434\u8bed",
    "languageEn": "Wu",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "diq": {
    "id": 105,
    "language": "Zazaki",
    "languageEn": "Zazaki",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "io": {
    "id": 106,
    "language": "Ido",
    "languageEn": "Ido",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "sco": {
    "id": 107,
    "language": "Scots",
    "languageEn": "Scots",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "vo": {
    "id": 108,
    "language": "Volap\u00fck",
    "languageEn": "Volap\u00fck",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "yo": {
    "id": 109,
    "language": "Yor\u00f9b\u00e1",
    "languageEn": "Yoruba",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ne": {
    "id": 110,
    "language": "\u0928\u0947\u092a\u093e\u0932\u0940",
    "languageEn": "Nepali",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ia": {
    "id": 111,
    "language": "Interlingua",
    "languageEn": "Interlingua",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "gu": {
    "id": 112,
    "language": "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0",
    "languageEn": "Gujarati",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "kn": {
    "id": 113,
    "language": "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1",
    "languageEn": "Kannada",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "als": {
    "id": 114,
    "language": "Alemannisch",
    "languageEn": "Alemannic",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "avk": {
    "id": 115,
    "language": "Kotava",
    "languageEn": "Kotava",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "bar": {
    "id": 116,
    "language": "Boarisch",
    "languageEn": "Bavarian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "scn": {
    "id": 117,
    "language": "Sicilianu",
    "languageEn": "Sicilian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "bpy": {
    "id": 118,
    "language": "\u0987\u09ae\u09be\u09b0 \u09a0\u09be\u09b0/\u09ac\u09bf\u09b7\u09cd\u09a3\u09c1\u09aa\u09cd\u09b0\u09bf\u09af\u09bc\u09be \u09ae\u09a3\u09bf\u09aa\u09c1\u09b0\u09c0",
    "languageEn": "Bishnupriya Manipuri",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ha": {
    "id": 119,
    "language": "\u0647\u064e\u0648\u064f\u0633\u064e",
    "languageEn": "Hausa",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "crh": {
    "id": 120,
    "language": "Q\u0131r\u0131mtatarca",
    "languageEn": "Crimean Tatar",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "qu": {
    "id": 121,
    "language": "Runa Simi",
    "languageEn": "Quechua",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "nv": {
    "id": 122,
    "language": "Din\u00e9 bizaad",
    "languageEn": "Navajo",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "mn": {
    "id": 123,
    "language": "\u041c\u043e\u043d\u0433\u043e\u043b",
    "languageEn": "Mongolian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "xmf": {
    "id": 124,
    "language": "\u10db\u10d0\u10e0\u10d2\u10d0\u10da\u10e3\u10e0\u10d8 (Margaluri)",
    "languageEn": "Mingrelian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "si": {
    "id": 125,
    "language": "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd",
    "languageEn": "Sinhalese",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ban": {
    "id": 126,
    "language": "Bali",
    "languageEn": "Balinese",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ps": {
    "id": 127,
    "language": "\u067e\u069a\u062a\u0648",
    "languageEn": "Pashto",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "frr": {
    "id": 128,
    "language": "Nordfriisk",
    "languageEn": "North Frisian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "bat-smg": {
    "id": 129,
    "language": "\u017demait\u0117\u0161ka",
    "languageEn": "Samogitian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "os": {
    "id": 130,
    "language": "\u0418\u0440\u043e\u043d\u0430\u0443",
    "languageEn": "Ossetian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "or": {
    "id": 131,
    "language": "\u0b13\u0b5c\u0b3f\u0b06",
    "languageEn": "Oriya",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "sah": {
    "id": 132,
    "language": "\u0421\u0430\u0445\u0430 \u0442\u044b\u043b\u0430 (Saxa Tyla)",
    "languageEn": "Sakha",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "cdo": {
    "id": 133,
    "language": "M\u00ecng-d\u0115\u0324ng-ng\u1e73\u0304",
    "languageEn": "Min Dong",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "gd": {
    "id": 134,
    "language": "G\u00e0idhlig",
    "languageEn": "Scottish Gaelic",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "bug": {
    "id": 135,
    "language": "Basa Ugi",
    "languageEn": "Buginese",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "yi": {
    "id": 136,
    "language": "\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9",
    "languageEn": "Yiddish",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "sd": {
    "id": 137,
    "language": "\u0633\u0646\u068c\u064a\u060c \u0633\u0646\u062f\u06be\u06cc \u060c \u0938\u093f\u0928\u094d\u0927",
    "languageEn": "Sindhi",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ilo": {
    "id": 138,
    "language": "Ilokano",
    "languageEn": "Ilokano",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "am": {
    "id": 139,
    "language": "\u12a0\u121b\u122d\u129b",
    "languageEn": "Amharic",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "nap": {
    "id": 140,
    "language": "Nnapulitano",
    "languageEn": "Neapolitan",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "mzn": {
    "id": 141,
    "language": "\u0645\u064e\u0632\u0650\u0631\u0648\u0646\u064a",
    "languageEn": "Mazandarani",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "li": {
    "id": 142,
    "language": "Limburgs",
    "languageEn": "Limburgish",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ig": {
    "id": 143,
    "language": "Igbo",
    "languageEn": "Igbo",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "gor": {
    "id": 144,
    "language": "Hulontalo",
    "languageEn": "Gorontalo",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "hsb": {
    "id": 145,
    "language": "Hornjoserbsce",
    "languageEn": "Upper Sorbian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "fo": {
    "id": 146,
    "language": "F\u00f8royskt",
    "languageEn": "Faroese",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "map-bms": {
    "id": 147,
    "language": "Basa Banyumasan",
    "languageEn": "Banyumasan",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "mai": {
    "id": 148,
    "language": "\u092e\u0948\u0925\u093f\u0932\u0940",
    "languageEn": "Maithili",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "bcl": {
    "id": 149,
    "language": "Bikol",
    "languageEn": "Central Bicolano",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "eml": {
    "id": 150,
    "language": "Emili\u00e0n e rumagn\u00f2l",
    "languageEn": "Emilian-Romagnol",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "shn": {
    "id": 151,
    "language": "\u1075\u1082\u1062\u1019\u103a\u1038\u1010\u1086\u1038\u101c\u1030\u1004\u103a",
    "languageEn": "Shan",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ace": {
    "id": 152,
    "language": "Bahsa Ac\u00e8h",
    "languageEn": "Acehnese",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "zh-classical": {
    "id": 153,
    "language": "\u53e4\u6587 / \u6587\u8a00\u6587",
    "languageEn": "Classical Chinese",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "sa": {
    "id": 154,
    "language": "\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d",
    "languageEn": "Sanskrit",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "wa": {
    "id": 155,
    "language": "Walon",
    "languageEn": "Walloon",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "as": {
    "id": 156,
    "language": "\u0985\u09b8\u09ae\u09c0\u09df\u09be",
    "languageEn": "Assamese",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ie": {
    "id": 157,
    "language": "Interlingue",
    "languageEn": "Interlingue",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "lij": {
    "id": 158,
    "language": "L\u00edguru",
    "languageEn": "Ligurian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "zu": {
    "id": 159,
    "language": "isiZulu",
    "languageEn": "Zulu",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "mhr": {
    "id": 160,
    "language": "\u041e\u043b\u044b\u043a \u041c\u0430\u0440\u0438\u0439 (Olyk Marij)",
    "languageEn": "Meadow Mari",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "hyw": {
    "id": 161,
    "language": "\u0531\u0580\u0565\u0582\u0574\u057f\u0561\u0570\u0561\u0575\u0565\u0580\u0567\u0576",
    "languageEn": "Western Armenian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "hif": {
    "id": 162,
    "language": "Fiji Hindi",
    "languageEn": "Fiji Hindi",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "mrj": {
    "id": 163,
    "language": "\u041a\u044b\u0440\u044b\u043a \u041c\u0430\u0440\u044b (Kyryk Mary)",
    "languageEn": "Hill Mari",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "sn": {
    "id": 164,
    "language": "chiShona",
    "languageEn": "Shona",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "tum": {
    "id": 165,
    "language": "chiTumbuka",
    "languageEn": "Tumbuka",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "bjn": {
    "id": 166,
    "language": "Bahasa Banjar",
    "languageEn": "Banjar",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "mni": {
    "id": 167,
    "language": "\uabc3\uabe4\uabc7\uabe9\uabc2\uabe3\uabdf",
    "languageEn": "Meitei",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "km": {
    "id": 168,
    "language": "\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a",
    "languageEn": "Khmer",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "hak": {
    "id": 169,
    "language": "Hak-k\u00e2-fa / \u5ba2\u5bb6\u8a71",
    "languageEn": "Hakka",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "roa-tara": {
    "id": 170,
    "language": "Tarand\u00edne",
    "languageEn": "Tarantino",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "so": {
    "id": 171,
    "language": "Soomaaliga",
    "languageEn": "Somali",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "pam": {
    "id": 172,
    "language": "Kapampangan",
    "languageEn": "Kapampangan",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "rue": {
    "id": 173,
    "language": "\u0440\u0443\u0441\u0438\u043d\u044c\u0441\u043a\u044b\u0439 \u044f\u0437\u044b\u043a",
    "languageEn": "Rusyn",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "nso": {
    "id": 174,
    "language": "Sesotho sa Leboa",
    "languageEn": "Northern Sotho",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "bh": {
    "id": 175,
    "language": "\u092d\u094b\u091c\u092a\u0941\u0930\u0940",
    "languageEn": "Bihari",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "sat": {
    "id": 176,
    "language": "\u1c65\u1c5f\u1c71\u1c5b\u1c5f\u1c72\u1c64",
    "languageEn": "Santali",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "se": {
    "id": 177,
    "language": "S\u00e1megiella",
    "languageEn": "Northern Sami",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "myv": {
    "id": 178,
    "language": "\u042d\u0440\u0437\u044f\u043d\u044c (Erzjanj Kelj)",
    "languageEn": "Erzya",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "mi": {
    "id": 179,
    "language": "M\u0101ori",
    "languageEn": "Maori",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "vls": {
    "id": 180,
    "language": "West-Vlams",
    "languageEn": "West Flemish",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "nds-nl": {
    "id": 181,
    "language": "Nedersaksisch",
    "languageEn": "Dutch Low Saxon",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "nah": {
    "id": 182,
    "language": "N\u0101huatl",
    "languageEn": "Nahuatl",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "sc": {
    "id": 183,
    "language": "Sardu",
    "languageEn": "Sardinian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "kw": {
    "id": 184,
    "language": "Kernewek/Karnuack",
    "languageEn": "Cornish",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "glk": {
    "id": 185,
    "language": "\u06af\u06cc\u0644\u06a9\u06cc",
    "languageEn": "Gilaki",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "vep": {
    "id": 186,
    "language": "Veps\u00e4n",
    "languageEn": "Vepsian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "kab": {
    "id": 187,
    "language": "Taqbaylit",
    "languageEn": "Kabyle",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "tk": {
    "id": 188,
    "language": "\u062a\u0631\u0643\u0645\u0646 / \u0422\u0443\u0440\u043a\u043c\u0435\u043d",
    "languageEn": "Turkmen",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ary": {
    "id": 189,
    "language": "\u0627\u0644\u0644\u0647\u062c\u0629 \u0627\u0644\u0645\u063a\u0631\u0628\u064a\u0629",
    "languageEn": "Moroccan Arabic",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "gan": {
    "id": 190,
    "language": "\u8d1b\u8a9e",
    "languageEn": "Gan",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "co": {
    "id": 191,
    "language": "Corsu",
    "languageEn": "Corsican",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "dag": {
    "id": 192,
    "language": "Dagbanli",
    "languageEn": "Dagbani",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "fiu-vro": {
    "id": 193,
    "language": "V\u00f5ro",
    "languageEn": "V\u00f5ro",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "bo": {
    "id": 194,
    "language": "\u0f56\u0f7c\u0f51\u0f0b\u0f66\u0f90\u0f51",
    "languageEn": "Tibetan",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ab": {
    "id": 195,
    "language": "\u0410\u04a7\u0441\u0443\u0430",
    "languageEn": "Abkhazian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "rw": {
    "id": 196,
    "language": "Ikinyarwanda",
    "languageEn": "Kinyarwanda",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "gv": {
    "id": 197,
    "language": "Gaelg",
    "languageEn": "Manx",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "skr": {
    "id": 198,
    "language": "\u0633\u0631\u0627\u0626\u06cc\u06a9\u06cc",
    "languageEn": "Saraiki",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ug": {
    "id": 199,
    "language": "\u0626\u06c7\u064a\u063a\u06c7\u0631 \u062a\u0649\u0644\u0649",
    "languageEn": "Uyghur",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "zea": {
    "id": 200,
    "language": "Ze\u00eauws",
    "languageEn": "Zeelandic",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "frp": {
    "id": 201,
    "language": "Arpitan",
    "languageEn": "Franco-Proven\u00e7al/Arpitan",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "udm": {
    "id": 202,
    "language": "\u0423\u0434\u043c\u0443\u0440\u0442 \u043a\u044b\u043b",
    "languageEn": "Udmurt",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "pcd": {
    "id": 203,
    "language": "Picard",
    "languageEn": "Picard",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "kv": {
    "id": 204,
    "language": "\u041a\u043e\u043c\u0438",
    "languageEn": "Komi",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "csb": {
    "id": 205,
    "language": "Kasz\u00ebbsczi",
    "languageEn": "Kashubian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "mt": {
    "id": 206,
    "language": "Malti",
    "languageEn": "Maltese",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "gn": {
    "id": 207,
    "language": "Ava\u00f1e'\u1ebd",
    "languageEn": "Guarani",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "smn": {
    "id": 208,
    "language": "Anar\u00e2\u0161kiel\u00e2",
    "languageEn": "Inari Sami",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ay": {
    "id": 209,
    "language": "Aymar",
    "languageEn": "Aymara",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "nrm": {
    "id": 210,
    "language": "Nouormand/Normaund",
    "languageEn": "Norman",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "lez": {
    "id": 211,
    "language": "\u041b\u0435\u0437\u0433\u0438 \u0447\u0406\u0430\u043b",
    "languageEn": "Lezgian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "lfn": {
    "id": 212,
    "language": "Lingua Franca Nova 2",
    "languageEn": "Lingua Franca Nova 2",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "olo": {
    "id": 213,
    "language": "livvin kieli",
    "languageEn": "Livvi-Karelian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "stq": {
    "id": 214,
    "language": "Seeltersk",
    "languageEn": "Saterland Frisian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "mwl": {
    "id": 215,
    "language": "Mirand\u00e9s",
    "languageEn": "Mirandese",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "lo": {
    "id": 216,
    "language": "\u0ea5\u0eb2\u0ea7",
    "languageEn": "Lao",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ang": {
    "id": 217,
    "language": "Englisc",
    "languageEn": "Anglo-Saxon",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "fur": {
    "id": 218,
    "language": "Furlan",
    "languageEn": "Friulian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "rm": {
    "id": 219,
    "language": "Rumantsch",
    "languageEn": "Romansh",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "lad": {
    "id": 220,
    "language": "Dzhudezmo",
    "languageEn": "Ladino",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "gom": {
    "id": 221,
    "language": "\u0917\u094b\u0902\u092f\u091a\u0940 \u0915\u094b\u0902\u0915\u0923\u0940 / G\u00f5ychi Konknni",
    "languageEn": "Goan Konkani",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "koi": {
    "id": 222,
    "language": "\u041f\u0435\u0440\u0435\u043c \u041a\u043e\u043c\u0438 (Perem Komi)",
    "languageEn": "Komi-Permyak",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ext": {
    "id": 223,
    "language": "Estreme\u00f1u",
    "languageEn": "Extremaduran",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "tyv": {
    "id": 224,
    "language": "\u0442\u044b\u0432\u0430 \u0434\u044b\u043b",
    "languageEn": "Tuvan",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "dsb": {
    "id": 225,
    "language": "Dolnoserbski",
    "languageEn": "Lower Sorbian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "av": {
    "id": 226,
    "language": "\u0410\u0432\u0430\u0440",
    "languageEn": "Avar",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ln": {
    "id": 227,
    "language": "Lingala",
    "languageEn": "Lingala",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "dty": {
    "id": 228,
    "language": "\u0921\u094b\u091f\u0947\u0932\u0940",
    "languageEn": "Doteli",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "kaa": {
    "id": 229,
    "language": "Qaraqalpaqsha",
    "languageEn": "Karakalpak",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "pap": {
    "id": 230,
    "language": "Papiamentu",
    "languageEn": "Papiamentu",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "cbk-zam": {
    "id": 231,
    "language": "Chavacano de Zamboanga",
    "languageEn": "Zamboanga Chavacano",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "dv": {
    "id": 232,
    "language": "\u078b\u07a8\u0788\u07ac\u0780\u07a8\u0784\u07a6\u0790\u07b0",
    "languageEn": "Divehi",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "mdf": {
    "id": 233,
    "language": "\u041c\u043e\u043a\u0448\u0435\u043d\u044c (Mokshanj K\u00e4lj)",
    "languageEn": "Moksha",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ksh": {
    "id": 234,
    "language": "Ripoarisch",
    "languageEn": "Ripuarian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "tw": {
    "id": 235,
    "language": "Twi",
    "languageEn": "Twi",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ks": {
    "id": 236,
    "language": "\u0915\u0936\u094d\u092e\u0940\u0930\u0940 / \u0643\u0634\u0645\u064a\u0631\u064a",
    "languageEn": "Kashmiri",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "gag": {
    "id": 237,
    "language": "Gagauz",
    "languageEn": "Gagauz",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "bxr": {
    "id": 238,
    "language": "\u0411\u0443\u0440\u044f\u0430\u0434",
    "languageEn": "Buryat (Russia)",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "pfl": {
    "id": 239,
    "language": "Pf\u00e4lzisch",
    "languageEn": "Palatinate German",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "lg": {
    "id": 240,
    "language": "Luganda",
    "languageEn": "Luganda",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "za": {
    "id": 241,
    "language": "Cuengh",
    "languageEn": "Zhuang",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "pi": {
    "id": 242,
    "language": "\u092a\u093e\u0934\u093f",
    "languageEn": "Pali",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "pag": {
    "id": 243,
    "language": "Pangasinan",
    "languageEn": "Pangasinan",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "szy": {
    "id": 244,
    "language": "Sakizaya",
    "languageEn": "Sakizaya",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "haw": {
    "id": 245,
    "language": "Hawai`i",
    "languageEn": "Hawaiian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "awa": {
    "id": 246,
    "language": "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",
    "languageEn": "Awadhi",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "tay": {
    "id": 247,
    "language": "Tayal",
    "languageEn": "Atayal",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "blk": {
    "id": 248,
    "language": "\u1015\u1021\u102d\u102f\u101d\u103a\u108f\u1018\u102c\u108f\u101e\u102c\u108f",
    "languageEn": "Pa'O",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "inh": {
    "id": 249,
    "language": "\u0413\u04c0\u0430\u043b\u0433\u04c0\u0430\u0439",
    "languageEn": "Ingush",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "krc": {
    "id": 250,
    "language": "\u041a\u044a\u0430\u0440\u0430\u0447\u0430\u0439-\u041c\u0430\u043b\u043a\u044a\u0430\u0440 (Qarachay-Malqar)",
    "languageEn": "Karachay-Balkar",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "xal": {
    "id": 251,
    "language": "\u0425\u0430\u043b\u044c\u043c\u0433",
    "languageEn": "Kalmyk",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "pdc": {
    "id": 252,
    "language": "Deitsch",
    "languageEn": "Pennsylvania German",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "to": {
    "id": 253,
    "language": "faka Tonga",
    "languageEn": "Tongan",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "atj": {
    "id": 254,
    "language": "Atikamekw Nehiromowin",
    "languageEn": "Atikamekw",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "arc": {
    "id": 255,
    "language": "\u0710\u072a\u0721\u071d\u0710",
    "languageEn": "Aramaic",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "tcy": {
    "id": 256,
    "language": "\u0ca4\u0cc1\u0cb3\u0cc1 \u0cad\u0cbe\u0cb7\u0cc6",
    "languageEn": "Tulu",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "mnw": {
    "id": 257,
    "language": "\u1018\u102c\u101e\u102c \u1019\u1014\u103a",
    "languageEn": "Mon",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "jam": {
    "id": 258,
    "language": "Patois",
    "languageEn": "Jamaican",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "kbp": {
    "id": 259,
    "language": "Kab\u0269y\u025b",
    "languageEn": "Kabiye",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "na": {
    "id": 260,
    "language": "dorerin Naoero",
    "languageEn": "Nauruan",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "wo": {
    "id": 261,
    "language": "Wolof",
    "languageEn": "Wolof",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "kbd": {
    "id": 262,
    "language": "\u0410\u0434\u044b\u0433\u044d\u0431\u0437\u044d (Adighabze)",
    "languageEn": "Kabardian Circassian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "nia": {
    "id": 263,
    "language": "Li Niha",
    "languageEn": "Nias",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "nov": {
    "id": 264,
    "language": "Novial",
    "languageEn": "Novial",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "shi": {
    "id": 265,
    "language": "Taclhit",
    "languageEn": "Tachelhit",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ki": {
    "id": 266,
    "language": "G\u0129k\u0169y\u0169",
    "languageEn": "Kikuyu",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "nqo": {
    "id": 267,
    "language": "\u07d2\u07de\u07cf",
    "languageEn": "N'Ko",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "anp": {
    "id": 268,
    "language": "\u0905\u0902\u0917\u093f\u0915\u093e",
    "languageEn": "Angika",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "bi": {
    "id": 269,
    "language": "Bislama",
    "languageEn": "Bislama",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "tpi": {
    "id": 270,
    "language": "Tok Pisin",
    "languageEn": "Tok Pisin",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "tet": {
    "id": 271,
    "language": "Tetun",
    "languageEn": "Tetum",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "jbo": {
    "id": 272,
    "language": "Lojban",
    "languageEn": "Lojban",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "roa-rup": {
    "id": 273,
    "language": "Arm\u00e3neashce",
    "languageEn": "Aromanian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "xh": {
    "id": 274,
    "language": "isiXhosa",
    "languageEn": "Xhosa",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "fj": {
    "id": 275,
    "language": "Na Vosa Vakaviti",
    "languageEn": "Fijian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "om": {
    "id": 276,
    "language": "Oromoo",
    "languageEn": "Oromo",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "kg": {
    "id": 277,
    "language": "KiKongo",
    "languageEn": "Kongo",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "lbe": {
    "id": 278,
    "language": "\u041b\u0430\u043a\u043a\u0443",
    "languageEn": "Lak",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ty": {
    "id": 279,
    "language": "Reo M\u0101`ohi",
    "languageEn": "Tahitian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "guw": {
    "id": 280,
    "language": "Gungb\u00e8",
    "languageEn": "Gun",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "cu": {
    "id": 281,
    "language": "\u0421\u043b\u043e\u0432\u0463\u043d\u044c\u0441\u043a\u044a",
    "languageEn": "Old Church Slavonic",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "trv": {
    "id": 282,
    "language": "Kari Seediq",
    "languageEn": "Seediq",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "srn": {
    "id": 283,
    "language": "Sranantongo",
    "languageEn": "Sranan",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "sm": {
    "id": 284,
    "language": "Gagana Samoa",
    "languageEn": "Samoan",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "alt": {
    "id": 285,
    "language": "\u0430\u043b\u0442\u0430\u0439 \u0442\u0438\u043b",
    "languageEn": "Altai",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "gcr": {
    "id": 286,
    "language": "Kriy\u00f2l Gwiyannen",
    "languageEn": "Guianan Creole",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "chr": {
    "id": 287,
    "language": "\u13e3\u13b3\u13a9",
    "languageEn": "Cherokee",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ltg": {
    "id": 288,
    "language": "Latga\u013cu",
    "languageEn": "Latgalian",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "tn": {
    "id": 289,
    "language": "Setswana",
    "languageEn": "Tswana",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ny": {
    "id": 290,
    "language": "Chi-Chewa",
    "languageEn": "Chichewa",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "mad": {
    "id": 291,
    "language": "Madhur\u00e2",
    "languageEn": "Madurese",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "st": {
    "id": 292,
    "language": "Sesotho",
    "languageEn": "Sesotho",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "pih": {
    "id": 293,
    "language": "Norfuk",
    "languageEn": "Norfolk",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "got": {
    "id": 294,
    "language": "\ud800\udf32\ud800\udf3f\ud800\udf44\ud800\udf39\ud800\udf43\ud800\udf3a",
    "languageEn": "Gothic",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ee": {
    "id": 295,
    "language": "E\u028begbe",
    "languageEn": "Ewe",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ami": {
    "id": 296,
    "language": "Pangcah / 'Amis",
    "languageEn": "Amis",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "rmy": {
    "id": 297,
    "language": "romani - \u0930\u094b\u092e\u093e\u0928\u0940",
    "languageEn": "Romani",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "bm": {
    "id": 298,
    "language": "Bamanankan",
    "languageEn": "Bambara",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ff": {
    "id": 299,
    "language": "Fulfulde",
    "languageEn": "Fula",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ve": {
    "id": 300,
    "language": "Tshivenda",
    "languageEn": "Venda",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ts": {
    "id": 301,
    "language": "Xitsonga",
    "languageEn": "Tsonga",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "chy": {
    "id": 302,
    "language": "Tsets\u00eahest\u00e2hese",
    "languageEn": "Cheyenne",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ss": {
    "id": 303,
    "language": "SiSwati",
    "languageEn": "Swati",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "kcg": {
    "id": 304,
    "language": "Tyap",
    "languageEn": "Tyap",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "rn": {
    "id": 305,
    "language": "Kirundi",
    "languageEn": "Kirundi",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "pcm": {
    "id": 306,
    "language": "Naija",
    "languageEn": "Nigerian Pidgin",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ch": {
    "id": 307,
    "language": "Chamoru",
    "languageEn": "Chamorro",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ik": {
    "id": 308,
    "language": "I\u00f1upiak",
    "languageEn": "Inupiak",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "pnt": {
    "id": 309,
    "language": "\u03a0\u03bf\u03bd\u03c4\u03b9\u03b1\u03ba\u03ac",
    "languageEn": "Pontic",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ady": {
    "id": 310,
    "language": "\u0430\u0434\u044b\u0433\u0430\u0431\u0437\u044d",
    "languageEn": "Adyghe",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "guc": {
    "id": 311,
    "language": "wayuunaiki",
    "languageEn": "Wayuu",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "iu": {
    "id": 312,
    "language": "\u1403\u14c4\u1483\u144e\u1450\u1466",
    "languageEn": "Inuktitut",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ak": {
    "id": 313,
    "language": "Akana",
    "languageEn": "Akan",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "pwn": {
    "id": 314,
    "language": "Pinayuanan",
    "languageEn": "Paiwan",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "sg": {
    "id": 315,
    "language": "S\u00e4ng\u00f6",
    "languageEn": "Sango",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "din": {
    "id": 316,
    "language": "Thu\u0254\u014bj\u00e4\u014b",
    "languageEn": "Dinka",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ti": {
    "id": 317,
    "language": "\u1275\u130d\u122d\u129b",
    "languageEn": "Tigrinya",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "kl": {
    "id": 318,
    "language": "Kalaallisut",
    "languageEn": "Greenlandic",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "dz": {
    "id": 319,
    "language": "\u0f47\u0f7c\u0f44\u0f0b\u0f41",
    "languageEn": "Dzongkha",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "gur": {
    "id": 320,
    "language": "Guren\u025b",
    "languageEn": "Guren\u025b",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "cr": {
    "id": 321,
    "language": "Nehiyaw",
    "languageEn": "Cree",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ng": {
    "id": 322,
    "language": "Oshiwambo",
    "languageEn": "Ndonga",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "cho": {
    "id": 323,
    "language": "Choctaw",
    "languageEn": "Choctaw",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "mh": {
    "id": 324,
    "language": "Ebon",
    "languageEn": "Marshallese",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "kj": {
    "id": 325,
    "language": "Kuanyama",
    "languageEn": "Kuanyama",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ho": {
    "id": 326,
    "language": "Hiri Motu",
    "languageEn": "Hiri Motu",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "ii": {
    "id": 327,
    "language": "\ua187\ua259",
    "languageEn": "Sichuan Yi",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "lrc": {
    "id": 328,
    "language": "\u0644\u06ca\u0631\u06cc \u0634\u0648\u0645\u0627\u0644\u06cc",
    "languageEn": "Northern Luri",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "mus": {
    "id": 329,
    "language": "Muskogee",
    "languageEn": "Muscogee",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "aa": {
    "id": 330,
    "language": "Afar",
    "languageEn": "Afar",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "hz": {
    "id": 331,
    "language": "Otsiherero",
    "languageEn": "Herero",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  },
  "kr": {
    "id": 332,
    "language": "Kanuri",
    "languageEn": "Kanuri",
    "title": "Freedom to Transact",
    "explainer": "Freedom to transact underlies all other constitutional rights. Without the freedom to transact, you have no other constitutional rights.",
    "mintUrl": ""
  }
}
