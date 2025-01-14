import React from 'react'
import { TopSQLApp, TopSQLProvider } from '@pingcap/tidb-dashboard-lib'
import { getGlobalConfig } from '~/uilts/globalConfig'
import { ctx } from './context'

export default function () {
  return (
    <TopSQLProvider value={ctx(getGlobalConfig().appsConfig?.topSQL || {})}>
      <TopSQLApp />
    </TopSQLProvider>
  )
}
