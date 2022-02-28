export const deleteReservation = (reservationId) => {
  return $.ajax({
    url: `/api/reservations/${reservationId}`,
    method: "DELETE"
  })
}

export const createReservation = (reservation) => {

  return $.ajax({
    method: 'POST',
    url: `/api/reservations`,
    data: { reservation }
  })
}

export const updateReview = (reservation) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/reservations/${reservation.id}`,
    data: { reservation },
  })
}