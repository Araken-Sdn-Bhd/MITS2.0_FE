import Dass from './components/Self-Test/Dass/Dass'
import DassResult from './components/Self-Test/Dass/DassResult'

import Phq from './components/Self-Test/Phq/Phq'
import PhqResults from './components/Self-Test/Phq/PhqResults'

import Whodas1 from './components/Self-Test/Whodas/Whodas_1'
import Whodas2 from './components/Self-Test/Whodas/Whodas_2'
import Whodas3 from './components/Self-Test/Whodas/Whodas_3'
import Whodas4 from './components/Self-Test/Whodas/Whodas_4'
import Whodas5 from './components/Self-Test/Whodas/Whodas_5'
import Whodas6 from './components/Self-Test/Whodas/Whodas_6'
import Whodas7 from './components/Self-Test/Whodas/Whodas_7'
import WhodasResult from './components/Self-Test/Whodas/WhodasResult'
import whodasResultChild from './components/Self-Test/Whodas/whodasResultChild'

import Cbi from './components/Self-Test/Cbi/CBI'
import CbiResult from './components/Self-Test/Cbi/CbiResult'

import ReqApp from './components/Self-Test/RequestApp/ReqApp'

import Demographic from './components/SHHARP/demographic'

import HospManag from './components/SHHARP/hosp-manag'
import Protective from './components/SHHARP/protective-factors'
import Risk from './components/SHHARP/risk-factors'
import SelfHarm from './components/SHHARP/self-harm'
import SourceData from './components/SHHARP/source-data'
import Suicide from './components/SHHARP/suicide-risk'

import SHHARPForm from './components/SHHARP/SHHARP-form'

export default [
  {
    path: '/',
    component: Dass
  },
  {
    path: '/dass',
    component: Dass
  },
  {
    path: '/dass-results',
    component: DassResult
  },
  {
    path: '/phq',
    component: Phq
  },
  {
    path: '/phq-results',
    component: PhqResults
  },
  {
    path: '/whodas_1',
    component: Whodas1
  },
  {
    path: '/whodas_2',
    component: Whodas2
  },
  {
    path: '/whodas_3',
    component: Whodas3
  },
  {
    path: '/whodas_4',
    component: Whodas4
  },
  {
    path: '/whodas_5',
    component: Whodas5
  },
  {
    path: '/whodas_6',
    component: Whodas6
  },
  {
    path: '/whodas_7',
    component: Whodas7
  },
  {
    path: '/whodas-result',
    component: WhodasResult
  },
  {
    path: '/whodas-result-child',
    component: whodasResultChild
  },
  {
    path: '/cbi',
    component: Cbi
  },
  {
    path: '/cbi-results',
    component: CbiResult
  },
  {
    path: '/reqApp',
    component: ReqApp
  },
  {
    path: '/demographic',
    component: Demographic
  },
  {
    path: '/hospital-management',
    component: HospManag
  },
  {
    path: '/risk-factors',
    component: Risk
  },
  {
    path: '/protective-factors',
    component: Protective
  },
  {
    path: '/self-harm-act-and-suicidal-intent',
    component: SelfHarm
  },
  {
    path: '/suicide-risk',
    component: Suicide
  },
  {
    path: '/source-data-producer',
    component: SourceData
  },
  {
    path: '/SHHARP',
    component: SHHARPForm
  },
]
