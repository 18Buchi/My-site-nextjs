import Head from 'next/head'
import { Header } from '../components/Header'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export default function Home() {
  const menu= <FaIcons.FaBars />;
  const home = <AiIcons.AiFillHome />;

  return(
    <div>

    
      <Head>
        <title>Buchi</title>
        <link rel="icon" href="/STREETHANDS.png" />
      </Head>
      <Header link="./outlink" icon={menu}/>

    </div>
      
  )
}
