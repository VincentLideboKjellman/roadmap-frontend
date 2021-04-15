import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listReleaseDetails, updateRelease } from '../actions/releaseActions'
import styled from 'styled-components'
import EditReleaseCard from '../components/release/EditReleaseCard'
import EditCategoryCard from '../components/category/EditCategoryCard'
import EditEntryCard from '../components/entry/EditEntryCard'
import LoaderComponent from '../components/LoaderComponent'
import Message from '../components/Message'
import GoBack from '../components/GoBack'
import { RELEASE_UPDATE_RESET } from '../constants/releaseConstants'

const Button = styled.button`
  background-color: var(--vgr-btn);
  background-image: linear-gradient(to bottom, #4ab31f 0, #39791f 100%);
  color: var(--vgr-text);
  border-radius: 0.25rem;
  font-size: 0.8rem;
  padding: 0.4rem 1.5rem;
  line-height: 150%;
  cursor: pointer;
  margin: 0 0.5rem;
  border: none;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
  color: var(--vgr-text);
`

const Form = styled.form`
  margin-left: 7.5rem;
  display: flex;
  margin-top: 1rem;
`

const EditReleaseScreen = ({ history, match }) => {
  const releaseId = match.params.id
  const [release_name, setReleaseName] = useState('')
  const [release_desc, setReleaseDesc] = useState('')
  const [categories, setCategories] = useState([])

  const dispatch = useDispatch()

  const releaseDetails = useSelector((state) => state.releaseDetails)
  const { loading, error, release } = releaseDetails

  const releaseUpdate = useSelector((state) => state.releaseUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = releaseUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: RELEASE_UPDATE_RESET })
      // history.push('/admin')
    } else {
      if (!release.release_name || release._id !== releaseId) {
        dispatch(listReleaseDetails(releaseId))
      } else {
        setReleaseName(release.release_name)
        setReleaseDesc(release.release_desc)
        setCategories(release.categories)
      }
    }
  }, [dispatch, history, release, releaseId, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateRelease({
        _id: releaseId,
        release_name,
        release_desc,
        categories: categories,
      })
    )
  }

  const handleReleaseChange = (value, field) => {
    if (field === 'release_name') {
      setReleaseName(value)
    } else if (field === 'release_desc') {
      setReleaseDesc(value)
    }
  }

  const handleCategoryDelete = (id) => {
    let updated = categories
    let index = updated
      .map((category) => {
        return category._id
      })
      .indexOf(id)

    updated.splice(index, 1)

    setCategories(updated)

    dispatch(
      updateRelease({
        _id: releaseId,
        release_name,
        release_desc,
        categories: categories,
      })
    )
  }

  const handleCategoryChange = (value, id) => {
    let updated = categories.map((category) => {
      if (category._id === id) {
        return { ...category, category_name: value }
      }

      return category
    })

    setCategories(updated)
  }

  const handleAddCategory = (value) => {
    setCategories((categories) => [
      ...categories,
      { category_name: value, entries: [] },
    ])
  }

  const handleEntryChange = (value, id, field) => {
    let updated = categories.map((category) => {
      let updatedEntry = category.entries.map((entry) => {
        if (entry._id === id) {
          switch (field) {
            case 'entry_name':
              return { ...entry, entry_name: value }
            case 'status':
              return { ...entry, status: value }
            case 'short_desc':
              return { ...entry, short_desc: value }
            case 'extended_desc':
              return { ...entry, entry_name: value }
            default:
              return { ...entry }
          }
        }
        return entry
      })

      category.entries = updatedEntry
      return category
    })

    setCategories(updated)
  }

  const handleAddEntry = (value, id) => {
    const currentCategory = categories.find((category) => category._id === id)

    currentCategory.entries.push(value)

    let updated = categories.map((category) => {
      if (category._id === id) {
        return { ...category, currentCategory }
      }

      return category
    })

    setCategories(updated)
  }

  const handleEntryDelete = (categoryId, entryId) => {
    const currentCategory = categories.find(
      (category) => category._id === categoryId
    )

    let index = currentCategory.entries
      .map((entry) => {
        return entry._id
      })
      .indexOf(entryId)

    currentCategory.entries.splice(index, 1)

    let updated = categories.map((category) => {
      if (category._id === categoryId) {
        return { ...category, currentCategory }
      }

      return category
    })

    setCategories(updated)

    dispatch(
      updateRelease({
        _id: releaseId,
        release_name,
        release_desc,
        categories: categories,
      })
    )
  }

  return (
    <>
      <GoBack />
      <Container>
        {loadingUpdate && <LoaderComponent />}
        {errorUpdate && <Message danger children={errorUpdate} />}
        {successUpdate && <Message success children='Updated' />}

        <h2>Redigera: {release.release_name}</h2>
        {loading ? (
          <LoaderComponent />
        ) : error ? (
          <Message danger children={error} />
        ) : (
          <Form onSubmit={submitHandler}>
            <EditReleaseCard
              version={release_name}
              description={release_desc}
              onChange={handleReleaseChange}
            >
              {categories.map((category, index) => (
                <EditCategoryCard
                  key={index}
                  categoryId={category._id}
                  categoryName={category.category_name}
                  onChange={handleCategoryChange}
                  onDelete={handleCategoryDelete}
                >
                  {category.entries.map((entry, index) => (
                    <EditEntryCard
                      key={index}
                      categoryId={category._id}
                      entryId={entry._id}
                      entryName={entry.entry_name}
                      status={entry.status}
                      shortDesc={entry.short_desc}
                      extDesc={entry.extended_desc}
                      onChange={handleEntryChange}
                      onDelete={handleEntryDelete}
                    />
                  ))}
                  <EditEntryCard
                    isNew={true}
                    categoryId={category._id}
                    onChange={handleAddEntry}
                  />
                </EditCategoryCard>
              ))}

              <EditCategoryCard isNew={true} onChange={handleAddCategory} />
            </EditReleaseCard>
            <div>
              <Button type='submit'>Spara</Button>
            </div>
          </Form>
        )}
      </Container>
    </>
  )
}

export default EditReleaseScreen
