"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Users, Clock, CastleIcon as ChessKnight } from "lucide-react"
import bg from "../assets/images/bgprofile.webp"

function WaitQueue({ length = 2 }) {
  const [dots, setDots] = useState("")
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    // Animated dots
    const dotsInterval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return ""
        return prev + "."
      })
    }, 500)

    // Elapsed time counter
    const elapsedInterval = setInterval(() => {
      setElapsed((prev) => prev + 1)
    }, 1000)

    return () => {
      clearInterval(dotsInterval)
      clearInterval(elapsedInterval)
    }
  }, [])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" + secs : secs}`
  }

  return (
    <div
      className="w-screen min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 max-w-md w-full mx-4 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700">
        <div className="text-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
          >
            <ChessKnight className="w-12 h-12 text-white" />
          </motion.div>

          <h2 className="text-3xl font-bold text-white mb-2">Finding Opponent</h2>
          <p className="text-xl text-gray-300 mb-8">
            Waiting for {length - 1} more player{length - 1 !== 1 ? "s" : ""} to join{dots}
          </p>

          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="text-center">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Players Needed</p>
              <p className="text-2xl font-bold text-white">{length - 1}</p>
            </div>

            <div className="text-center">
              <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Wait Time</p>
              <p className="text-2xl font-bold text-white">{formatTime(elapsed)}</p>
            </div>
          </div>

          <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600"
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>

          <p className="mt-6 text-gray-400 text-sm">
            You'll be automatically matched with an opponent as soon as one becomes available.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WaitQueue

