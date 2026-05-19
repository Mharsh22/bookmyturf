const BASE_URL = 'http://localhost:5000/api'

export const getTurfs = async () => {
  const response = await fetch(`${BASE_URL}/turfs`)
  const data = await response.json()
  return data
}

export const getBookings = async () => {
  const response = await fetch(`${BASE_URL}/bookings`)
  const data = await response.json()
  return data
}

export const createBooking = async (bookingData: object) => {
  const response = await fetch(`${BASE_URL}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingData)
  })
  const data = await response.json()
  return data
}