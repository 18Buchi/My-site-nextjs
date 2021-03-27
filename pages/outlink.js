import Head from 'next/head'
import { Header, Headerbar } from '../components/Header'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";


export default function About() {
  const menu = <FaIcons.FaBars />;
  const home = <BiIcons.BiHomeSmile />;
  return (
    <div>
    <Head>
        <title>Buchi.Outlink</title>
        <link rel="icon" href="/STREETHANDS.png" />
      </Head>

    <Header  link="./" icon={home}/>
    <Headerbar  link="./"/>
    </div>
  )
}
