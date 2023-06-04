import moment from 'moment'

export const formatDateHM = (date) => moment(date).format("dddd D MMMM HH:mm")

export const formatDateToYMD = (date) => date.toISOString().slice(0, 10);