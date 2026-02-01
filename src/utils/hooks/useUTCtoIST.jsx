const useUTCtoIST = (utcDate) => {
    const date = new Date(utcDate);

    const formatter = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    })
    return formatter.format(date);
};
export default useUTCtoIST;