/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-console */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { instantMeiliSearch as instantMeilisearch } from '@meilisearch/instant-meilisearch'
import { MeiliSearch as Meilisearch } from 'meilisearch'

import ApiKeyContext from 'context/ApiKeyContext'
import { ArtistsProvider } from 'context/ArtistsContext'
import { useMeilisearchClientContext } from 'context/MeilisearchClientContext'
import useLocalStorage from 'hooks/useLocalStorage'
import Body from 'components/Body'
import clientAgents from './version/client-agents'

export const baseUrl =
  process.env.REACT_APP_MEILI_SERVER_ADDRESS ||
  (process.env.NODE_ENV === 'development'
    ? 'http://0.0.0.0:7700'
    : window.location.origin)

export const apiKey = process.env.REACT_APP_MEILI_API_KEY

const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.gray[11]};
  min-height: 100vh;
`

const App = () => {
  const [currentIndex, setCurrentIndex] = useLocalStorage('currentIndex')

  if (!currentIndex) {
    setCurrentIndex({
      uid: 'MusicBrainz',
      stats: {
        numberOfDocuments: 44978258,
        isIndexing: false,
        fieldDistribution: {
          _vectors: 44479493,
          album: 44978258,
          artist: 44978258,
          artist_rating: 10751745,
          artist_rating_count: 10751745,
          duration: 40458440,
          genres: 44978258,
          id: 44978258,
          image_url: 44978258,
          last_updated: 44978258,
          last_updated_timestamp: 44978258,
          new_rating: 44978258,
          rating: 10751745,
          raw_rating: 44978258,
          released_year: 44978258,
          status: 44978258,
          title: 44978258,
          track_rating: 3551527,
        },
      },
    })
  }

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
    <ArtistsProvider>
      <ApiKeyContext.Provider value={{ apiKey }}>
        <Wrapper>
          <>
            <Body currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
          </>
        </Wrapper>
      </ApiKeyContext.Provider>
    </ArtistsProvider>
  )
}

export default App
