
import Address from './components/Address'
import AuditAndKyc from './components/AuditAndKyc'
import Banner from './components/Banner'
import Charts from './components/Chart'

import FAQ from './components/FAQ'
import Layout from './components/Layout'
import Members from './components/Members'
import ReactTree from './components/ReactTree'
import Slidar from './components/Slider'
import Token from './components/Token'
import TokenInfo from './components/TokenInfo'
import WhitePaper from './components/WhitePaper'
import WhyInverse from './components/WhyInverse'

export default function Home() {
  return (
    <div>
      <Layout>
        <Banner />
        <div className='background-audit'>
          <AuditAndKyc />   </div>
        <WhyInverse />
        <div className='background-audit px-2'>
          <WhitePaper />
          {/* <TokenInfo /> */}
          <Token />
          {/* <Slidar/> */}
        </div>
        <div className='background-audit'>
          <ReactTree /></div>
        <div className='background-audit pb-8 lg:pb-24 px-2'>
          <Address /></div>
        <div className='background-audit pb-8 lg:pb-24 px-2'>
          <Charts /></div>
        <div className='background-audit pb-8 lg:pb-12 px-2'>
          <Members /></div>
        <div className='background-audit pb-8 lg:pb-24 px-2'>
          <FAQ /></div>
      </Layout>
    </div>
  )
}
