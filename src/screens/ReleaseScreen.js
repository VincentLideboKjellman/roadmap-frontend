import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import CategoryCard from '../components/category/CategoryCard'
import EntryCard from '../components/entry/EntryCard'
import ReleaseCard from '../components/release/ReleaseCard'
import { listReleases } from '../actions/releaseActions'
import Message from '../components/Message'
import LoaderComponent from '../components/LoaderComponent'

const Container = styled.div`
  display: flex;
  overflow: hidden;
  min-width: 100vw;
`

const ReleaseScreen = () => {
  const dispatch = useDispatch()

  const releaseList = useSelector((state) => state.releaseList)
  const { loading, error, releases } = releaseList

  useEffect(() => {
    dispatch(listReleases())
  }, [dispatch])

  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <Message variant='danger' children={error} />
      ) : (
        <Container>
          {releases.map((release) => (
            <ReleaseCard
              key={release._id}
              version={release.release_name}
              description={release.release_desc}
            >
              {release.categories.map((category) => (
                <CategoryCard
                  key={category._id}
                  categoryName={category.category_name}
                >
                  {category.entries.map((entry) => (
                    <EntryCard
                      key={entry._id}
                      entryName={entry.entry_name}
                      shortDesc={entry.short_desc}
                      status={entry.status}
                    ></EntryCard>
                  ))}
                </CategoryCard>
              ))}
            </ReleaseCard>
          ))}
        </Container>
      )}
    </>
  )
}

export default ReleaseScreen
