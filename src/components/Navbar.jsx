import React from 'react'
import { Link } from 'react-router-dom'
import MovieLogo from '../MovieLogo.png'

export const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center p-3">
      <img className="w-16 h-16" src={MovieLogo} alt="Logo" />
      <Link to="/" className="text-4xl font-medium text-blue-500 hover:text-blue-700">Movies</Link>
      <Link to="/watchlist" className="text-4xl font-medium text-blue-500 hover:text-blue-700">Watchlist</Link>
    </div>
  )
}
