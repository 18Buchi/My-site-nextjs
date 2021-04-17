import Head from "next/head";
import { Header, Headerbar } from "../components/Header";
import * as BiIcons from "react-icons/bi";

export default function Outlink() {
  const home = <BiIcons.BiHomeSmile />;
  return (
    <div>
      <Head>
        <title>Buchi.Outlink</title>
      </Head>

      <Header link="./" icon={home} />
      <Headerbar />
    </div>
  );
}
