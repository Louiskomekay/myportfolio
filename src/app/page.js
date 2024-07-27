'use client'

import Hero from "./_components/Hero";
import RestOfTheHomepage from './_components/RestOfTheHomepage';
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.1 }}>
      <Hero />
      <RestOfTheHomepage />
    </motion.div>
  )
}

export default Homepage;