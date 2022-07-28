export const formatDateHM = (date) => {
    const hour = new Date(date).getHours();
    const min = new Date(date).getMinutes();

    return `${hour}:${min < 10 ? `0${min}` : min}`
}

export const formatDateToYMD = (date) => date.toISOString().slice(0, 10);