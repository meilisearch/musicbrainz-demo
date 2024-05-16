/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-console */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { instantMeiliSearch as instantMeilisearch } from '@meilisearch/instant-meilisearch'
import { MeiliSearch as Meilisearch } from 'meilisearch'

import ApiKeyContext from 'context/ApiKeyContext'
import { useMeilisearchClientContext } from 'context/MeilisearchClientContext'
import useLocalStorage from 'hooks/useLocalStorage'
import Body from 'components/Body'
import clientAgents from './version/client-agents'

export const baseUrl =
  process.env.REACT_APP_MEILI_SERVER_ADDRESS ||
  (process.env.NODE_ENV === 'development'
    ? 'http://0.0.0.0:7700'
    : window.location.origin)

const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.gray[11]};
  min-height: 100vh;
`

const App = () => {
  const [apiKey, setApiKey] = useLocalStorage('apiKey')
  const [currentIndex, setCurrentIndex] = useLocalStorage('currentIndex')

  const { setMeilisearchJsClient, setInstantMeilisearchClient } =
    useMeilisearchClientContext()

  useEffect(() => {
    setInstantMeilisearchClient(
      instantMeilisearch(baseUrl, apiKey, {
        primaryKey: 'id',
        clientAgents,
      }).searchClient
    )

    setMeilisearchJsClient(
      new Meilisearch({
        host: baseUrl,
        apiKey,
        clientAgents,
      })
    )
  }, [apiKey])

  return (
    <ApiKeyContext.Provider value={{ apiKey, setApiKey }}>
      <Wrapper>
        <Body currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      </Wrapper>
    </ApiKeyContext.Provider>
  )
}

export default App
