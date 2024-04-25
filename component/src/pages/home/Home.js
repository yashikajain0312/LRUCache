import React from 'react'
import GetCacheComponent from '../../components/GetCacheComponent'
import SetCacheComponent from '../../components/SetCacheComponent'
import CacheStateComponent from '../../components/CacheStateComponent'
import DeleteCacheComponent from '../../components/DeleteCacheComponent'

const Home = () => {
  return (
    <div>
        <GetCacheComponent />
        <SetCacheComponent />
        <CacheStateComponent />
        <DeleteCacheComponent />
    </div>
  )
}

export default Home