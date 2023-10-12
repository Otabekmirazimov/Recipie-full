import React from 'react'
import { useFetch } from '../hooks/useFetch'
import RecipieList from '../components/RecipieList';

function Home() {
  const { data:recipies, isPending, error } = useFetch("https://glow-spring-elf.glitch.me/recipes")
  return <>{recipies && <RecipieList recipies={recipies} />}</>;
}

export default Home